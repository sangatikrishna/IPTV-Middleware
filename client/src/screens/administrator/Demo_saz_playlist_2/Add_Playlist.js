import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Joi from 'joi';
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
import { Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import SidebarContent from "components/SidebarContent";
import SidebarAdmin from "components/SidebarAdmin";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";
const Adddemoplaylist2 = () => {
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [passchecked, setPassChecked] = useState(false);
  const { _id } = useParams();
  const [visiblechecked, setVisibleChecked] = useState(false);
  // const [validationError, setValidationError] = useState(null);

  // const validationSchema = Joi.object({
  //   // id: Joi.string().regex(/^[0-9]+$/, "id").required(),
  //   id: Joi.string().allow(null).allow(''),
  //   status: Joi.string().allow(null).allow(''),
  //   expire_data: Joi.string().empty(''),
  //   created_date: Joi.string().empty(''),

  //   // name: Joi.string().empty('').min(3).max(30).default('default value').label('Billing Type Name'),
  //   name: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label('enter name'),
  //   url: Joi.string().regex(/^[@.0-9a-zA-Z]+$/).min(3).max(30).required().label('enter url'),
  //   description: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label('Description'),
  //   // name: Joi.string().empty('').label('Billing Type Name'),
  // });
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    url: "",
    created_date: "",
    expire_data: "",
    status: "",
  });
  const handleReset = () => {
    setFormData({
    id: "",
    name: "",
    description: "",
    url: "",
    created_date: "",
    expire_data: "",
    status: "",
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
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5001/api/users/find")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setUsers(res.data);
  //     });
  // }, []);
  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:5001/api/demo_saz_playlist_2/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            name: productData.name,
            description: productData.description,
            url: productData.url,
            created_date: productData.created_date,
            expire_data: productData.expire_data,
            status: productData.status,
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
      const apiUrl = `http://localhost:5001/api/demo_saz_playlist_2/patch/${_id}`; // Edit
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
      const apiUrl = "http://localhost:5001/api/demo_saz_playlist_2/post"; // Add
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
  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>
        <Box></Box>
      </FlexBetween>
      <h3>ADD PLAYLIST </h3>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
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
        <TextField
          fullWidth
          name="url"
          label="URL"
          variant="outlined"
          value={formData.url}
          onChange={handleChange}
          margin="normal"
        />
        {/* {validationError && (
          <div style={{ color: 'red' }}>
            {validationError.map((error) => (
              <div>{error.message}</div>
            ))}
            </div>
      )} */}

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button style={{ backgroundColor: "White", color: "black" }}>
            Reset
          </Button>
          <Button type= "submit" style={{ backgroundColor: "green" }}>Submit</Button>
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
      {/* <SidebarAdmin /> */}
    </Box>
  );
};

export default Adddemoplaylist2;
