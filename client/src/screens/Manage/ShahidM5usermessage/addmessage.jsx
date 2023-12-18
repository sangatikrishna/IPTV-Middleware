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

const AddMessage5 = () => {
  const [checked, setChecked] = useState(false);
  const [passchecked, setPassChecked] = useState(false);

  const [visiblechecked, setVisibleChecked] = useState(false);

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

      <h3>APPMESSAGE ADD </h3>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="Title"
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
          name="Description"
          label="Description"
          variant="outlined"
          value={formData.PassWord}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="Customers">Customers</InputLabel>

          <Select
            label="Customers"
            name="Customers"
            value={formData.Country}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose Customer)</MenuItem>
            {products.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.model}
            </MenuItem>
          ))}
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
          name="Startdate"
          label="Startdate"
          variant="outlined"
          value={formData.Address1}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="Repeat Intervels"
          label="Repeat Intervels"
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

export default AddMessage5;
