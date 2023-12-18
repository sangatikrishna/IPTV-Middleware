import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box } from '@mui/material';

import { Input,IconButton, InputAdornment,useMediaQuery, Snackbar, Alert  } from '@mui/material';

import { CloudUpload ,Add,Delete} from '@mui/icons-material';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import SidebarContent from 'components/SidebarContent';

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";
import SidebarCustomers from "components/SidebarCustomers";

import InputFileUpload from 'components/ChooseFile';
// import SidebarManage from 'components/SidebarManage';

// import Adminsidebar from 'components/adminsidebar';

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useParams } from "react-router-dom";
 

const Addcustomer_saz3 = () => {

  const [checked, setChecked] = useState(false);
  const { _id } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState({

  id:"",
  name:"",
  surname:"",
  customer_id:"",
  is_main_customer:"",
  ip_address:"",
  nick:"",
  mail:"",
  password:"",
  enddate:"",
  createdby:"",
  billing_id:"",
  device_id:"",
  is_multiple_session:"",
  is_loggedin:"",
  status:"",
  group_id:"",
  created:"",
  modified:"",
  payment_settings_id:"",
  category_password:"",
  user_limit:"",
  number_of_login:"",
  is_deleted:"",
  is_trail:"",
  is_paid:"",
  is_cdn:"",
  reseller_id:"",
  playlists: [
    {
      playlistname: "",
      url: "",
    },
  ],

  });

  const handleReset = () => {
    setFormData({
      id:"",
      name:"",
      surname:"",
      customer_id:"",
      is_main_customer:"",
      ip_address:"",
      nick:"",
      mail:"",
      password:"",
      enddate:"",
      createdby:"",
      billing_id:"",
      device_id:"",
      is_multiple_session:"",
      is_loggedin:"",
      status:"",
      group_id:"",
      created:"",
      modified:"",
      payment_settings_id:"",
      category_password:"",
      user_limit:"",
      number_of_login:"",
      is_deleted:"",
      is_trail:"",
      is_paid:"",
      is_cdn:"",
      reseller_id:"",
      url: "",
      playlists: [
      {
        playlistname: "",
        url: "",
      },
    ],
    
    });
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

  };

  const handlePlaylistChange = (index, field, value) => {
    const updatedPlaylists = [...formData.playlists];
    updatedPlaylists[index][field] = value;
    setFormData((prevData) => ({ ...prevData, playlists: updatedPlaylists }));
  };

  const handleAddPlaylist = () => {
    setFormData((prevData) => ({
      ...prevData,
      playlists: [...prevData.playlists, { name: "", url: "" }],
    }));
  };
 
  const handleDeletePlaylist = (index) => {
    const updatedPlaylists = [...formData.playlists];
    updatedPlaylists.splice(index, 1);
    setFormData((prevData) => ({ ...prevData, playlists: updatedPlaylists }));
  };


  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/customer_saz3/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            id: productData.id,
            name: productData.name,
            surname: productData.surname,
            customer_id: productData.customer_id,
            is_main_customer: productData.is_main_customer,
            ip_address: productData.ip_address,
            nick: productData.nick,
            mail: productData.mail,
            password: productData.password,
            enddate: productData.enddate,
            createdby: productData.createdby,
            billing_id: productData.billing_id,
            device_id: productData.device_id,
            is_multiple_session: productData.is_multiple_session,
            is_loggedin: productData.is_loggedin,
            status: productData.status,
            group_id:productData.group_id,
            created:productData.created,
            modified:productData.modified,
            payment_settings_id: productData.payment_settings_id,
            category_password: productData.category_password,
            user_limit: productData.user_limit,
            number_of_login: productData.number_of_login,
            is_deleted: productData.is_deleted,
            is_trail: productData.is_trail,
            is_paid: productData.is_paid,
            is_cdn: productData.is_cdn,
            reseller_id: productData.reseller_id,
            playlists: [
              {
                playlistname:productData.playlistname,
                url:productData.url,
              },
            ],
          });
        })
        .catch((error) => {
          console.error('Error fetching content data:', error);
        });
    }
  }, [_id]);

  const handleSubmit = (e) => {

    e.preventDefault();
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/customer_saz3/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData) // Use axios.patch for the PATCH request
        .then((response) => {
          setSuccessMessage("Customer updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/customer_saz3/post"; // Add
      axios
        .post(apiUrl, formData) // Use axios.post for the POST request
        .then((response) => {
          setSuccessMessage("Customer added successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    }

    console.log(formData);

  };


  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/countries/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCountries(res.countrydata);
      });
  }, []);

  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/packages/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPackages(res.data);
      });
  }, []);

  const [paymentTypes, setPaymentTypes] = useState([]);
 
  // Make an API request to fetch payment types data from your server
  useEffect(() => {
    fetch("http://localhost:5001/api/payment_types/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPaymentTypes(res.data);
      });
  }, []);

  const [resellers, setResellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/resellers/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setResellers(res.data);
      });
  }, []);
 

  return (

    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>

    <FlexBetween>

    <Header title="Sazpin New Customer Registration" />

    <Box></Box>
      </FlexBetween>
      <form onSubmit={handleSubmit}>
        <h3>
          <u>Product Selection</u>
        </h3>

<FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">Choose Package</InputLabel>
          <Select
            label="Choose Package"
            name="choose_package"
            value={formData.choose_package}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose package Type)</MenuItem>
            {packages.map((type) => (
            <MenuItem key={type.id} value={type.id}>
            {type.name}
            </MenuItem>
            ))}
            {/* <MenuItem value="farisi">farisi turkish</MenuItem>
            <MenuItem value="6">FRANCE</MenuItem>
            <MenuItem value="8">FRANCE Plus</MenuItem>
            <MenuItem value="4">Full package</MenuItem>
            <MenuItem value="12">Humax Vejo Arab TV</MenuItem>
            <MenuItem value="18">Leo Player</MenuItem>
            <MenuItem value="14">Lite Tv</MenuItem>
            <MenuItem value="1">Sazpin Basic Plan</MenuItem>
            <MenuItem value="11">Sazpin basisc no german</MenuItem>
            <MenuItem value="13">Sazpin New Song</MenuItem>
            <MenuItem value="7">test</MenuItem>
            <MenuItem value="10">TimeShift Package</MenuItem>
            <MenuItem value="3">Turkish Basic Plan</MenuItem> */}

            {/* Add more language MenuItems as needed */}

            {/* Select2 */}
          </Select>
        </FormControl>


        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            Choose Payment Type
          </InputLabel>
          <Select
            label="Choose Payment Type"
            name="choose_payment_type"
            value={formData.choose_payment_type}
            onChange={handleChange}
          >

