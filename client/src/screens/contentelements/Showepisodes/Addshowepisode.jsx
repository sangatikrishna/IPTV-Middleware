import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { TextField,
         Button,
         ButtonGroup,
         FormControl,
         InputLabel,
         Select,
         MenuItem,
         FormControlLabel, 
         Checkbox,
         Box,
         Snackbar,
         Alert,
        useMediaQuery}
 from '@mui/material';
import { Input } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from 'components/ChooseFile';
// import SelectImageSection from 'components/ChooseFile';


const AddShow= () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    visible: '',
    id: '',
    stream_URL: '',
    server_IP: '',
    comments: '',
    original_stream: '',
    Fall_back_stream1: '',
    Fall_back_stream2: '',
    comments: '',
    select_channel_image: ''
  });

  const handleReset = () => {
    setFormData({
    title: '',
    visible: '',
    id: '',
    stream_URL: '',
    server_IP: '',
    comments: '',
    original_stream: '',
    Fall_back_stream1: '',
    Fall_back_stream2: '',
    comments: '',
    select_channel_image: ''
    });
  };
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/shows/get/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            // id: productData.id,
            title: productData.title,
            visible: productData.visible,
            stream_URL: productData.stream_URL,
            server_IP: productData.server_IP,
            comments: productData.comments,
            original_stream: productData.original_stream,
            Fall_back_stream1: productData.Fall_back_stream1,
            Fall_back_stream2: productData.Fall_back_stream2,
            comments: productData.comments,
            select_channel_image: productData.select_channel_image
           
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);

