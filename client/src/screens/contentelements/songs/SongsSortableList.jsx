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

const SongsSortableList = () => {
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState({
    testSOng: ""
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
          <InputLabel htmlFor="song_category">
            Song Category
          </InputLabel>
          <Select
            label="Song Category"
            name="song_category"
            value={formData.song_category}
            onChange={handleChange}
          >
            <MenuItem value="arabic">Arabic</MenuItem>
            <MenuItem value="pop">Pop</MenuItem>
            
            {/* Add more language options as needed */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="testSOng"
          label="testSOng"
          variant="outlined"
          value={formData.testSOng}
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

export default SongsSortableList;
