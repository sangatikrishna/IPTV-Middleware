// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// // import Joi from "joi"; 
// import {
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Box,
//   Radio,
//   FormControlLabel,
//   Checkbox,
//   ButtonGroup,
//   RadioGroup,
//   Snackbar,
//   Alert,
//   useMediaQuery,
// } from "@mui/material";
// import Header from "components/Header";
// import FlexBetween from "components/FlexBetween";


// const Addreseller = () => {
//   const [value, setValue] = useState();
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   const { _id } = useParams();

//   // const [validationError, setValidationError] = useState(null);
//   // const validationSchema = Joi.object({
//     // id: Joi.string().regex(/^[0-9]+$/, "id").required(),
//     // id: Joi.string().empty(''),
//     // nick: Joi.string().empty(''),
//     // createdby: Joi.string().empty(''),
//     // billing_id: Joi.string().allow(null).allow(''),
//     // device_id: Joi.string().allow(null).allow(''),
//     // is_multiple_session: Joi.string().empty(''),
//     // is_loggedin: Joi.string().empty(''),
//     // status: Joi.string().empty(''),
//     // group_id: Joi.string().empty(''),
//     // created: Joi.string().empty(''),
//     // modified: Joi.string().empty(''),
//     // payment_settings_id: Joi.string().allow(null).allow(''),
//     // category_password: Joi.string().allow(null).allow(''),
//     // number_of_login: Joi.string().allow(null).allow(''),
//     // is_deleted: Joi.string().empty(''),
//     // is_trail: Joi.string().empty(''),
//     // is_paid: Joi.string().empty(''),
//     // is_cdn: Joi.string().empty(''),
//     // reseller_module_type: Joi.string().allow(null).allow(''),
//     // reseller_box_price: Joi.string().empty(''),
//     // profile_image: Joi.string().allow(null).allow(''),
//     // session_id: Joi.string().empty(''),
//     // renewal_date: Joi.string().allow(null).allow(''),
//     // UserName: Joi.string().empty(''),
//     // password: Joi.string().empty(''),

    

    
//     // name: Joi.string().empty('').min(3).max(30).default('default value').label('Billing Type Name'),
//     // mail: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required().label("Email address"),
//     // enddate: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required().label("endof membership date"),
//     // user_limit: Joi.string().regex(/^[0-9]+$/).min(3).max(30).required().label("Customer Limit"),
//     // name: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label("First Name"),
//     // surname: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label("Last Name"),
//     // mail: Joi.string().email().label('mail'),
//     // title: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label('Title'),
//     // name: Joi.string().empty('').label('Billing Type Name'),
//     // is_protected: Joi.string().label('password protected'),
//   // });
//   // const [checked, setChecked] = useState(false);
//   // const [checked1, setChecked1] = useState(false);
//   // const [checked2, setChecked2] = useState(false);
//   // const [checked3, setChecked3] = useState(false);
//   const [formData, setFormData] = useState({
//         id: "",
//         name: "",
//         surname:"",
//         nick:"",
//         mail:'',
//         password:"",
//         enddate:"",
//         createdby:"",
//         billing_id:"",
//         device_id:"",
//         is_multiple_session:"",
//         is_loggedin:"",
//         status:"",
//         group_id:"",
//         created:"",
//         modified:"",
//         payment_settings_id:"",
//         category_password:"",
//         user_limit:"",
//         number_of_login:"",
//         is_deleted:"",
//         is_trail:"",
//         is_paid:"",
//         is_cdn:"",
//         reseller_module_type:"",
//         reseller_box_price:"",
//         profile_image:"",
//         session_id:"",
//         renewal_date:"",
//   });

