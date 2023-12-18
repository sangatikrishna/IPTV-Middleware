import React, { useContext, useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowCircleDownOutlined,
  ChevronRight,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "state";
import image_saz from "assets/image_saz.png";
import {
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material";
import UserContext from "utils/UserContext";
import { auth } from "utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removerUser } from "utils/userSlice";
 
const Navbar = ({ sidebarText, isSidebarOpen,
   setIsSidebarOpen ,
    isSidebarMonetizeOpen ,
     setIsSidebarMonetizeOpen,
     isSidebarContentOpen,
     setIsSidebarContentOpen,
    
    }) => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const theme = useTheme();
  // const user = useSelector((store) => store.user);
  //login User Info in UserContext
  const { loggedInUser } = useContext(UserContext);
 
  // const[email,setEmail]=useState("")
  // const[password,setPassword]=useState[""]
  // useEffect(()=>
  // {
 
  //   fetch ("http://localhost:5001/api/user/login",{email,password}).then(res=>res.json()).then(res=>{
  //     console.log(res)
  //     setUser(res)
  //   })
 
  // })
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
 
  //       // https://firebase.google.com/docs/reference/js/auth.user
 
  //       const { uid, displayName, email } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //     } else {
  //       // User is signed out
 
  //       dispatch(removerUser());
  //     }
  //   });
  // }, []);
 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleIconClick = () => {
    navigate("/dashboard");
  };
  const handleChevronRight = () => {
    // setIsSidebarOpen(!isSidebarOpen);
    // setIsSidebarContentOpen(!isSidebarContentOpen);
    if(sidebarText=="dashboard")
    {
      setIsSidebarOpen(!isSidebarOpen);
    }  
    else if(sidebarText=="monetize")
    {
      setIsSidebarMonetizeOpen(!isSidebarMonetizeOpen);
    }
    else if(sidebarText=="content")
    {
      setIsSidebarContentOpen(!isSidebarContentOpen);
    }
   }
 
  return (
    <AppBar
      sx={{
        postion: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side */}
        {/* <FlexBetween> */}
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            // p="0.1rem 1.5rem"
          >
            </FlexBetween>
            {/* <InputBase placeholder="Search..."></InputBase>
   <IconButton>
    <Search/>
 
    </IconButton> */}
        {/* </FlexBetween> */}
        {/* RIGHT SIDE */}
 
        <FlexBetween gap="1.5rem">
          {/* <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton> */}
          <IconButton onClick={handleIconClick}>
            <MenuIcon />
          </IconButton>
          {/* //on click  dispach action */}
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
 
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
         {/* <li> {user.name}</li> */}
 
           <IconButton onClick={handleSignOut}>Sign Out</IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
 
