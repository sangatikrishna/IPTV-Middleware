
import React, { useState, useEffect } from 'react';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box, Snackbar, Alert,useMediaQuery } from '@mui/material';

// import React, { useState } from 'react';
// import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box , } from '@mui/material';

import { Input } from '@mui/material';
import axios from 'axios';
import { CloudUpload } from '@mui/icons-material';
import SidebarContent from 'components/SidebarContent';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from 'components/ChooseFile';
import { useParams } from 'react-router-dom';
// import SelectImageSection from 'components/ChooseFile';

const AddTimeShift = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const [passchecked, setPassChecked] = useState(false);
  const { _id } = useParams();
  const [visiblechecked, setVisibleChecked] = useState(false);
  const [formData, setFormData] = useState({
    streamName: '',
    visible: '',
    // stream_for_webtv: '',
    stream_URL: '',
    server_IP: '',
    comments: '',
    original_stream: '',
    Fall_back_stream1: '',
    Fall_back_stream2: '',
    comments: '',
    select_channel_image: '',
    select_the_category: '',
  });

  const handleReset = () => {
    setFormData({
      streamName: '',
      visible: '',
      // stream_for_webtv: '',
      stream_URL: '',
      server_IP: '',
      comments: '',
      original_stream: '',
      Fall_back_stream1: '',
      Fall_back_stream2: '',
      select_channel_image: '',
      select_the_category: '',
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
        .get(`http://localhost:5001/api/videolives/${_id}`)
        .then((response) => {
          const formData = response.data;
          setFormData({
            streamName: formData.streamName,
            visible: formData.visible,
            stream_URL: formData.stream_URL,
            server_IP: formData.server_IP,
            comments: formData.comments,
            original_stream: formData.original_stream,
            Fall_back_stream1: formData.Fall_back_stream1,
            Fall_back_stream2: formData.Fall_back_stream2,
            select_channel_image: formData.select_channel_image,
            select_the_category: formData.select_the_category,
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
    const apiUrl = `http://localhost:5001/api/videolives/patch/${_id}`; // Edit
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
    const apiUrl = "http://localhost:5001/api/videolives/post"; // Add
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
    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
    <FlexBetween>
    <Header title="ADD CHANNEL" />


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
      {/* <TextField
        fullWidth
        name="visible"
        label="Visible"
        variant="outlined"
        value={formData.visible}
        onChange={handleChange}
        margin="normal"
      /> */}
         <FormControl>
            <FormControlLabel
            label="Visible"
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
        name="stream_URL"
        label="Stream_URL"
        variant="outlined"
        value={formData.stream_URL}
        onChange={handleChange}
        margin="normal"
      />
      
      <TextField
        fullWidth
        name="server_IP"
        label="Server_IP"
        variant="outlined"
        value={formData.server_IP}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="comments"
        label="Comments"
        variant="outlined"
        value={formData.comments}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="original_stream"
        label="Original Stream"
        variant="outlined"
        value={formData.original_stream}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="Fallback_stream_1"
        label="Fall Back Stream 1"
        variant="outlined"
        value={formData.Fallback_stream_1}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="Fallback_stream_2"
        label="Fallback Stream 2"
        variant="outlined"
        value={formData.Fallback_stream_2}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="comments"
        label="Comments"
        variant="outlined"
        value={formData.comments}
        onChange={handleChange}
        margin="normal"
      />
         <TextField
        fullWidth
        name="select_channel_image"
        label="Select Channel Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      />
      {/* <TextField
        fullWidth
        name="select_the_category"
        label="Select the Category"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      /> */}

{/* <TextField
        fullWidth
        name="select_channel_image"
        placeholder={<SelectImageSection/>}
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
          
      /> */}
      <InputFileUpload/>
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
        </Select>
      </FormControl>
      


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

export default AddTimeShift;
