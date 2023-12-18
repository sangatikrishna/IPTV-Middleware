import React, { useState, useEffect } from "react";

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
} from "@mui/material";

import { Input } from "@mui/material";

import { CloudUpload } from "@mui/icons-material";

import SidebarContent from "components/SidebarContent";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import InputFileUpload from "components/ChooseFile";

// import Adminsidebar from 'components/adminsidebar';

const AddUpdates7 = () => {
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({
    visible: "",

    stream_for_webtv: "",

    backup_stream_1: "",

    backup_stream_2: "",

    backup_stream_3: "",

    backup_stream_4: "",

    backup_stream_5: "",

    backup_stream_6: "",

    select_channel_image: "",

    select_the_category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const [products, setProducts] = useState([]);

  // Make an API request to fetch payment types data from your server
  useEffect(() => {
    fetch("http://localhost:5001/api/products/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      });
  }, []);

  return (
    <Box m="1.5rem 2.5rem" ml="400px">
      <FlexBetween>
        <Box></Box>
      </FlexBetween>

      <h3>APPUPDATE ADD </h3>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="Firmwareversion"
          label="Firmware Version"
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
          name="Description"
          label="Description"
          variant="outlined"
          value={formData.PassWord}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="Model">Model</InputLabel>

          <Select
            label="Model"
            name="Model"
            value={formData.Country}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose Model)</MenuItem>
            {products.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.model}
            </MenuItem>
          ))}
            {/* Add more language options as needed */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="Firmware"
          label="Firmware"
          variant="outlined"
          value={formData.Address1}
          onChange={handleChange}
          margin="normal"
        />
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button style={{ backgroundColor: "White", color: "black" }}>
            Reset
          </Button>
          <Button style={{ backgroundColor: "green" }}>Submit</Button>
        </ButtonGroup>
      </form>

      {/* <Adminsidebar /> */}
    </Box>
  );
};

export default AddUpdates7;
