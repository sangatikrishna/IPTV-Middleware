import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import {Typography, useMediaQuery} from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import StatBox from 'components/StatBox';

const CustomerNotifications = () => {
  const [notificationType, setNotificationType] = useState('text');
  const [textValue, setTextValue] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleRadioChange = (event) => {
    setNotificationType(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <StatBox title="Customer Notifications">
      </StatBox>

      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="notification-type"
          name="notification-type"
          value={notificationType}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="text" control={<Radio />} label="Text" />
          <FormControlLabel value="image" control={<Radio />} label="Image" />
        </RadioGroup>
      </FormControl>

      {notificationType === 'text' && (
        <TextField
          label="Enter Text"
          variant="outlined"
          fullWidth
          margin="normal"
          value={textValue}
          onChange={handleTextChange}
        />
      )}

      {notificationType === 'image' && (
        <FormControl fullWidth margin="normal">
          <Input
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
        </FormControl>
      )}
    </Box>
  );
};

export default CustomerNotifications;