const handleSubmit = (e) => {
  e.preventDefault();

  if (_id) {
    // If _id is defined, it's an edit operation
    const apiUrl = `http://localhost:5001/api/shows/patch/${_id}`; // Edit
    axios
      .patch(apiUrl, formData) // Use axios.patch for the PATCH request
      .then((response) => {
        setSuccessMessage("Product updated successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    // If _id is not defined, it's an add operation
    const apiUrl = "http://localhost:5001/api/shows/post"; // Add
    axios
      .post(apiUrl, formData) // Use axios.post for the POST request
      .then((response) => {
        setSuccessMessage("Product added successfully!");
        setSnackbarOpen(true);
        handleReset();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

  const [Addshowepisodes, setaddshowepisodes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/show_sub_categories/find")
      .then((response) => response.json())
      .then((json) => setaddshowepisodes(json.data));
  }, []);
  console.log(Addshowepisodes);

  return (
    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "320px"} mt={isSmallScreen ? "70px" : "undefined"}>
    <FlexBetween>

    <Header title="ADD SERIES" />


    <Box></Box>
  </FlexBetween>
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
      />
      {/* <TextField
        fullWidth
        name="visible"
        label="Visible"
        variant="outlined"
        value={formData.visible}
        onChange={handleChange}
        margin="normal"
      /> */}
         <FormControl>
            <FormControlLabel
            label="Visible"
              control={
                <Checkbox
                  id="agree"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                
              }
             />
            
          </FormControl>
      
      <TextField
        fullWidth
        name="enter_stream_URL"
        label="Enter Stream URL"
        variant="outlined"
        value={formData.stream_for_webtv}
        onChange={handleChange}
        margin="normal"
      />
      
      <TextField
        fullWidth
        name="Add_trailer"
        label="Add Trailer"
        variant="outlined"
        value={formData.backup_stream_1}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="description"
        label="Description"
        variant="outlined"
        value={formData.backup_stream_2}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="language"
        label="Language"
        variant="outlined"
        value={formData.backup_stream_3}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="duration"
        label="Duration"
        variant="outlined"
        value={formData.backup_stream_4}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="year"
        label="Year"
        variant="outlined"
        value={formData.backup_stream_5}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="studio"
        label="Studio"
        variant="outlined"
        value={formData.backup_stream_6}
        onChange={handleChange}
        margin="normal"
      />
         <TextField
        fullWidth
        name="producer"
        label="Producer"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      />
      <TextField
        fullWidth
        name="director"
        label="Director"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      />
<TextField
        fullWidth
        name="actors"
        label="Actors"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      />
<TextField
        fullWidth
        name="ratings"
        label="Ratings"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      />
<TextField
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      />

      
<InputFileUpload/>
{/* <TextField
        fullWidth
        name="select_channel_image"
        label="Select_Channel_Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal" */}
          
      
{/* <TextField
        fullWidth
        name="select_the_category"
        label="Select_The_Category"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      /> */}

{/* <TextField
        fullWidth
        name="select_channel_image"
        placeholder={<SelectImageSection/>}
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
          
      /> */}
        <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="select_the_category">Select the Category</InputLabel>
        <Select
          label="Select the category"
          name="select_the_category"
          value={formData.select_the_category}
          onChange={handleChange}
        >
          {/* <MenuItem value="Choose Category">CHOOSE CATEGORY</MenuItem>
          <MenuItem value="james corden">JAMES CORDEN</MenuItem>
          <MenuItem value="Graham Norton">GRAHAM NORTON</MenuItem>
          <MenuItem value="quran">QURAN</MenuItem>
          <MenuItem value="القرأن الكريم">القرأن الكريم</MenuItem>
          <MenuItem value="حياة جديدة">حياة جديدة</MenuItem>
          <MenuItem value="قمرة">قمرة</MenuItem>
          <MenuItem value="الايمان والعصر">الايمان والعصر 2</MenuItem>
          <MenuItem value="رحلة مع حمزة يوسف">رحلة مع حمزة يوسف</MenuItem>
          <MenuItem value="خفة مع أحمد البايض">خفة مع أحمد البايض</MenuItem>
          <MenuItem value="وش السعد">وش السعد</MenuItem>
          <MenuItem value="مسرح مصر">مسرح مصر</MenuItem>
          <MenuItem value="رامز بيلعب بالنار">رامز بيلعب بالنار</MenuItem>
          <MenuItem value="المتاهة">المتاهة</MenuItem>
          <MenuItem value="هاني فى الادغال">هاني فى الادغال</MenuItem>
          <MenuItem value="رامز تحت الأرض">رامز تحت الأرض</MenuItem>
          <MenuItem value="نبي الرحمة و التسامح">نبي الرحمة و التسامح</MenuItem>
          <MenuItem value="هلا برمضان">هلا برمضان</MenuItem>
          <MenuItem value="Top Chef">TOP CHEF</MenuItem>
          <MenuItem value="Mafi Metlo">MAFI METLO</MenuItem>
         <MenuItem value="هيدا حكي">هيدا حكي</MenuItem>
          <MenuItem value="اسألوا مرتي">سألوا مرتي</MenuItem>
          <MenuItem value="  2الصدمة">  2الصدمة</MenuItem>
          <MenuItem value="قفلفل شطه ">فلفل شطهة</MenuItem>
          <MenuItem value="امجموعة إنسان">مجموعة إنسان</MenuItem>
          <MenuItem value="رأعظم سجين في التاريخ">أعظم سجين في التاريخف</MenuItem>
          <MenuItem value="خأكشن يا عيال">أكشن يا عيالض</MenuItem>
          <MenuItem value="والحكم">الحكمد</MenuItem>
          <MenuItem value="مسرح مصر">مسرح مصر</MenuItem>
          <MenuItem value="رحديث الروح">حديث الروحر</MenuItem>
          <MenuItem value="اخواطر 11">خواطر 11ة</MenuItem>
          <MenuItem value="هوطن ع وتر">وطن ع وترل</MenuItem>
          <MenuItem value="ر(وط(وطن عَ وتر) - جاك و فاخر فاميلي">(وط(وطن عَ وتر) - جاك و فاخر فاميليض</MenuItem>
          <MenuItem value="نبي الرحمة و التسامح">نبي الرحمة و التسامح</MenuItem>
          <MenuItem value="arabs got talent">ARABS GOT TALENT</MenuItem>
          <MenuItem value="قصص الآيات في القرآن">قصص الآيات في القرآن</MenuItem> */}

            {Addshowepisodes.map((type) => (
              <MenuItem key={(type.id)} value={(type.id)}>
                {(type.title)}
            </MenuItem>
            ))}

          {/* Add more language options as needed */}
        </Select>
      </FormControl>
      
      <ButtonGroup variant="contained" aria-label="outlined button group">
      <Button type="reset" onClick={handleReset}>Reset</Button>

<Button type ="submit">Submit</Button>
</ButtonGroup>
</form>
<Snackbar
open={snackbarOpen}
autoHideDuration={6000} // Adjust the duration as needed
onClose={handleCloseSnackbar}

>
<Alert
onClose={handleCloseSnackbar}
severity="success"
variant="filled"
>
{successMessage}
</Alert>
</Snackbar>
    </Box>
  );
};

export default AddShow;