<MenuItem value="17">(Choose Payment Type)</MenuItem>

{paymentTypes.map((type) => (
  <MenuItem key={type.id} value={type.id}>
    {type.name}
  </MenuItem>
))}

</Select>
</FormControl>

<FormControl fullWidth variant="outlined" margin="normal">

          <InputLabel htmlFor="select_the_category">Reseller</InputLabel>
          <Select
            label="Reseller"
            name="reseller"
            value={formData.reseller}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose Reseller)</MenuItem>
            {resellers.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
     
        <TextField
          fullWidth
          name="macaddress"
          label="MacAddress"
          variant="outlined"
          value={formData.macaddress}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="device_id"
          label="Device KEY"
          variant="outlined"
          value={formData.device_id}
          onChange={handleChange}
          margin="normal"
        />

<LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Membership End Date" />
        </LocalizationProvider>

        <div>
        {formData.playlists.map((playlists, index) => (
            <div key={index} style={{ alignItems: "center" }}>
          <TextField
            fullWidth
            name={`playlistname${index}`}
            label="Playlist Name"
            variant="outlined"
            value={playlists.playlistname}
            onChange={(e) =>
              handlePlaylistChange(index, "playlistname", e.target.value)
            }
            // onChange={(event) => {
            //   const newFormData = [...formData];
            //   newFormData[index].name = event.target.value;
            //   setFormData(newFormData);
            // }
          // }
            margin="normal"
            InputProps={{
              endAdornment: (
                <React.Fragment>
                  <InputAdornment position="end">
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeletePlaylist(index)}
                    // onClick={() => handleRemoveField(index)}
                  >
                    <Delete />
                  </IconButton>
                  </InputAdornment>
                </React.Fragment>
              ),
            }}
          />

<TextField
            fullWidth
            name={`url${index}`}
            label="URL"
            variant="outlined"
            value={playlists.url}
            onChange={(e) =>
              handlePlaylistChange(index, "url", e.target.value)
            }
            // onChange={(event) => {
            //   const newFormData = [...formData];
            //   newFormData[index].url = event.target.value;
            //   setFormData(newFormData);
            // }}
            margin="normal"
          />
        </div>
        ))}
      <IconButton onClick={handleAddPlaylist} color="primary" >
        <Add />
      </IconButton>
    </div>



    <h3><u>Personal details</u></h3>


