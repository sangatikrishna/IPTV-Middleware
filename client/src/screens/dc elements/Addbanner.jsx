import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import { Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";
import Sidebardc from "components/sidebardc.jsx";

const AddBanner = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    visible: "",
    image: "",
  });

  const handleReset = () => {
    setFormData({
      title: "",
      // name: "",
      // quantity: "",
      // model: "",
      // purchase_price: "",
      // manufacturer: "",
      // sale_price: "",
      // date: "",
      // available: "",
      // description: "",
    });
  };
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/dashboard_banners/list/${_id}`)
        .then((response) => {
          const bannerData = response.data;
          setFormData({
            title: bannerData.title,
            quantity: bannerData.quantity,
            model: bannerData.model,
            purchase_price: bannerData.purchase_price,
            manufacturer: bannerData.manufacturer,
            sale_price: bannerData.sale_price,
            date: bannerData.date,
            available: bannerData.available,
            description: bannerData.description,
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);

const handleSubmit = (e) => {
  e.preventDefault();

  if (_id) {
    // If _id is defined, it's an edit operation
    const apiUrl = `http://localhost:5001/api/dashboard_banners/patch/${_id}`; // Edit
    axios
      .patch(apiUrl, formData) // Use axios.patch for the PATCH request
      .then((response) => {
        setSuccessMessage("Product updated successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    // If _id is not defined, it's an add operation
    const apiUrl = "http://localhost:5001/api/dashboard_banners/post"; // Add
    axios
      .post(apiUrl, formData) // Use axios.post for the POST request
      .then((response) => {
        setSuccessMessage("category added successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

  return (
    
<Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
    {/* // <Box m="1.5rem 2.5rem" ml="300px"> */}
      <FlexBetween>
        <Header title="DASHBOARDBANNER DETAILS" />

        <Box></Box>
      </FlexBetween>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl>
          <FormControlLabel
            
            label=" Visible"
            control={
              <Checkbox
                id="agree"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
          />
        </FormControl>

        <InputFileUpload />
        {/* <TextField
          fullWidth
          name=" choose file"
          label="Choose file"
          variant="outlined"
          value={formData.select_channel_image}
          onChange={handleChange}
          margin="normal"
        /> */}

        <FormControl fullWidth variant="outlined" margin="normal"></FormControl>

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button onClick={handleReset} style={{ backgroundColor: "white", color: "black" }}>
            Reset
          </Button>

          <Button type="submit" style={{ backgroundColor: "green" }}>Submit</Button>
        </ButtonGroup>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}

      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          {successMessage}
        </Alert>
      </Snackbar>
      {/* <SidebarDC /> */}
    </Box>
  );
};

export default AddBanner;
