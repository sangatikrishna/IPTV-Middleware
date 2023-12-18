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

const MovieSortableList = () => {
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState({
    TheChroniclesofNarnia1: "",
    ThePunisher2004: "",
    BatmanBegins2005: "",
    Theisland2005: "",
    SAW2: "",
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
          <InputLabel htmlFor="Movie_category">VOD Category</InputLabel>
          <Select
            label="Movie Category"
            name="Movie_category"
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
          name="TheChroniclesofNarnia1"
          label="The Chronicles of Narnia 1"
          variant="outlined"
          value={formData.TheChroniclesofNarnia1}
          onChange={handleChange}
          margin="normal"
          disabled
        />

        <TextField
          fullWidth
          name="SAW2"
          label="SAW2"
          variant="outlined"
          value={formData.SAW2}
          onChange={handleChange}
          margin="normal"
          disabled
        />

        <TextField
          fullWidth
          name="Theisland2005"
          label="Theisland2005"
          variant="outlined"
          value={formData.Theisland2005}
          onChange={handleChange}
          margin="normal"
          disabled
        />

        <TextField
          fullWidth
          name="BatmanBegins2005"
          label="BatmanBegins2005"
          variant="outlined"
          value={formData.BatmanBegins2005}
          onChange={handleChange}
          margin="normal"
          disabled
        />

        <TextField
          fullWidth
          name="ThePunisher2004"
          label="ThePunisher2004"
          variant="outlined"
          value={formData.ThePunisher2004}
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

export default MovieSortableList;
