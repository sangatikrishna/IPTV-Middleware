import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Joi from "joi";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
  FormControlLabel,
  Checkbox,
  Box,
  Snackbar,
  Alert,
  useMediaQuery
} from "@mui/material";
import FlexBetween from "components/FlexBetween";

// import Header from "components/Header";
// import SidebarAllCategories from "components/SidebarAllCategories";

const AddCategoryRadio = () => {
  const [passchecked, setPassChecked] = useState(false);
  const [visiblechecked, setVisibleChecked] = useState(false);
  const { _id } = useParams();
  const [validationError, setValidationError] = useState(null);
  const validationSchema = Joi.object({
    // id: Joi.string().regex(/^[0-9]+$/, "id").required(),
    id: Joi.string().empty(''),
    is_protected: Joi.string().allow('').allow(null),
    visible: Joi.string().allow('').allow(null),
    image: Joi.string().allow('').allow(null),
    createdate: Joi.string().allow('').allow(null),
    parent_id: Joi.string().allow('').allow(null),
    position: Joi.string().allow('').allow(null),
    is_deleted: Joi.string().allow('').allow(null),
 
    // name: Joi.string().empty('').min(3).max(30).default('default value').label('Billing Type Name'),
    title: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label('Title'),
    // name: Joi.string().empty('').label('Billing Type Name'),
    // is_protected: Joi.string().label('password protected'),
  });
 
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [formData, setFormData] = useState({
    image: "",

    title: "",
  
    createdate: "",
    parent_id: "",
    visible: "",
    position: "",
    is_protected: "",
    is_deleted:"",

    Activestatus: "",

    createddate: "",

    action: "",

    // visible: '',

    // stream_for_webtv: '',

    // stream_for_ios_mobile: '',

    // stream_for_android: '',

    // android_setup_box: '',

    // custom_linux_box: '',

    // dreambox: '',

    // pc: '',

    // add_trailer: '',

    // description: '',

    // language: '',

    // duration: '',

    // year: '',

    // studio: '',

    // producer:'',

    // director: '',

    // actors: '',

    // ratings: '',

    // price: '',

    // select_channel_image: '',

    // category: ''
  });
  const handleReset = () => {
    setFormData({
      image: "",

    title: "",

    Activestatus: "",

    createddate: "",

    action: "",

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
        .get(`http://localhost:5001/api/audio_categories/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({

            image: productData.image,
            title: productData.title,
            Activestatus: productData.Activestatus,
            createddate: productData.createddate,
            action: productData.action,
            // sale_price: productData.sale_price,
            // date: productData.date,
            // available: productData.available,
            // description: productData.description,
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
      const apiUrl = `http://localhost:5001/api/audio_categories/patch/${_id}`; // Edit
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
      const apiUrl = "http://localhost:5001/api/audio_categories/post"; // Add
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

    const validationResult = validationSchema.validate(formData, {
      abortEarly: false,
    });
   
    if (validationResult.error) {
      setValidationError(validationResult.error.details);
      return;
    }
   
    setValidationError(null);
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/audio_categories/patch/${_id}`; // Edit
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
      const apiUrl = "http://localhost:5001/api/audio_categories/post"; // Add
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

    // console.log(formData);
  };

  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
     {/* m="1.5rem 2.5rem" ml="350px"> */}
      {/* <SidebarAllCategories /> */}
      <FlexBetween></FlexBetween>

      <form onSubmit={handleSubmit}>
        <h3>AUDIO CATEGORY DETAILS</h3> <br />
        <label>Title :</label>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        <label>Password Protected :</label>
        <br />
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={passchecked}
                onChange={(e) => setPassChecked(e.target.checked)}
              />
            }
          />
        </FormControl>
        <br />
        <label>Visible :</label>
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
        <div>
          <label>Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            required="required"
          ></input>
        </div>
        <br />
        {validationError && (
<div style={{ color: 'red' }}>
            {validationError.map((error) => (
<div>{error.message}</div>
            ))}
</div>
      )}
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button>Reset</Button>

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

export default AddCategoryRadio;
