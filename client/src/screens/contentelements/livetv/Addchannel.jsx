import React, { useState, useEffect } from "react";
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
// import { Input } from '@mui/material';
// import { CloudUpload } from '@mui/icons-material';
import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";

const Addchannel = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    id: "",
    kameraUrl: "",
    kameraUrl_ios: "",
    kameraUrl_android: "",
    kameraUrl_setup: "",
    kameraUrl_linux: "",
    kameraUrl_dream: "",
    kameraUrl_pc: "",
    streamName: "",
    kameraDurum: "",
    kameraImage: "",
    category_id: "",
    created: "",
    position: "",
    kameraUrl_secondary: "",
    kameraUrl_ios_secondary: "",
    kameraUrl_android_secondary: "",
    kameraUrl_setup_secondary: "",
    kameraUrl_linux_secondary: "",
    kameraUrl_dream_secondary: "",
    kameraUrl_pc_secondary: "",
    is_humax: "",
    visible: "",
    probe_status: "",
  });

  const handleReset = () => {
    setFormData({
      id: "",
      kameraUrl: "",
      kameraUrl_ios: "",
      kameraUrl_android: "",
      kameraUrl_setup: "",
      kameraUrl_linux: "",
      kameraUrl_dream: "",
      kameraUrl_pc: "",
      streamName: "",
      kameraDurum: "",
      kameraImage: "",
      category_id: "",
      created: "",
      position: "",
      kameraUrl_secondary: "",
      kameraUrl_ios_secondary: "",
      kameraUrl_android_secondary: "",
      kameraUrl_setup_secondary: "",
      kameraUrl_linux_secondary: "",
      kameraUrl_dream_secondary: "",
      kameraUrl_pc_secondary: "",
      is_humax: "",
      visible: "",
      probe_status: "",
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
        .get(`http://localhost:5001/api/livetvs/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            // id: productData.id,
            streamName : productData.streamName,
            created: productData.created,
           
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
      const apiUrl = `http://localhost:5001/api/livetvs/patch/${_id}`; // Edit
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
      const apiUrl = "http://localhost:5001/api/livetvs/post"; // Add
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
  
    const [Addshowepisodes, setaddshowepisodes] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5001/api/livetvs/find")
        .then((response) => response.json())
        .then((json) => setaddshowepisodes(json.data));
    }, []);
    console.log(Addshowepisodes);


  return (
    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
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
          name="backup_stream_1"
          label="Backup Stream 1"
          variant="outlined"
          value={formData.backup_stream_1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_2"
          label="Backup Stream 2"
          variant="outlined"
          value={formData.backup_stream_2}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_3"
          label="Backup Stream 3"
          variant="outlined"
          value={formData.backup_stream_3}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_4"
          label="Backup Stream 4"
          variant="outlined"
          value={formData.backup_stream_4}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_5"
          label="Backup Stream 5"
          variant="outlined"
          value={formData.backup_stream_5}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_6"
          label="Backup Stream 6"
          variant="outlined"
          value={formData.backup_stream_6}
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

        {/* <TextField
        fullWidth
        name="select_channel_image"
        label={<SelectImageSection/>}
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
          
      /> */}
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
            <MenuItem value="english">OSN TEST</MenuItem>
            <MenuItem value="spanish">KURDISH</MenuItem>
            <MenuItem value="african">AFRICAN</MenuItem>
            <MenuItem value="arabic">ARABIC</MenuItem>
            <MenuItem value="sports">SPORTS</MenuItem>
            <MenuItem value="kids">KIDS</MenuItem>
            <MenuItem value="news">NEWS</MenuItem>
            <MenuItem value="religion">RELIGION</MenuItem>
            <MenuItem value="music">MUSIC</MenuItem>
            <MenuItem value="turkish">TURKISH</MenuItem>
            <MenuItem value="iraq">IRAQ</MenuItem>
            <MenuItem value="maghreb">MAGHREB</MenuItem>
            <MenuItem value="german">GERMAN</MenuItem>
            <MenuItem value="france">FRANCE</MenuItem>
            <MenuItem value="hd_channels">HD channels</MenuItem>
            <MenuItem value="farsi">Farsi</MenuItem>
            <MenuItem value="important">Important</MenuItem>
            <MenuItem value="problem">Problem</MenuItem>
            <MenuItem value="afghanistan">AFGHANISTAN</MenuItem>
            <MenuItem value="christian">Christian</MenuItem>

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

export default Addchannel;
