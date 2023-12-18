import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  Alert,
  Snackbar,
} from "@mui/material";

import Sidebar from "screens/content";

import { ContentCopy } from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import SidebarContent from "components/SidebarContent";

import InputFileUpload from "components/ChooseFile";

const AddRadio = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    id: "",
    kameraUrl: "",
    streamName: "",
    kameraDurum: "",
    kameraImage: "",
    category_id: "",
    created: "",
    position: "",
    kameraUrl_secondary: "",
    modified: "",
    visible: "",
  });

  const handleReset = () => {
    setFormData({
      id: "",
    kameraUrl: "",
    streamName: "",
    kameraDurum: "",
    kameraImage: "",
    category_id: "",
    created: "",
    position: "",
    kameraUrl_secondary: "",
    modified: "",
    visible: "",
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
        .get(`http://localhost:5001/api/livetv_audios/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            // id: productData.id,
            streamName : productData.streamName,
            

           
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
      const apiUrl = `http://localhost:5001/api/livetv_audios/patch/${_id}`; // Edit
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
      const apiUrl = "http://localhost:5001/api/livetv_audios/post"; // Add
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
  const [audio_categorieslist, setaudio_categorieslist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/livetv_audios/find")
      .then((response) => response.json())
      .then((json) =>setaudio_categorieslist(json.data));
  }, []);
  console.log(audio_categorieslist);

  return (
    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>
        <Header title="ADD AUDIO STREAM" />

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
        {/*
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
        </FormControl> */}

        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label="Visible"
          />
        </FormControl>

       

        <TextField
          fullWidth
          name="select_channel_image"
          label="Enter Stream URL"
          placeholder="stream for webtv-primary"
          variant="outlined"
          value={formData.select_channel_image}
          onChange={handleChange}
          margin="normal"
        />

        <InputFileUpload />

        {/* <TextField

        fullWidth

        name="select_channel_image"

        label="Select Channel Image"

        variant="outlined"

        value={formData.select_channel_image}

        onChange={handleChange}

        margin="normal"

      /> */}
{/* 
        <TextField
          fullWidth
          name="category"
          label="Select the category"
          variant="outlined"
          value={formData.category}
          onChange={handleChange}
          margin="normal"
        /> */}
         <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            >
         <MenuItem >(Choose Category)</MenuItem>
            {audio_categorieslist.map((type) => (
              <MenuItem key={(type.id)} value={(type.id)}>
                {(type.title)}
                </MenuItem>
            ))}
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
      {/* <SidebarContent /> */}
    </Box>
  );
};

export default AddRadio;