//   const handleReset = () => {
//     setFormData({
//       id: "",
//       name: "",
//       surname:"",
//       nick:"",
//       mail:'',
//       password:"",
//       enddate:"",
//       createdby:"",
//       billing_id:"",
//       device_id:"",
//       is_multiple_session:"",
//       is_loggedin:"",
//       status:"",
//       group_id:"",
//       created:"",
//       modified:"",
//       payment_settings_id:"",
//       category_password:"",
//       user_limit:"",
//       number_of_login:"",
//       is_deleted:"",
//       is_trail:"",
//       is_paid:"",
//       is_cdn:"",
//       reseller_module_type:"",
//       reseller_box_price:"",
//       profile_image:"",
//       session_id:"",
//       renewal_date:""
//     });
//   };
// const [successMessage, setSuccessMessage] = useState("");
// const [snackbarOpen, setSnackbarOpen] = useState(false);
// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
// const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };
//   const [resellers, setResellers] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5001/api/resellers/find")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setResellers(res.data);
//       });
//   }, []);

//   useEffect(() => {
//     if (_id) {
//       axios
//         .get(`http://localhost:5001/api/resellers/${_id}`)
//         .then((response) => {
//           const productData = response.data;
//           setFormData({
//             name: productData.name,
//             surname: productData.surname,
//             nick: productData.nick,
//             mail: productData.mail,
//             password: productData.password,
//             enddate: productData.enddate,
//             createdby: productData.createdby,
//             billing_id: productData.billing_id,
//             device_id: productData.device_id,
//             is_multiple_session: productData.is_multiple_session,
//             is_loggedin: productData.is_loggedin,
//             status: productData.status,
//             group_id: productData.group_id,
//             created: productData.created,
//             modified: productData.modified,
//             payment_settings_id: productData.payment_settings_id,
//             category_password: productData.category_password,
//             user_limit: productData.user_limit,
//             number_of_login: productData.number_of_login,
//             is_deleted: productData.is_deleted,
//             is_trail: productData.is_trail,
//             is_paid: productData.is_paid,
//             is_cdn: productData.is_cdn,
//             reseller_module_type: productData.reseller_module_type,
//             reseller_box_price: productData.reseller_box_price,
//             profile_image: productData.profile_image,
//             session_id: productData.session_id,
//             renewal_date: productData.renewal_date,

//           });
//         })
//         .catch((error) => {
//           console.error('Error fetching product data:', error);
//         });
//     }
//   }, [_id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const validationResult = validationSchema.validate(formData, {
//     //   abortEarly: false,
//     // });
 
//     // if (validationResult.error) {
//     //   setValidationError(validationResult.error.details);
//     //   return;
//     // }
 
//     // setValidationError(null);

//   if (_id) {
//     // If _id is defined, it's an edit operation
//     const apiUrl = `http://localhost:5001/api/resellers/patch/${_id}`; // Edit
//     axios
//       .patch(apiUrl, formData) // Use axios.patch for the PATCH request
//       .then((response) => {
//         setSuccessMessage("Product updated successfully!");
//         setSnackbarOpen(true);
//         handleReset();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   } else {
//     // If _id is not defined, it's an add operation
//     const apiUrl = "http://localhost:5001/api/resellers/post"; // Add
//     axios
//       .post(apiUrl, formData) // Use axios.post for the POST request
//       .then((response) => {
//         setSuccessMessage("Product added successfully!");
//         setSnackbarOpen(true);
//         handleReset();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }
// };


//   return (
//     <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
//       <FlexBetween>
//         <Header title="Reseller Registration Form" />

