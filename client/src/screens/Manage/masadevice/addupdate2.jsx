import React, { useState } from 'react';

import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box } from '@mui/material';

import { Input } from '@mui/material';

import { CloudUpload } from '@mui/icons-material';

import SidebarContent from 'components/SidebarContent';

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import InputFileUpload from 'components/ChooseFile';
import SidebarManage from 'components/SidebarManage';

// import Adminsidebar from 'components/adminsidebar';

 

 

const AddUpdate2 = () => {

  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({

    visible: '',

    stream_for_webtv: '',

    backup_stream_1: '',

    backup_stream_2: '',

    backup_stream_3: '',

    backup_stream_4: '',

    backup_stream_5: '',

    backup_stream_6: '',

    select_channel_image: '',

    select_the_category: ''

 

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

    <Box m="1.5rem 2.5rem" ml="300px">

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

           <MenuItem  value="mass iptv 2015">mass iptv 2015</MenuItem>

            <MenuItem  value="Masa IPTV New 2016">Masa IPTV New 2016</MenuItem>

          <MenuItem  value="Shahidfree"> Shahidfree</MenuItem>

          <MenuItem  value="France">France</MenuItem>

          <MenuItem  value="Leoplayer Box  ">Leoplayer Box </MenuItem>

          <MenuItem  value="Humax">  Humax</MenuItem>

          <MenuItem   value="MasaNew2017-h8"> MasaNew2017-h8</MenuItem>

          <MenuItem  value="Shahid K9"> Shahid K9</MenuItem>

          <MenuItem  value="Shahid New">Shahid New</MenuItem>

          <MenuItem  value="masa newH8 Update">masa newH8 Update</MenuItem>

          <MenuItem  value="Shahid H8 Parent">Shahid H8 Parent</MenuItem>

          <MenuItem  value="Shahid K8 Child">Shahid K8 Child</MenuItem>

          <MenuItem  value="LeoLite_K5_OLD_shahid">LeoLite_K5_OLD_shahid</MenuItem>

          <MenuItem  value="LeoLite_K5_shahid">LeoLite_K5_shahid</MenuItem>

          <MenuItem  value="LeoLite_K9_shahid">LeoLite_K9_shahid</MenuItem>

          <MenuItem  value="LeoLite_multi_shahid_parent">LeoLite_multi_shahid_parent</MenuItem>

          <MenuItem  value="Shahid New K3 2019">Shahid New K3 2019</MenuItem>

          <MenuItem  value="CommonAPI">CommonAPI</MenuItem>

          <MenuItem  value="Shahid 2020 Amigo">Shahid 2020 Amigo</MenuItem>

          <MenuItem  value="Shahid 2022 Amigo">Shahid 2022 Amigo</MenuItem>

       

         

 

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

  <Button style={{ backgroundColor: "White",color:'black' }}>Reset</Button>

  <Button style={{ backgroundColor: "green"}}>Submit</Button>

</ButtonGroup>

    </form>

    {/* <Adminsidebar /> */}
<SidebarManage/>
    </Box>

  );

};

 

export default AddUpdate2;