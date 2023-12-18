import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox ,Box, Snackbar, Alert,useMediaQuery, } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import Header from 'components/Header';
const AddSaz_playlist_3 = () => {
  const { _id } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState({

    id:'',
    name : '',  
    url:" ",
    description:" ",
    created_date:" ",
    status:" ",
    expire_date:" ",

});

const handleReset = () => {
  setFormData({
    id:'',
    name : '',  
    url:" ",
    description:" ",
    created_date:" ",
    status:" ",
    expire_date:" ",
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
        .get(`http://localhost:5001/api/saz_playlist_3/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            id: productData.id,
            name: productData.name,
            url: productData.url,
            description: productData.description,
            created_date: productData.created_date,
            status: productData.status,
            expire_date: productData.expire_date,
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
      const apiUrl = `http://localhost:5001/api/saz_playlist_3/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData) // Use axios.patch for the PATCH request
        .then((response) => {
          setSuccessMessage("Playlist updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/saz_playlist_3/post"; // Add
      axios
        .post(apiUrl, formData) // Use axios.post for the POST request
        .then((response) => {
          setSuccessMessage("Playlist added successfully!");
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

    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>

      <FlexBetween>

    </FlexBetween>
    
    <form onSubmit={handleSubmit} >

        <h3>Saz_playlist_3</h3> <br/>
        {/* <label> Name :</label> */}

      <TextField

        fullWidth

        name="name"

        label=" Name"

        variant="outlined"

        value={formData.name}

        onChange={handleChange}

        margin="normal"

      />
      <TextField

fullWidth

name="url"

label="URL"

variant="outlined"

value={formData.url}

onChange={handleChange}

margin="normal"

/>
<TextField

        fullWidth

        name="description"

        label="Description"

        variant="outlined"

        value={formData.description}

        onChange={handleChange}

        margin="normal"

      />
      <ButtonGroup variant="contained"  aria-label="outlined button group">

  <Button type="reset" style={{ backgroundColor: "white", color:'black' }} >Reset</Button>

  <Button type="submit"  style={{ backgroundColor: "green"}}>Submit</Button>

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

export default AddSaz_playlist_3;