//         <Box></Box>
//       </FlexBetween>
//       <h4>LOGIN DETAILS</h4>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="UserName"
//           label="User Name"
//           variant="outlined"
//           margin="normal"
//           value={formData.UserName}
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//         name="password"
//           label="Password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//         <FormControl fullWidth variant="outlined" margin="normal">
//           <InputLabel>Reseller Module</InputLabel>
//           <Select label="Reseller Module">
//             <MenuItem value="choose">(Choose Module)</MenuItem>
//             <MenuItem value="humax">Humax</MenuItem>
//             <MenuItem value="france">France</MenuItem>
//             <MenuItem value="Shahid">Shahid</MenuItem>
//             <MenuItem value="Shahidm5">Shahid M5</MenuItem>
//             <MenuItem value="Shahidnew">Shahid New</MenuItem>
//             <MenuItem value="zoomtak">Zoomtak</MenuItem>
//             <MenuItem value="masaplus">MasaPlus</MenuItem>
//             <MenuItem value="masanew">Masa New</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//         fullWidth
//         name="enddate"
//         label="End of Membership Date"
//         variant="outlined"
//         value={formData.enddate}
//         onChange={handleChange}
//         margin="normal"
//         InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//         fullWidth
//         name="user_limit"
//         label="Customer Limit"
//         variant="outlined"
//         value={formData.user_limit}
//         onChange={handleChange}
//         margin="normal"
//         />
//         <h4>PERSONAL DETAILS</h4>
//         <TextField
//         fullWidth
//         name="name"
//         label="First Name"
//         variant="outlined"
//         value={formData.name}
//         onChange={handleChange}
//         margin="normal"
//         />
//         <TextField
//         fullWidth
//         name="surname"
//         label="Last Name"
//         variant="outlined"
//         value={formData.surname}
//         onChange={handleChange}
//         margin="normal"
//         />
//         <TextField
//         fullWidth
//         name="mail"
//         label="Email Address"
//         variant="outlined"
//         value={formData.mail}
//         onChange={handleChange}
//         margin="normal"
//         />
//         <TextField
//           label="Address1"
//           variant="outlined"
//           margin="normal"
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField
//           label="Address2"
//           variant="outlined"
//           margin="normal"
//           onChange={handleChange}
//           fullWidth
//         />
//         <TextField 
//           label="City" 
//           variant="outlined" 
//           margin="normal" 
//           onChange={handleChange}
//           fullWidth
//         />

//         <TextField
//           label="Postal/Zip Code"
//           variant="outlined"
//           margin="normal"
//           onChange={handleChange}
//           fullWidth
//         />
//                 <FormControl fullWidth variant="outlined" margin="normal">
//           <InputLabel>Country</InputLabel>
//           <Select label="country">
//             <MenuItem value="choose">(Choose Module)</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           label="Phone(Work)"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//         <TextField
//           label="Phone(Home)"
//           variant="outlined"
//           margin="normal"
//           fullWidth
//         />
//         <h4>PAYMENT SETTINGS</h4>
//         <FormControl>
//   <RadioGroup
//     aria-labelledby="demo-controlled-radio-buttons-group"
//     name="controlled-radio-buttons-group"
//     value={value}
//     onChange={handleChange}
//   >
//     <FormControlLabel value="monthly" control={<Radio />} label="Monthly 10 Fixed" />
//     <FormControlLabel value="quarterly" control={<Radio />} label="Quarterly 30 Fixed" />
//     <FormControlLabel value="halfyearly" control={<Radio />} label="Half Yearly 50 Fixed" />
//     <FormControlLabel value="yearly" control={<Radio />} label="Yearly 50 Fixed" />
//   </RadioGroup>
// </FormControl>
//         <br></br><br></br>
//         {/* {validationError && (
//           <div style={{ color: 'red' }}>
//             {validationError.map((error) => (
//               <div>{error.message}</div>
//             ))}
//             </div>
//       )} */}
//         <ButtonGroup style={{float: 'right'}} variant="contained" aria-label="outlined button group">
//           <Button>Hide Prompts</Button>
//           <Button type= "submit" color="success">Register</Button>
//         </ButtonGroup>
//       </form>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000} // Adjust the duration as needed
//         onClose={handleCloseSnackbar}

//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity="success"
//           variant="filled"
//         >
//           {successMessage}
//         </Alert>
//       </Snackbar>


//     </Box>
//   );
// };

