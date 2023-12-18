import React, { useState, useEffect } from "react";
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
// import Sidebar from 'screens/content';
// import { ContentCopy } from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";
 
import Header from "components/Header";
import SidebarContent from "components/SidebarContent";
import InputFileUpload from "components/ChooseFile";
 
const Addmovie = () => {
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    kameraUrl:"",
      kameraUrl_ios:"",
      kameraUrl_android:"",
      kameraUrl_setup:"",
      kameraUrl_linux:"",
      kameraUrl_dream:"",
      kameraUrl_pc:"",
      streamName:"",
      kameraDurum:"",
      kameraImage:"",
      category_id:"",
      created:"",
      position:"",
      modified:"",
      kameraUrl_secondary:"",
      kameraUrl_ios_secondary:"",
      kameraUrl_android_secondary:"",
      kameraUrl_setup_secondary:"",
      kameraUrl_linux_secondary:"",
      kameraUrl_dream_secondary:"",
      kameraUrl_pc_secondary:"",
      visible:"",
      trailer:"",
      description:"",
      language:"",
      duration:"",
      year:"",
      studio:"",
      producer:"",
      director:"",
      actors:"",
      ratings:"",
      price:"",
  });
 
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
 
  const handleReset = () => {
    setFormData({
      kameraUrl:"",
      kameraUrl_ios:"",
      kameraUrl_android:"",
      kameraUrl_setup:"",
      kameraUrl_linux:"",
      kameraUrl_dream:"",
      kameraUrl_pc:"",
      streamName:"",
      kameraDurum:"",
      kameraImage:"",
      category_id:"",
      created:"",
      position:"",
      modified:"",
      kameraUrl_secondary:"",
      kameraUrl_ios_secondary:"",
      kameraUrl_android_secondary:"",
      kameraUrl_setup_secondary:"",
      kameraUrl_linux_secondary:"",
      kameraUrl_dream_secondary:"",
      kameraUrl_pc_secondary:"",
      visible:"",
      trailer:"",
      description:"",
      language:"",
      duration:"",
      year:"",
      studio:"",
      producer:"",
      director:"",
      actors:"",
      ratings:"",
      price:"",
    });
  };
 
 
 
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value,  });
  };
 
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
   
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/videos/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData)
        .then((response) => {
          setSuccessMessage("Movie updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/videos/post"; // Add
      axios
        .post(apiUrl, formData)
        .then((response) => {
          setSuccessMessage("Movie added successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
 
  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/videos/video/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            kameraUrl:productData.kameraUrl,
      kameraUrl_ios:productData.kameraUrl_ios,
      kameraUrl_android:productData.kameraUrl_android,
      kameraUrl_setup:productData.kameraUrl_setup,
      kameraUrl_linux:productData.kameraUrl_linux,
      kameraUrl_dream:productData.kameraUrl_dream,
      kameraUrl_pc:productData.kameraUrl_pc,
      streamName:productData.streamName,
      kameraDurum:productData.kameraDurum,
      kameraImage:productData.kameraImage,
      category_id:productData.category_id,
      created:productData.created,
      position:productData.position,
      modified:productData.modified,
      kameraUrl_secondary:productData.kameraUrl_secondary,
      kameraUrl_ios_secondary:productData.kameraUrl_ios_secondary,
      kameraUrl_android_secondary:productData.kameraUrl_android_secondary,
      kameraUrl_setup_secondary:productData.kameraUrl_setup_secondary,
      kameraUrl_linux_secondary:productData.kameraUrl_linux_secondary,
      kameraUrl_dream_secondary:productData.kameraUrl_dream_secondary,
      kameraUrl_pc_secondary:productData.kameraUrl_pc_secondary,
      visible:productData.visible,
      trailer:productData.trailer,
      description:productData.description,
      language:productData.language,
      duration:productData.duration,
      year:productData.year,
      studio:productData.studio,
      producer:productData.producer,
      director:productData.director,
      actors:productData.actors,
      ratings:productData.ratings,
      price:productData.price,
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);
 
  const [categories, setCategories] = useState([]);
 
  // Make an API request to fetch payment types data from your server
  useEffect(() => {
    fetch("http://localhost:5001/api/categories/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      });
  }, []);
 
  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>
        <Header title="ADD MOVIE" />
 
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
          name="stream_for_webtv"
          label="Stream for Webtv"
          variant="outlined"
          value={formData.stream_for_webtv}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="stream_for_ios_mobile"
          label="Stream for IOS mobile"
          variant="outlined"
          value={formData.stream_for_ios_mobile}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="stream_for_android"
          label="Stream for Android"
          variant="outlined"
          value={formData.stream_for_android}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="android_setup_box"
          label="Android Setup box"
          variant="outlined"
          value={formData.android_setup_box}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="custom_linux_box"
          label="Custom linux box"
          variant="outlined"
          value={formData.custom_linux_box}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="dreambox"
          label="Dreambox"
          variant="outlined"
          value={formData.dreambox}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="pc"
          label="PC"
          variant="outlined"
          value={formData.pc}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="trailer"
          label="Add Trailer"
          variant="outlined"
          value={formData.trailer}
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
        <TextField
          fullWidth
          name="language"
          label="Language"
          variant="outlined"
          value={formData.language}
          onChange={handleChange}
          margin="normal"
        />
        {/* <FormControl fullWidth variant="outlined" margin="normal">
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
        {/* </Select> */}
        {/* </FormControl> */}
 
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
 
        <InputFileUpload />
        {/* <TextField
        fullWidth
        name="select_channel_image"
        label="Select_Channel_Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
      /> */}
        {/* <TextField
        fullWidth
        name="category"
        label="Category"
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
            <MenuItem value="">(Choose Category Type)</MenuItem>
            {categories.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.title}
              </MenuItem>
               ))}
 
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
 
export default Addmovie;