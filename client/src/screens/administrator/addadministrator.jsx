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

import { Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";

const Addadminstrator = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    id:" ",
    name:" ",
    surname:" ",
    nick:" ",
    mail:" ",
    password:" ",
    enddate:" ",
    createdby:" ",
    billing_id:" ",
    device_id:" ",
    is_multiple_session:" ",
    is_loggedin:" ",
    status:" ",
    group_id:" ",
    created:" ",
    modified:" ",
    payment_settings_id:" ",
    category_password:" ",
    user_limit:" ",
    number_of_login:" ",
    is_deleted:" ",
    is_trail:" ",
    is_paid:" ",
    is_cdn:" ",
    reseller_module_type:" ",
    reseller_box_price:" ",
    profile_image:" ",
    session_id:" ",
    renewal_date:" ",
  });

  const handleReset = () => {
    setFormData({
      id:" ",
      name:" ",
      surname:" ",
      nick:" ",
      mail:" ",
      password:" ",
      enddate:" ",
      createdby:" ",
      billing_id:" ",
      device_id:" ",
      is_multiple_session:" ",
      is_loggedin:" ",
      status:" ",
      group_id:" ",
      created:" ",
      modified:" ",
      payment_settings_id:" ",
      category_password:" ",
      user_limit:" ",
      number_of_login:" ",
      is_deleted:" ",
      is_trail:" ",
      is_paid:" ",
      is_cdn:" ",
      reseller_module_type:" ",
      reseller_box_price:" ",
      profile_image:" ",
      session_id:" ",
      renewal_date:" ",
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
        .get(`http://localhost:5001/api/administrators/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            id: productData.id,
            name: productData.name,
            surname: productData.surname,
            nick: productData.nick,
            mail: productData.mail,
            password: productData.password,
            enddate: productData.enddate,
            createdby: productData.createdby,
            billing_id: productData.billing_id,
            device_id: productData.device_id,
            is_multiple_session: productData.is_multiple_session,
            is_loggedin: productData.is_loggedin,
            status: productData.status,
            group_id: productData.group_id,
            created: productData.created,
            modified: productData.modified,
            payment_settings_id: productData.payment_settings_id,
            category_password: productData.category_password,
            user_limit: productData.user_limit,
            number_of_login: productData.number_of_login,
            is_deleted: productData.is_deleted,
            is_trail: productData.is_trail,
            is_paid: productData.is_paid,
            is_cdn: productData.is_cdn,
            reseller_module_type: productData.reseller_module_type,
            reseller_box_price: productData.reseller_box_price,
            profile_image: productData.profile_image,
            session_id: productData.session_id,
            renewal_date: productData.renewal_date,
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
      const apiUrl = `http://localhost:5001/api/administrators/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData) // Use axios.patch for the PATCH request
        .then((response) => {
          setSuccessMessage("Administrator updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/administrators/post"; // Add
      axios
        .post(apiUrl, formData) // Use axios.post for the POST request
        .then((response) => {
          setSuccessMessage("Administrator added successfully!");
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
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
     {/* m="1.5rem 2.5rem" ml="310px"> */}
      <FlexBetween>
        <Header title="Adminstrator Registration Form" />

        <Box></Box>
      </FlexBetween>
      <h3>Login Details </h3>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="User Name"
          label="User Name"
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
          name="password"
          label="PassWord"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
        />

        <h3>Personal Details </h3>

        <TextField
          fullWidth
          name="name"
          label="First Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="surname"
          label="Last Name"
          variant="outlined"
          value={formData.surname}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="mail"
          label="Email Address"
          variant="outlined"
          value={formData.mail}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Address1"
          label="Address1"
          variant="outlined"
          value={formData.Address1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Address2"
          label="Address2"
          variant="outlined"
          value={formData.Address2}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="City"
          label="City"
          variant="outlined"
          value={formData.City}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Postal"
          label="Postal/ZipCode"
          variant="outlined"
          value={formData.Zip}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="Country">Country</InputLabel>
          <Select
            label="Country"
            name="Country"
            value={formData.Country}
            onChange={handleChange}
          >
            <MenuItem value="select country">select country</MenuItem>
            <MenuItem value="AFGHANISTIAN">AFGHANISTAN</MenuItem>
            <MenuItem value="Albania"> Albania</MenuItem>
            <MenuItem value="Algeria">Algeria</MenuItem>
            <MenuItem value="Antigua and Barbuda">
              {" "}
              Antigua and Barbuda
            </MenuItem>
            <MenuItem value="Bangladesh"> Bangladesh</MenuItem>
            <MenuItem value="Belegium"> Belgium</MenuItem>
            <MenuItem value="Brizil"> Brazil</MenuItem>
            <MenuItem value="Bulgaria">Bulgaria</MenuItem>
            <MenuItem value="Colombia">Colombia</MenuItem>
            <MenuItem value="Croatia"> Croatia</MenuItem>
            <MenuItem value="Denmark">Denmark</MenuItem>
            <MenuItem value="Egypt">Egypt</MenuItem>
            <MenuItem value="Estonia">Estonia</MenuItem>
            <MenuItem value="Finland">Finland</MenuItem>
            <MenuItem value="FRANCE">FRANCE</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Japan"> Japan</MenuItem>

            <MenuItem value="Malaysia"> Malaysia</MenuItem>

            {/* Add more language options as needed */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="Phone(work)"
          label="Phone(work)"
          variant="outlined"
          value={formData.Address1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Phone(Home)"
          label="Phone(Home)"
          variant="outlined"
          value={formData.Address2}
          onChange={handleChange}
          margin="normal"
        />

<ButtonGroup variant="contained" aria-label="outlined button group">
          <Button type="reset" style={{ backgroundColor: "white", color: "black" }}>
            Reset
          </Button>

          <Button type="submit" style={{ backgroundColor: "green" }}>Submit</Button>
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

export default Addadminstrator;
