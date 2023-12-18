import React, { useState } from 'react';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box , useMediaQuery} from '@mui/material';
import { Input } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from 'components/ChooseFile';


const Sortable = () => {
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
   

    <Box></Box>
  </FlexBetween>
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="TV"
        label="TV"
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
    
    </Box>
  );
};

export default Sortable;