// export default Addreseller;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Radio,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
  RadioGroup,
  Snackbar,
  Alert,
} from "@mui/material";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
const Addreseller = () => {
  const [value, setValue] = useState();
  const { _id } = useParams();
  // const [checked, setChecked] = useState(false);
  // const [checked1, setChecked1] = useState(false);
  // const [checked2, setChecked2] = useState(false);
  // const [checked3, setChecked3] = useState(false);
  const [formData, setFormData] = useState({
        id: "",
        name: "",
        surname:"",
        nick:"",
        mail:'',
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
        reseller_module_type:"",
        reseller_box_price:"",
        profile_image:"",
        session_id:"",
        renewal_date:""
  });
 
  const handleReset = () => {
    setFormData({
      id: "",
      name: "",
      surname:"",
      nick:"",
      mail:'',
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
      reseller_module_type:"",
      reseller_box_price:"",
      profile_image:"",
      session_id:"",
      renewal_date:""
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
  const [resellers, setResellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/resellers/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setResellers(res.data);
      });
  }, []);
 
  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:5001/api/resellers/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            name: productData.name,
            surname: productData.surname,
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
            group_id: productData.group_id,
            created: productData.created,
            modified: productData.modified,
            payment_settings_id: productData.payment_settings_id,
            category_password: productData.category_password,
            user_limit: productData.user_limit,
            number_of_login: productData.number_of_login,
            is_deleted: productData.is_deleted,
            is_trail: productData.is_trail,
            is_paid: productData.is_paid,
            is_cdn: productData.is_cdn,
            reseller_module_type: productData.reseller_module_type,
            reseller_box_price: productData.reseller_box_price,
            profile_image: productData.profile_image,
            session_id: productData.session_id,
            renewal_date: productData.renewal_date,
 
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
    const apiUrl = `http://localhost:5001/api/resellers/patch/${_id}`; // Edit
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
    const apiUrl = "http://localhost:5001/api/resellers/post"; // Add
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
 
 
  return (
    <Box m="1.5rem 2.5rem" ml="300px">
      <FlexBetween>
        <Header title="Reseller Registration Form" />
 
        <Box></Box>
      </FlexBetween>
      <h4>LOGIN DETAILS</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          name="UserName"
          label="User Name"
          variant="outlined"
          margin="normal"
          value={formData.UserName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
        name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Reseller Module</InputLabel>
          <Select label="Reseller Module">
            <MenuItem value="choose">(Choose Module)</MenuItem>
            <MenuItem value="humax">Humax</MenuItem>
            <MenuItem value="france">France</MenuItem>
            <MenuItem value="Shahid">Shahid</MenuItem>
            <MenuItem value="Shahidm5">Shahid M5</MenuItem>
            <MenuItem value="Shahidnew">Shahid New</MenuItem>
            <MenuItem value="zoomtak">Zoomtak</MenuItem>
            <MenuItem value="masaplus">MasaPlus</MenuItem>
            <MenuItem value="masanew">Masa New</MenuItem>
          </Select>
        </FormControl>
        <TextField
        fullWidth
        name="enddate"
        label="End of Membership Date"
        variant="outlined"
        value={formData.enddate}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        />
        <TextField
        fullWidth
        name="user_limit"
        label="Customer Limit"
        variant="outlined"
        value={formData.user_limit}
        onChange={handleChange}
        margin="normal"
        />
        <h4>PERSONAL DETAILS</h4>
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
          label="Address1"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address2"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="City"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          fullWidth
        />
 
        <TextField
          label="Postal/Zip Code"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          fullWidth
        />
                <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Country</InputLabel>
          <Select label="country">
            <MenuItem value="choose">(Choose Module)</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Phone(Work)"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone(Home)"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <h4>PAYMENT SETTINGS</h4>
        <FormControl>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="monthly" control={<Radio />} label="Monthly 10 Fixed" />
    <FormControlLabel value="quarterly" control={<Radio />} label="Quarterly 30 Fixed" />
    <FormControlLabel value="halfyearly" control={<Radio />} label="Half Yearly 50 Fixed" />
    <FormControlLabel value="yearly" control={<Radio />} label="Yearly 50 Fixed" />
  </RadioGroup>
</FormControl>
        <br></br><br></br>
        <ButtonGroup style={{float: 'right'}} variant="contained" aria-label="outlined button group">
          <Button>Hide Prompts</Button>
          <Button type= "submit" color="success">Register</Button>
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
 
export default Addreseller;
 