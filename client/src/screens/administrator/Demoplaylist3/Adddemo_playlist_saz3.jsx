import React, { useState, useEffect } from 'react';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box, Snackbar, Alert, } from '@mui/material';
import { Input } from '@mui/material';
import axios from 'axios';
import { CloudUpload } from '@mui/icons-material';
import SidebarContent from 'components/SidebarContent';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from 'components/ChooseFile';
import { useParams } from 'react-router-dom';
import SidebarAdmin from 'components/SidebarAdmin';
// import SelectImageSection from 'components/ChooseFile';

const AddDemoplaylistsaz3 = () => {
  const [checked, setChecked] = useState(false);
  const [passchecked, setPassChecked] = useState(false);
  const { _id } = useParams();
  const [visiblechecked, setVisibleChecked] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Description: '',
    URL: '',
  });

  const handleReset = () => {
    setFormData({
        Name: '',
        Description: '',
        URL: '',
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
      // If a Message ID is available in the URL, fetch Message data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/Demo_playlist_saz3/${_id}`)
        .then((response) => {
          const MessageData = response.data;
          setFormData({
            Name: MessageData.Name,
            Description: MessageData.Description,
            URL: MessageData.URL,
            
          });
        })
        .catch((error) => {
          console.error('Error fetching Message data:', error);
        });
    }
  }, [_id]);

const handleSubmit = (e) => {
  e.preventDefault();

  if (_id) {
    // If _id is defined, it's an edit operation
    const apiUrl = `http://localhost:5001/api/Demo_playlist_saz3/patch/${_id}`; // Edit
    axios
      .patch(apiUrl, formData) // Use axios.patch for the PATCH request
      .then((response) => {
        setSuccessMessage("Message updated successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    // If _id is not defined, it's an add operation
    const apiUrl = "http://localhost:5001/api/Demo_playlist_saz3/post"; // Add
    axios
      .post(apiUrl, formData) // Use axios.post for the POST request
      .then((response) => {
        setSuccessMessage("Message added successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};


  return (
    <Box m="1.5rem 2.5rem" ml="250px">
    <FlexBetween>
    <Header title="ADD CHANNEL" />

<SidebarContent/>

    <Box></Box>
  </FlexBetween>
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="Name"
        label="Title"
        variant="outlined"
        value={formData.Name}
        onChange={handleChange}
        margin="normal"
      />
      {/* <TextField
        fullWidth
        name="visible"
        label="Visible"
        variant="outlined"
        value={formData.visible}
        onChange={handleChange}
        margin="normal"
      /> */}
      
      <TextField
        fullWidth
        name="URL"
        label="URL"
        variant="outlined"
        value={formData.URL}
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
    
      {/* <InputFileUpload/>
        <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="select_the_category">Select the Category</InputLabel>
        <Select
          label="Select the category"
          name="select_the_category"
          value={formData.select_the_category}
          onChange={handleChange}
        >
          <MenuItem value="Choose Category">CHOOSE CATEGORY</MenuItem>
          <MenuItem value="TS-ARABIC">TS-ARABIC</MenuItem>
          <MenuItem value="FARSI">FARSI</MenuItem>
          <MenuItem value="خرزة زرقا">خرزة زرقا</MenuItem>
        

          {/* Add more language options as needed */}
        {/* </Select>
      </FormControl> */}
      
{/* <SidebarContent/> */}


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
    <SidebarAdmin />
    </Box>
  );
};

export default AddDemoplaylistsaz3;
