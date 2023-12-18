import React, { useState } from 'react';

 

import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box } from '@mui/material';

 

import { Input } from '@mui/material';

 

import { CloudUpload } from '@mui/icons-material';

 

import SidebarContent from 'components/SidebarContent';

 

import FlexBetween from "components/FlexBetween";

 

import Header from "components/Header";

 

import InputFileUpload from 'components/ChooseFile';

 

 

 

 

 

 

 

const Shownamesortablelist= () => {

 

  const [checked, setChecked] = useState(false);

 

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

 

    <Box m="1.5rem 2.5rem" ml="300px">

      <FlexBetween>

        <Header title="SHOW SORTABLE LIST"  />

 

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

 

        label="قصص الآيات في القرآن"

 

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

 

  label="Arabs Got Talent"

 

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

 

  label="(وط(وطن عَ وتر) - جاك و فاخر فاميلي"

 

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

 

  label="هلا برمضان"

 

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

 

  label="Top Chef"

 

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

 

  label="Mafi Metlo"

 

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

 

  label="هيدا حكي"

 

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

 

  label="سألوا مرتي"

 

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

 

  label="2الصدمة"

 

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

 

  label="فلفل شطه"

 

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

 

  label="مجموعة إنسان"

 

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

 

  label="أعظم سجين في التاريخ"

 

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

 

  label="أكشن يا عيال"

 

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

 

  label="الحكم"

 

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

 

  label="خواطر 11"

 

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

 

  label="وطن ع وتر"

 

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

 

  label="نبي الرحمة و التسامح"

 

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

 

  label="رامز تحت الأرض"

 

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

 

  label="حياة جديدة"

 

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

 

  label="خفة مع أحمد البايض"

 

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

 

  label="وش السعد"

 

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

 

  label="مسرح مصر"

 

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

 

  label="رامز بيلعب بالنار"

 

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

 

  label="المتاهة"

 

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

 

  label="هاني فى الادغال"

 

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

 

  label="القرأن الكريم"

 

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

 

  label="قمرة"

 

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

 

  label="الايمان والعصر 2"

 

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

 

  label="رحلة مع حمزة يوسف"

 

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

 

  label="quran"

 

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

 

  label="Graham Norton"

 

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

 

  label="james corden"

 

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

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

    </form>

   

 

    {/* <SidebarDC /> */}

    </Box>

   

   

   

 

   

 

 

  );

 

};

 

 

 

export default Shownamesortablelist;

 

 