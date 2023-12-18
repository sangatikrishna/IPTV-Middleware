import React, { useState, useEffect } from "react";
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
  NativeSelect,
  Snackbar,
  Alert,
  useMediaQuery
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { useParams } from "react-router-dom";

const AddShowsNames = () => {
  const [passchecked, setPassChecked] = useState(false);
  const { _id } = useParams();
  const [visiblechecked, setVisibleChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [age, setAge] = React.useState("");

  // const handleChangeShows = (event) => {
  //   setAge(event.target.value);
  // };

  const [formData, setFormData] = useState({
    title: "",
    id: "",
   
  });

  const handleReset = () => {
    setFormData({
    id: "",
    title: "",
   
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
        .get(`http://localhost:5001/api/show_sub_categories/get/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            // id: productData.id,
            title: productData.title,
            // is_youtube: productData.is_youtube,
            // select_channel_image: productData.select_channel_image,
            // select_the_category: productData.select_the_category,
           
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
    const apiUrl = `http://localhost:5001/api/show_sub_categories/patch/${_id}`; // Edit
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
    const apiUrl = "http://localhost:5001/api/show_sub_categories/post"; // Add
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

  // const [Addshownames, setaddshownames] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5001/api/show_sub_categories/find")
  //     .then((response) => response.json())
  //     .then((json) => setaddshownames(json.data));
  // }, []);
  // console.log(Addshownames);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

    console.log(formData);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(formData);
  // };

  const [AddShowsnames, setaddshowsnames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/show_categories/find")
      .then((response) => response.json())
      .then((json) => setaddshowsnames(json.data));
  }, []);
  console.log(AddShowsnames);


  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
     {/* m="1.5rem 2.5rem" ml="350px"> */}
      <FlexBetween></FlexBetween>

      <form onSubmit={handleSubmit}>
        <h3>SHOW SUB CATEGORY DETAILS</h3> <br />
        <label>ShowsCategory :</label>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="select_the_category"
            value={formData.select_the_category}
            label="Age"
            // onChange={handleChangeShows}
          >
            {AddShowsnames.map((type) => (
              <MenuItem key={(type.id)} value={(type.id)}>
                {(type.title)}
            </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
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
        <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button  type="reset" onClick={handleReset}>Reset</Button>

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

export default AddShowsNames;
