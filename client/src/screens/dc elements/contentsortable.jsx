


import React, { useState } from 'react';

import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box, useMediaQuery } from '@mui/material';

import { Input } from '@mui/material';

import { CloudUpload } from '@mui/icons-material';

import SidebarContent from 'components/SidebarContent';

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import InputFileUpload from 'components/ChooseFile';

import SidebarDC from 'components/sidebardc';

 

 

const ContentSortable= () => {

  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  const [formData, setFormData] = useState({

    title: '',

   

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

    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "60px"}>
      <FlexBetween>
        <Header title="CONTENT SORTABLE"  />

        <Box>
          
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        ml="0px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"></Box>
    <form onSubmit={handleSubmit}>

      <TextField

        fullWidth

        name="title"

        label="TRT FM"

        variant="outlined"

        value={formData.title}

        onChange={handleChange}

        margin="normal"

        disabled
      />
      <form onSubmit={handleSubmit}>

<TextField

  fullWidth

  name="title"

  label="ABC"

  variant="outlined"

  value={formData.title}

  onChange={handleChange}

  margin="normal"
  disabled

/>
<form onSubmit={handleSubmit}>

<TextField

  fullWidth

  name="title"

  label="TRT Radio"

  variant="outlined"

  value={formData.title}

  onChange={handleChange}

  margin="normal"

  disabled

/>
<form onSubmit={handleSubmit}>

<TextField

  fullWidth

  name="title"

  label="MBC"

  variant="outlined"

  value={formData.title}

  onChange={handleChange}

  margin="normal"

  disabled

/>
<form onSubmit={handleSubmit}>

<TextField

  fullWidth

  name="title"

  label="Bein"

  variant="outlined"

  value={formData.title}

  onChange={handleChange}

  margin="normal"
  disabled

/>

      {/* <ButtonGroup variant="contained" aria-label="outlined button group">

  <Button>Reset</Button>

  <Button>Submit</Button>

</ButtonGroup> */}

    </form>
    </form>
    </form>
    </form>
    </form>
    
    

    </Box>
    
    
    
  
    


  );

};

 

export default ContentSortable;


