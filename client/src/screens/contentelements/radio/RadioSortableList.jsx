import React, { useState } from "react";

 

import {

  TextField,

  // Button,

  // ButtonGroup,

  FormControl,

  InputLabel,

  Select,

  MenuItem,

  // FormControlLabel,

  // Checkbox,
  useMediaQuery,
  Box,

} from "@mui/material";

 

// import { Input } from '@mui/material';

 

// import { CloudUpload } from '@mui/icons-material';

 

import SidebarContent from "components/SidebarContent";

 

import FlexBetween from "components/FlexBetween";

 

// import Header from "components/Header";

 

// import InputFileUpload from "components/ChooseFile";

 

import Navbar from "components/Navbar";

 

import StatBox from "components/StatBox";

 

const RadioSortableList = () => {

  const [checked, setChecked] = useState(false);

 
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState({

    Chaine1: "",

    Radio2M: "",

    RadioNationale: "",

    Dakhla: "",

    FuratFM: "",

  });

 

  const handleChange = (e) => {

    const { name, value } = e.target;

 

    setFormData({ ...formData, [name]: value });

  };

 

  const handleSubmit = (e) => {

    e.preventDefault();

 

    console.log(formData);

  };

 

  return (

    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>


      <FlexBetween>

        {/* <Header title="Drag and Drop to change the position of streams" /> */}

 

        <Box></Box>

      </FlexBetween>

 

      <StatBox

        title="Drag and Drop to change the position of stream"

 

        // value={data && data.totalCustomers}

 

        // increase="+14%"

 

        // description="Since last month"

      />

 

      <form onSubmit={handleSubmit}>

        <FormControl fullWidth variant="outlined" margin="normal">

          <InputLabel htmlFor="radio_category">Radio Category</InputLabel>

 

          <Select

            label="Radio Category"

            name="radio_category"

            value={formData.radio_category}

            onChange={handleChange}

          >

            <MenuItem value="arabic">Arabic</MenuItem>

 

            <MenuItem value="Top Radio">Top Radio</MenuItem>

 

            <MenuItem value="Turkish">Turkish</MenuItem>

 

            {/* Add more language options as needed */}

          </Select>

        </FormControl>

 

        <TextField

          fullWidth

          name="Chaine 1"

          label="Chaine 1"

          variant="outlined"

          value={formData.Chaine1}

          onChange={handleChange}

          margin="normal"

          disabled

        />

 

        <TextField

          fullWidth

          name="Radio 2M"

          label="Radio 2M"

          variant="outlined"

          value={formData.Radio2M}

          onChange={handleChange}

          margin="normal"

          disabled

        />

 

        <TextField

          fullWidth

          name="Radio Nationale"

          label="Radio Nationale"

          variant="outlined"

          value={formData.RadioNationale}

          onChange={handleChange}

          margin="normal"

          disabled

        />

        <TextField

          fullWidth

          name="Dakhla"

          label="Dakhla"

          variant="outlined"

          value={formData.Dakhla}

          onChange={handleChange}

          margin="normal"

          disabled

        />

        <TextField

          fullWidth

          name="Furat FM"

          label="Furat FM"

          variant="outlined"

          value={formData.FuratFM}

          onChange={handleChange}

          margin="normal"

          disabled

        />

      </form>

 

      {/* <SidebarContent /> */}

 

      <Navbar />

    </Box>

  );

};

 

export default RadioSortableList;