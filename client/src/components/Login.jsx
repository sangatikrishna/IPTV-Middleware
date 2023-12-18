import React, { useRef, useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useTheme } from "@emotion/react";
import image_saz from "../assets/image_saz.png";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
 
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const theme = useTheme();
  const navigate = useNavigate();
 
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const [formData, updateFormData] = React.useState();

    const handleChange = (e) => {
      updateFormData({
        ...formData,
 
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim(),
        // [e.target.password]: e.target.value.trim()
      });
    };

//     const handleSubmit1=async()=>
// {
//   console.log("name,email,password,confirmpassword",formData.name,formData.email,formData.password,formData.confirmPassword)
//   const email=formData.email;
//   const password=formData.password
//   const confirmPassword=formData.confirmPassword;

//   const name=formData.name;

//   let result=await fetch("http://localhost:5001/api/userinfos/post",{
//     method:"POST",
//     body:JSON.stringify({name,email,password,confirmPassword}),

//     headers:
//     {
//       "Content-Type":"application/json"
//     }
//   });
//   result=await result.json();
//   console.log(result);
//   if(result)
//   {
//     localStorage.setItem("user",JSON.stringify(result))
//     navigate("/dashboard");
//   }


// }
const handleSubmit=async()=>
{

  console.log("email,password,confirmPassword,name",formData.email,formData.password,formData.name,formData.confirmPassword)
  const email=formData.email;
  const password=formData.password;
  const confirmPassword=formData.confirmPassword;

  const name=formData.name;
  if(!isSignInForm)
  {
  let result=await fetch("http://localhost:5001/api/userinfos/post",{
    method:"POST",
    body:JSON.stringify({email,password,name,confirmPassword}),

    headers:
    {
      "Content-Type":"application/json"
    }
  });
  result=await result.json();
  console.log(result);
  if(result)
  {
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/dashboard");
  }
}

else
{
  let result=await fetch("http://localhost:5001/api/user/login",{
    method:"POST",
    body:JSON.stringify({email,password}),
 
    headers:
    {
      "Content-Type":"application/json"
    }
  });
  result=await result.json();
  console.log(result);
  if(result)
  {
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/dashboard");
  }
 
 
}
}


// const[user,setUser]=useState(null);
// const[email,setEmail]=useState("")
// const[password,setPassword]=useState("")

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <Typography variant="h4" fontWeight="bold" color={theme.palette.secondary.main}>
                    SAZPIN IPTV
                  </Typography>
        <Typography component="h1" variant="h5" mt={"50px"}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </Typography>
        {!isSignInForm && (
          <TextField
            required
            fullWidth
            margin="normal"
            label="Full Name"
            type="text"
            name="name"
            onChange={handleChange}
          />
        )}
        <TextField
          required
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        {!isSignInForm && (
          <Box sx={{ textAlign: "left", marginY: 1 }}>
            <Checkbox {...label} />
            <Typography variant="caption" gutterBottom>
              Accept Terms and conditions
            </Typography>
          </Box>
        )}
        {errorMessage && (
          <Alert severity="error" sx={{ width: "100%", marginBottom: 2 }}>
            {errorMessage}
          </Alert>
        )}
        <Button
          variant="contained"
          onClick={handleSubmit}
          fullWidth
          sx={{ marginTop: 2 }}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </Button>
        <Typography
          variant="body2"
          onClick={toggleSignInForm}
          color="primary"
          sx={{ textAlign: "center", cursor: "pointer", marginTop: 2 }}
        >
          {isSignInForm
            ? "Don't have an account? Sign Up now!"
            : "Already registered? Sign In now!"}
        </Typography>
      </Box>
    </Container>
  );
};


export default Login;
