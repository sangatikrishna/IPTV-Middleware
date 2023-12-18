import React, { useState , useEffect} from "react";
// import { useMediaQuery } from "@uidotdev/usehooks";
// import { phone, tablet, laptop, desktop } from "./icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Box,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";

// import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
import Sidebardc from "components/sidebardc";
// import { ForkRight } from "@mui/icons-material";
// import { useMediaQuery } from 'react-responsive'

 
// } from "@mui/material";

const AddCategory = () => {
  // const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const [passwordchecked, setPasswordChecked] = useState(false);
  const [visiblechecked, setVisibleChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    id:" ",
    title:" ",
    status:" ",
    image:" ",
    position:" ",
    created:" ",
    updated:" ",
  });
  // const theme = useTheme();
  // const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  // const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleReset = (e) => {

    setFormData({
      id:" ",
      title:" ",
      status:" ",
      image:" ",
      position:" ",
      created:" ",
      updated:" ",
    });
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

    // <Box m="1.5rem 0.5rem"  ml="300px" marginTop="120px" margin=" 0 auto" max-width="1210px" min-width="570px" width="80%" sx={{display:'flex', flexDirection:{xs:"column", md:"row"}, justifyContent:"space-between" }}
    // >
{/* <Box  m={isSmallScreen ? "1rem" : "1.5rem 3.5rem"} ml={isSmallScreen ? "10px" : "300px"}>  */}
  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/dashboard_categories/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            title: productData.title,
            status: productData.status,
            image: productData.image,
            position: productData.position,
            created: productData.created,
            updated: productData.updated,
          });
        })
        .catch((error) => {
          console.error('Error fetching category data:', error);
        });
    }
  }, [_id]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/dashboard_categories/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData) // Use axios.patch for the PATCH request
        .then((response) => {
          setSuccessMessage("Category updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/dashboard_categories/post"; // Add
      axios
        .post(apiUrl, formData) // Use axios.post for the POST request
        .then((response) => {
          setSuccessMessage("Category added successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    }
    console.log("Form submitted:", formData);
  };


  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
     {/* <Box m="1.5rem 0.5rem"  ml="300px" marginTop="120px" margin=" 0 auto" max-width="1210px" min-width="570px" width="80%" sx={{display:'flex', flexDirection:{xs:"column", md:"row"}, justifyContent:"space-between" }} */}
    

      {/* <Sidebardc /> */}

      <form onSubmit={handleSubmitForm}>
        <h3>VOD CATEGORY DETAILS</h3> <br />
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
        {/* <div style={{  marginLeft: "940px" }}> */}
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
        {/* </form> */}
      </Snackbar>
         
      
      </Box>


  );
};

export default AddCategory;