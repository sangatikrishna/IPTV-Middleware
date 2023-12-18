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
} from "@mui/material";

import { Input } from "@mui/material";

import { CloudUpload } from "@mui/icons-material";

import SidebarContent from "components/SidebarContent";
// import Snackbar from "@mui/material";
import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import InputFileUpload from "components/ChooseFile";

// import Adminsidebar from 'components/adminsidebar';

const AddMessage6 = () => {
  const [checked, setChecked] = useState(false);
  const [passchecked, setPassChecked] = useState(false);
  const { _id } = useParams();
  const [visiblechecked, setVisibleChecked] = useState(false);

  const [formData, setFormData] = useState({
    id:"",
    title: "",
    description: "",
    user_ids: "",
    start_date: "",
    repeat_interval: "",
    is_active: "",
    created: "",
    modified: ""
  });

  const handleReset = () => {
    setFormData({
      id:"",
      title: "",
      description: "",
      user_ids: "",
      start_date: "",
      repeat_interval: "",
      is_active: "",
      created: "",
      modified: ""
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
        .get(`http://localhost:5001/api/AMusermessages/${_id}`)
        .then((response) => {
          const MessageData = response.data;
          setFormData({
            title: MessageData.title,
            description: MessageData.description,
            user_ids: MessageData.user_ids,
            start_date: MessageData.start_date,
            repeat_interval: MessageData.repeat_interval,
            is_active: MessageData.is_active,
            created: MessageData.created,
            modified: MessageData.modified,
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
    const apiUrl = `http://localhost:5001/api/AMusermessages/patch/${_id}`; // Edit
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
    const apiUrl = "http://localhost:5001/api/AMusermessages/post"; // Add
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
    <Box m="1.5rem 2.5rem" ml="400px">
      <FlexBetween>
        <Box></Box>
      </FlexBetween>

      <h3>APPMESSAGE ADD </h3>

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

        {/*
         <FormControl>
            <FormControlLabel
            label = " Visible"
              control={
                <Checkbox
                  id="agree"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                   }
             />
          </FormControl> */}

        <TextField
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="Customers">Customers</InputLabel>

          <Select
            label="Customers"
            name="Customers"
            value={formData.Customers}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose Customer)</MenuItem>
            {/* {messages.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.model}
            </MenuItem>
          ))} */}
          </Select>
        </FormControl>

        <label>Active :</label>
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

        <TextField
          fullWidth
          name="start_date"
          label="Starting date"
          variant="outlined"
          value={formData.start_date}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="repeat_Interval"
          label="Repeat Interval (Hours)"
          variant="outlined"
          value={formData.repeat_Interval}
          onChange={handleChange}
          margin="normal"
        />
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

      {/* <Adminsidebar /> */}
    </Box>
  );
};

export default AddMessage6;
