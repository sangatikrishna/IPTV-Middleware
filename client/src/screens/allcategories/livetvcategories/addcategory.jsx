import React, { useState,useEffect } from "react";
import axios from "axios"
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
  Snackbar,
  Alert,
  useMediaQuery
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";

import SidebarAllCategories from "components/SidebarAllCategories";

// import SidebarAllCategories from 'components/SidebarAllCategories'

const AddCategoryLiveTv = () => {
  const [passchecked, setPassChecked] = useState(false);
  const [visiblechecked, setVisibleChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
  });


  const handleReset = () => {
    setFormData({
     title:"",
      
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
        .get(`http://localhost:5001/api/video_categories/${_id}`)
        .then((response) => {
          const videoData = response.data;
          setFormData({
            title:videoData.title,
            // name: productData.name,
            // quantity: productData.quantity,
            // model: productData.model,
            // purchase_price: productData.purchase_price,
            // manufacturer: productData.manufacturer,
            // sale_price: productData.sale_price,
            // date: productData.date,
            // available: productData.available,
            // description: productData.description,
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
    const apiUrl = `http://localhost:5001/api/video_categories/patch/${_id}`; // Edit
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
    const apiUrl = "http://localhost:5001/api/video_categories/post"; // Add
    axios
      .post(apiUrl, formData) // Use axios.post for the POST request
      .then((response) => {
        setSuccessMessage("Product added successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};


  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
    {/* // m="1.5rem 2.5rem" ml="350px"> */}
      {/* <SidebarAllCategories /> */}

      {/* <SidebarAllCategories /> */}

      <FlexBetween></FlexBetween>

      <form onSubmit={handleSubmit}>
        <h3>LIVE TV CATEGORY DETAILS</h3> <br />
        <label>Title :</label>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        <label>Password Protected :</label>
        <br />
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={passchecked}
                onChange={(e) => setPassChecked(e.target.checked)}
              />
            }
          />
        </FormControl>
        <br />
        <label>Visible :</label>
        <br />
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={visiblechecked}
                onChange={(e) => setVisibleChecked(e.target.checked)}
              />
            }
          />
        </FormControl>
        <div>
          <label>Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            // required="required"
          ></input>
        </div>
        <br />
        <div>
          <label>Shahid Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            // required="required"
          ></input>
        </div>
        <br />
        <div>
          <label>France Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            // required="required"
          ></input>
        </div>
        <br />
        <div>
          <label>Humax Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            // required="required"
          ></input>
        </div>
        <br />
        <div>
          <label>Zoomtak Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            // required="required"
          ></input>
        </div>
        <br />
        <div>
          <label>MasaPlus Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            // required="required"
          ></input>
        </div>
        <br />
        <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button type="reset" onClick={handleReset}>Reset</Button>
        <Button type="submit">Submit</Button>
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
    </Box>
  );
};

export default AddCategoryLiveTv;
