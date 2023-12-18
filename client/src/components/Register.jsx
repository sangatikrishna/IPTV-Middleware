import React, { useState } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    let updatedData = { ...userData };

    updatedData[name] = value;
    setUserData(updatedData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmpassword) {
      alert("Registered Successfully!!");
    } else {
      alert("Passwords must match");
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <form onSubmit={handleSubmit}>
        <Container maxWidth="sm" marginTop="10px" border="4px solid black">
          <Box
            sx={{
              width: 500,
              height: 500,
              backgroundColor: "lightslategrey",

              // '&:hover': {
              //   backgroundColor: 'primary.light',
              //   opacity: [0.7, 0.8, 0.7],
              //   color:"white"
              // },
              p: 5,
              border: "1px grey",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h2"
              color="white"
              sx={{ textAlign: "center" }}
              gutterBottom
            >
              Register
            </Typography>

            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue=""
              fullWidth
              color="primary"
              sx={{ margin: 1 }}
              name="name"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              type="email"
              fullWidth
              color="primary"
              sx={{ margin: 1 }}
              name="email"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
              type="password"
              fullWidth
              color="primary"
              name="password"
              sx={{ margin: 1 }}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              defaultValue=""
              type="password"
              fullWidth
              color="primary"
              name="confirmpassword"
              sx={{ margin: 1 }}
              onChange={handleChange}
            />
            <Box sx={{ textAlign: "left", margin: 1 }}>
              <Checkbox {...label} />
              <Typography variant="caption" color="white" gutterBottom>
                Accept Terms and conditions
              </Typography>
            </Box>
            <Button
              variant="contained"
              type="submit"
              sx={{ margin: 1 }}
              fullWidth
            >
              Register
            </Button>
          </Box>
        </Container>
      </form>
    </React.Fragment>
  );
};

export default Register;
