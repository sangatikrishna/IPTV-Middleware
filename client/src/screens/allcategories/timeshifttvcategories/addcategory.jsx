import React, { useState, useEffect  } from "react";
import axios from "axios";
import Joi from 'joi';
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
  useMediaQuery
} from "@mui/material";
// import FlexBetween from "components/FlexBetween";
// import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox ,Box } from '@mui/material';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
// import SidebarAllCategories from "components/SidebarAllCategories";
// import Header from 'components/Header';

const AddCategoryTimeShift = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [passchecked, setPassChecked] = useState(false);
  // const [passValue, setPassValue] = useState("");
  const [visiblechecked, setVisibleChecked] = useState(false); 
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { _id } = useParams();
  const [validationError, setValidationError] = useState(null);
  const validationSchema = Joi.object({
    // id: Joi.string().regex(/^[0-9]+$/, "id").required(),
    id: Joi.string().empty(''),
    is_protected: Joi.string().allow('').allow(null),
    visible: Joi.string().allow('').allow(null),
    image: Joi.string().allow('').allow(null),
    shahid_image: Joi.string().allow('').allow(null),
    france_image: Joi.string().allow('').allow(null),
    createdate: Joi.string().allow('').allow(null),
    position: Joi.string().allow('').allow(null),
    parent_id: Joi.string().allow('').allow(null),
    created: Joi.string().allow('').allow(null),
    modified: Joi.string().allow('').allow(null),
    is_deleted: Joi.string().allow('').allow(null),
    // name: Joi.string().empty('').min(3).max(30).default('default value').label('Billing Type Name'),
    title: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label('Title'),
    // name: Joi.string().empty('').label('Billing Type Name'),
    // is_protected: Joi.string().label('password protected'),
  });


  const [formData, setFormData] = useState({
    id:"",
    title: "",
    image:"",
    shahid_image:"",
    france_image:"",
    createdate:"",
    visible:"",
    position:"",
    parent_id:"",
    is_protected:"",
    created:"",
    modified:"",
    is_deleted:"",
    // is_protected:isChecked?"1":"0",
  });


  const handleReset = () => {
    setFormData({
      id:"",
      title: "",
      image:"",
      shahid_image:"",
      france_image:"",
      createdate:"",
      visible:"",
      position:"",
      parent_id:"",
      is_protected:"",
      created:"",
      modified:"",
      is_deleted:"",
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


  const handlePassChange = () => {
    setIsChecked(!isChecked)
  };


  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/video_live_categories/${_id}`)
        .then((response) => {
          const videoliveData = response.data;
          setFormData({
            title: videoliveData.title,
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);

const handleSubmit = (e) => {
  e.preventDefault();
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
    const apiUrl = `http://localhost:5001/api/video_live_categories/patch/${_id}`; // Edit
    axios
      .patch(apiUrl, formData) // Use axios.patch for the PATCH request
      .then((response) => {
        setSuccessMessage("category details updated successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    // If _id is not defined, it's an add operation
    const apiUrl = "http://localhost:5001/api/video_live_categories/post"; // Add
    axios
      .post(apiUrl, formData) // Use axios.post for the POST request
      .then((response) => {
        setSuccessMessage("category details added successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};


  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
     {/* <Box m="1.5rem 2.5rem" ml="350px"> */}
      {/* <SidebarAllCategories /> */}

      <form onSubmit={handleSubmit}>
        <h3>VIDEO LIVE TV CATEGORY DETAILS</h3> <br />
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
         <input
        name="is_protected"
        type="checkbox"
        // checked={isChecked}
        onClick={handlePassChange}
        // onChange={(e) => setIsChecked(e.target.checked)}
        // value={isChecked?"1":"0"}
      />
        {/* <FormControl> */}
          {/* <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={passchecked}
                onChange={(e) => setPassChecked(e.target.checked)}
              />
            }
          /> */}
          {/* <FormControlLabel 
            name="is_protected"
            control={<Checkbox checked={passchecked} onChange={handleCheckboxChange} />}
            value={formData.is_protected?"1":"0"}
            // label="Check me"
            />
        </FormControl>
        {/* <input type="checkbox" name="termsAndConditions" id="termsAndConditions"></input>
        <br /> */}
        <br/>
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
            // required="required"
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

export default AddCategoryTimeShift;
