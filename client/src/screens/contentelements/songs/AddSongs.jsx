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
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";

import Sidebar from "screens/content";

import { ContentCopy, Label } from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import SidebarContent from "components/SidebarContent";

import InputFileUpload from "components/ChooseFile";

const AddSong = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();

  const {checked1, setChecked1} = useState(false);

  const [formData, setFormData] = useState({
    
    id: "",
    title: "",
    is_youtube: "",
    select_channel_image: "",
    select_the_category: "",
  });

  const handleReset = () => {
    setFormData({
    id: "",
    title: "",
    is_youtube: "",
    select_channel_image: "",
    select_the_category: "",
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
        .get(`http://localhost:5001/api/songs/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            // id: productData.id,
            title: productData.title,
            is_youtube: productData.is_youtube,
            select_channel_image: productData.select_channel_image,
            select_the_category: productData.select_the_category,
           
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
    const apiUrl = `http://localhost:5001/api/songs/patch/${_id}`; // Edit
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
    const apiUrl = "http://localhost:5001/api/songs/post"; // Add
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

  const [AddSongs, setaddSongs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/song_categories/find")
      .then((response) => response.json())
      .then((json) => setaddSongs(json.data));
  }, []);
  console.log(AddSongs);


  return (
    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>
        <Header title="ADD SONG STREAM" />

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
            control={
              <Checkbox
                id="agree"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label = "Visible"
          />
        </FormControl>

        <TextField
          fullWidth
          name="is_youtube"
          label="Is Youtube Url?"
          variant="outlined"
          value={formData.is_youtube}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={checked1}
                onChange={(e) => setChecked1(e.target.checked)}
              />
            }
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

<FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            Select the Category
          </InputLabel>
          <Select
            label="Select the Category"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
             {/* <MenuItem ></MenuItem> */}
             {AddSongs.map((type) => (
              <MenuItem key={(type.id)} value={(type.id)}>
                {(type.title)}
            </MenuItem>
            ))}
             </Select>
        </FormControl>
        <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button type="reset" onClick={handleReset}>Reset</Button>

          <Button type ="submit">Submit</Button>
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

export default AddSong;

