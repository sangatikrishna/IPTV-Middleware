import React, { useState } from 'react';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box,useMediaQuery,Snackbar,
  Alert, } from '@mui/material';
import SidebarContent from 'components/SidebarContent';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from 'components/ChooseFile';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const AddSeries = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    id: '',
    kameraUrl: '',
    streamName: '',
    kameraDurum: '',
    kameraImage: '',
    category_id: '',
    created: '',
    position: '',
    modified: '',
    kameraUrl_secondary:'',
    visible: '',
    trailer: '',
    description: '',
    language: '',
    duration: '',
    year: '',
    studio: '',
    producer: '',
    director: '',
    actors: '',
    ratings: '',
    price: '',

  });

  const handleReset = () => {
    setFormData({
      id: '',
      kameraUrl: '',
      streamName: '',
      kameraDurum: '',
      kameraImage: '',
      category_id: '',
      created: '',
      position: '',
      modified: '',
      kameraUrl_secondary:'',
      visible: '',
      trailer: '',
      description: '',
      language: '',
      duration: '',
      year: '',
      studio: '',
      producer: '',
      director: '',
      actors: '',
      ratings: '',
      price: '',
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
        .get(`http://localhost:5001/api/mods/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            // id: productData.id,
            streamName : productData.streamName,
            kameraUrl : productData.kameraUrl,

           
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/mods/patch/${_id}`; // Edit
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
      const apiUrl = "http://localhost:5001/api/mods/post"; // Add
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

  const [addSeriesEpisodes, setAddSeriesEpisodes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/mods/find")
      .then((response) => response.json())
      .then((json) => setAddSeriesEpisodes(json.data));
  }, []);
  console.log(addSeriesEpisodes);

  return (

    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
    {/* <Box m="1.5rem 2.5rem" ml="250px"> */}
    <FlexBetween>
    <Header title="ADD SERIES" />
    
    <Box></Box>
  </FlexBetween>
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="streamName"
        label="Title"
        variant="outlined"
        value={formData.streamName}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="visible"
        label="Visible"
        variant="outlined"
        value={formData.visible}
        onChange={handleChange}
        margin="normal"
      />
         <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  id="agree"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                
              }
             />
            
          </FormControl>
      
      <TextField
        fullWidth
        name="enter_stream_url"
        label="Enter Stream Url"
        variant="outlined"
        value={formData.enter_stream_url}
        onChange={handleChange}
        margin="normal"
      />
      
      <TextField
        fullWidth
        name="add_trailer"
        label="Add Trailer"
        variant="outlined"
        value={formData.add_trailer}
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
        multiline
        rows={4}
      />
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="language">Language</InputLabel>
        <Select
          label="Language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
          <MenuItem value="french">French</MenuItem>
          {/* Add more language options as needed */}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        name="duration"
        label="Duration"
        variant="outlined"
        value={formData.duration}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="year"
        label="Year"
        variant="outlined"
        value={formData.year}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="studio"
        label="Studio"
        variant="outlined"
        value={formData.studio}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="producer"
        label="Producer"
        variant="outlined"
        value={formData.producer}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="director"
        label="Director"
        variant="outlined"
        value={formData.director}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="actors"
        label="Actors"
        variant="outlined"
        value={formData.actors}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="ratings"
        label="Ratings"
        variant="outlined"
        value={formData.ratings}
        onChange={handleChange}
        margin="normal"
      />
         <TextField
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
      />

      <InputFileUpload/>
         {/* <TextField
        fullWidth
        name="select_channel_image"
        label="Select_Channel_Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
      /> */}
         <TextField
        fullWidth
        name="select_the_category"
        label="Select the Category"
        variant="outlined"
        value={formData.select_the_category}
        onChange={handleChange}
        margin="normal"
      />
      
      <ButtonGroup variant="contained" aria-label="outlined button group">
  <Button type="reset" onClick={handleReset}>Reset</Button>
  <Button type='submit'>Submit</Button>
</ButtonGroup>
    </form>
    {/* <SidebarContent /> */}
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

export default AddSeries;