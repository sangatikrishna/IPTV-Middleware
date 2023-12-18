import React, { useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
// import { Input } from '@mui/material';
// import { CloudUpload } from '@mui/icons-material';
import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";
import Navbar from "components/Navbar";
import StatBox from "components/StatBox";

const Timeshiftchannelsort = () => {
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState({
    mbc1: "",
    mbc2: "",
    mbc3: "",
    mbc4: "",

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
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>

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
          <InputLabel htmlFor="song_category">
            Channel Category
          </InputLabel>
          <Select
            label="Song Category"
            name="song_category"
            value={formData.song_category}
            onChange={handleChange}
          >
            <MenuItem value="ts-arabic">TS-ARABIC</MenuItem>
            <MenuItem value="farsi">FARSI</MenuItem>
            {/* <MenuItem value="quran">quran</MenuItem> */}
            
            {/* Add more language options as needed */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="mbc1"
          label="MBC 1"
          variant="outlined"
          value={formData.mbc1}
          onChange={handleChange}
          margin="normal"
          disabled
        />
         <TextField
          fullWidth
          name="mbc2"
          label="MBC 2"
          variant="outlined"
          value={formData.mbc2}
          onChange={handleChange}
          margin="normal"
          disabled
        />
         <TextField
          fullWidth
          name="mbc3"
          label="MBC 3"
          variant="outlined"
          value={formData.mbc3}
          onChange={handleChange}
          margin="normal"
          disabled
        />
         <TextField
          fullWidth
          name="mbc4"
          label="MBC 4"
          variant="outlined"
          value={formData.mbc4}
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

export default Timeshiftchannelsort;