<TextField
  fullWidth
  name="name"
  label="First Name"
  variant="outlined"
  value={formData.name}
  onChange={handleChange}
  margin="normal"
/>
<TextField
  fullWidth
  name="surname"
  label="Last Name"
  variant="outlined"
  value={formData.surname}
  onChange={handleChange}
  margin="normal"
/>
<TextField
  fullWidth
  name="mail"
  label="Email Address"
  variant="outlined"
  value={formData.mail}
  onChange={handleChange}
  margin="normal"
/>
<TextField
  fullWidth
  name="address1"
  label="Address1"
  variant="outlined"
  value={formData.address1}
  onChange={handleChange}
  margin="normal"
/>
<TextField
  fullWidth
  name="address2"
  label="Address2"
  variant="outlined"
  value={formData.address2}
  onChange={handleChange}
  margin="normal"
/>
<TextField
  fullWidth
  name="city_name"
  label="City Name"
  variant="outlined"
  value={formData.city_name}
  onChange={handleChange}
  margin="normal"
/>
<TextField
  fullWidth
  name="zipcode"
  label="Postal / Zipcode"
  variant="outlined"
  value={formData.zipcode}
  onChange={handleChange}
  margin="normal"
/>

<FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">Country</InputLabel>
          <Select
            label="country"
            name="select_the_category"
            // value={formData.country}
            onChange={handleChange}
          >
            <MenuItem >(Choose Country Type)</MenuItem>
            {countries.map((type) => (
              <MenuItem key={(type.id)} value={(type.id)}>
                {(type.name)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="phone_work"
          label="Phone Number(Work)"
          variant="outlined"
          value={formData.phone_work}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="phone_home"
          label="Phone Number(Home)"
          variant="outlined"
          value={formData.phone_home}
          onChange={handleChange}
          margin="normal"
        />
    <h3>
          <u>Extra Settings</u>
        </h3>
        <TextField
          fullWidth
          name="cat_pass"
          label="Category Password"
          variant="outlined"
          value={formData.cat_pass}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            STB's per Household
          </InputLabel>
          <Select
            label="stb's_per_household"
            name="stbs_per_household"
            value={formData.stbs_per_household}
            onChange={handleChange}
          >
            <MenuItem value="One">STB One</MenuItem>
          </Select>
        </FormControl>


        
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button color="error">Hide Prompts</Button>
          <Button type="submit" color="success">
            Submit
          </Button>
        </ButtonGroup>
      </form>
      {/* <SidebarContent /> */}
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

export default Addcustomer_saz3;