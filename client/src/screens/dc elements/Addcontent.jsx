import React,{useState, useEffect} from "react";
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
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import InputFileUpload from "components/ChooseFile";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

// import SidebarMonetize from "components/SidebarMonetize";
import Sidebardc from "components/sidebardc";
// import Sidebardc from 'components/sidebardc';

const AddContent = () => {
  // const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const[checked,setChecked]=useState(true);
  const[checked,setChecked]=useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [visiblechecked, setVisibleChecked] = useState(false)
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    id:" ",
    title:" ",
    status:" ",
    position:" ",
    category_id:" ",
    stream_url:" ",
    image:" ",
    created:" ",
    updated:" ",
  });

  const handleReset = () => {
    setFormData({
    id:" ",
    title:" ",
    status:" ",
    position:" ",
    category_id:" ",
    stream_url:" ",
    image:" ",
    created:" ",
    updated:" ",
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
        .get(`http://localhost:5001/api/dashboard_contents/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            title: productData.title,
            status: productData.status,
            position: productData.position,
            category_id: productData.category_id,
            stream_url: productData.stream_url,
            image: productData.image,
            created: productData.created,
            updated: productData.updated,
          });
        })
        .catch((error) => {
          console.error('Error fetching content data:', error);
        });
    }
  }, [_id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/dashboard_contents/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData) // Use axios.patch for the PATCH request
        .then((response) => {
          setSuccessMessage("Content updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/dashboard_contents/post"; // Add
      axios
        .post(apiUrl, formData) // Use axios.post for the POST request
        .then((response) => {
          setSuccessMessage("Content added successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  
    console.log(formData);
  };

  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 3.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
    {/* // <Box m="1.5rem 2.5rem" ml="300px"> */}
      <FlexBetween></FlexBetween>

      <form onSubmit={handleSubmit}>
        <h3>CATEGORY DETAILS</h3> <br />
        {/* <label> Billing Type Name :</label> */}
        <TextField
          fullWidth
          name="title"
          label=" Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="select_the_category"
          label="Select_the_category"
          variant="outlined"
          value={formData.select_the_category}
          onChange={handleChange}
          margin="normal"
        />


<TextField
          fullWidth
          name="stream_url"
          label="Stream_url"
          variant="outlined"
          value={formData.stream_url}
          onChange={handleChange}
          margin="normal"
        />
<FormControl>
        <label>Visible:</label>
          <FormControlLabel 
            control={
              <Checkbox
                label="Visible"
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
        <br/>
        
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button type="reset" style={{ backgroundColor: "white", color: "black" }}>
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
      {/* <Sidebardc/> */}
    </Box>
  );
};

export default AddContent;
