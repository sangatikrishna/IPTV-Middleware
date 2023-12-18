import React, { useState, useEffect } from "react";
import axios from "axios";
import Joi from "joi";
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
 
import Sidebar from "screens/content";
 
import { ContentCopy } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import SelectImageSection from "components/ChooseFile";
import Header from "components/Header";
import SidebarContent from "components/SidebarContent";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SidebarMonetize from "components/SidebarMonetize";
// import Monteiz from "screens/Monetize";
import Navbar from "components/Navbar";
 
const AddProduct = () => {
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();  
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  const [validationError, setValidationError] = useState(null);
  const validationSchema = Joi.object({
    // id: Joi.string().regex(/^[0-9]+$/, "id").required(),
    id: Joi.string().empty(''),
    // name: Joi.string(),
    // quantity: Joi.any().allow(null).allow(''),
    // model: Joi.any().valid(null),
    // purchase_price: Joi.string().empty(''),
    // manufacturer: Joi.string().empty(''),
    // sale_price: Joi.string().empty(''),
    // date: Joi.string().allow(null).allow(''),
    // available: Joi.string().allow(null).allow(''),
    description: Joi.string().allow(null).allow(''),
    




    // mail: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required().label("Email address"),
    date: Joi.string().regex(/^\d{4}$/).required().label(" date"),
    quantity: Joi.number().precision(2).required().label(" quantity"),
    available: Joi.number().required().precision(2).label(" available"),
    sale_price: Joi.number().required().precision(2).label(" sale_price"),
    purchase_price: Joi.number().required().label(" purchase_price"),
    name: Joi.string().regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/ ).min(3).max(30).required().label("Name"),
    model: Joi.string().regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).min(3).max(30).required().label("model"),
    manufacturer: Joi.string().regex(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).min(3).max(30).required().label("manufacturer"),

  });



    const [formData, setFormData] = useState({
    id: "",
 
    name: "",
 
    quantity: "",
 
    model: "",
 
    purchase_price: "",
 
    manufacturer: "",
 
    sale_price: "",
 
    date: "",
 
    available: "",
 
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

 


  const handleReset = () => {
    setFormData({
      id: "",
      name: "",
      quantity: "",
      model: "",
      purchase_price: "",
      manufacturer: "",
      sale_price: "",
      date: "",
      available: "",
      description: "",
    });
  };



  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validationSchema.validate(formData, {
      abortEarly: false,
    });
 
    if (validationResult.error) {
      setValidationError(validationResult.error.details);
      return ;
    }
 
    setValidationError(null);
    
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/products/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData)
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
      const apiUrl = "http://localhost:5001/api/products/post"; // Add
      axios
        .post(apiUrl, formData)
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


  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/products/list/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            name: productData.name,
            quantity: productData.quantity,
            model: productData.model,
            purchase_price: productData.purchase_price,
            manufacturer: productData.manufacturer,
            sale_price: productData.sale_price,
            date: productData.date,
            available: productData.available,
            description: productData.description,
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);
 
 // const handleSubmit = (e) => {
 //   e.preventDefault();
 
  // if (_id) {
  //   // If _id is defined, it's an edit operation
  //   const apiUrl = `http://localhost:5001/api/products/patch/${_id}`; // Edit
  //   axios
  //     .patch(apiUrl, formData) // Use axios.patch for the PATCH request
  //     .then((response) => {
  //       setSuccessMessage("Product updated successfully!");
  //       setSnackbarOpen(true);
  //       handleReset();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // } else {
  //   // If _id is not defined, it's an add operation
  //   const apiUrl = "http://localhost:5001/api/products/post"; // Add
  //   axios
  //     .post(apiUrl, formData) // Use axios.post for the POST request
  //     .then((response) => {
  //       setSuccessMessage("Product added successfully!");
  //       setSnackbarOpen(true);
  //       handleReset();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }
//  };
 
 
  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 3.5rem"} ml={isSmallScreen ? "10px" : "250px"}>
    {/* <Box m="1.5rem 2.5rem" ml="250px"> */}
              {/* <SidebarMonetize /> */}
 
 
      <FlexBetween>
        <Header title="ADD PRODUCT" />
 
        <Box></Box>
      </FlexBetween>
 
      <form onSubmit={handleSubmit} >
        <TextField
          fullWidth
          name="name"
          label="Product Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
 
        <TextField
          fullWidth
          name="model"
          label="Model"
          variant="outlined"
          value={formData.model}
          onChange={handleChange}
          margin="normal"
        />
 
        <TextField
          fullWidth
          name="manufacturer"
          label="Manufacturer"
          variant="outlined"
          value={formData.manufacturer}
          onChange={handleChange}
          margin="normal"
        />
 
        <TextField
          fullWidth
          name="quantity"
          label="Quantity"
          placeholder="Quantity in Number"
          variant="outlined"
          value={formData.quantity}
          onChange={handleChange}
          margin="normal"
        />
 
        <TextField
          fullWidth
          name="purchase_price"
          label="Purchase Price"
          variant="outlined"
          placeholder="Purchase price numeric only"
          value={formData.purchase_price}
          onChange={handleChange}
          margin="normal"
        />
 
        <TextField
          fullWidth
          name="sale_price"
          label="Sale Price"
          variant="outlined"
          placeholder="Sale price numeric only"
          value={formData.sale_price}
          onChange={handleChange}
          margin="normal"
        />
 
        <TextField
          fullWidth
          name="date"
          label="Date Received"
          variant="outlined"
          value={formData.date}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="available"
          label="Available"
          variant="outlined"
          value={formData.available}
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
      {/* <Monteiz/> */}
    </Box>
  );
};
 
export default AddProduct;