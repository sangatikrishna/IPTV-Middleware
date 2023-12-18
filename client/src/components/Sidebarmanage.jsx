import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  CssBaseline,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ThemeProvider,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import {
  PlaylistAddCircle,
  LiveTv,
  ListAlt,
  Inbox,
  ExpandLess,
  ExpandMore,
  StarBorder,
  Sort,
  Theaters,
  AddCircleSharp,
  AutoAwesomeMotionSharp,
  RadioTwoTone,
  FastRewind,
  TheatersTwoTone,
  MusicNote,
  PlaylistAdd,
  LibraryMusic,
  OndemandVideo,
  Layers,
  ChevronLeft,
 
  ChevronRight,
  Menu as MenuIcon,
  SortByAlpha,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

function Sidebarmanage(drawerWidth) {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [openDropdown4, setOpenDropdown4] = useState(false);
  const [openDropdown5, setOpenDropdown5] = useState(false);
  const [openDropdown6, setOpenDropdown6] = useState(false);
  const [openDropdown7, setOpenDropdown7] = useState(false);
  const [openDropdown8, setOpenDropdown8] = useState(false);
  const [openDropdown9, setOpenDropdown9] = useState(false);
  const [openDropdown10, setOpenDropdown10] = useState(false);
  const [openDropdown11, setOpenDropdown11] = useState(false);
  const [openDropdown12, setOpenDropdown12] = useState(false);
  const [openDropdown13, setOpenDropdown13] = useState(false);
  const [openDropdown14, setOpenDropdown14] = useState(false);
  const [openDropdown15, setOpenDropdown15] = useState(false);
  const [openDropdown16, setOpenDropdown16] = useState(false);
  const [openDropdown17, setOpenDropdown17] = useState(false);
  const [openDropdown18, setOpenDropdown18] = useState(false);
  const [openDropdown19, setOpenDropdown19] = useState(false);
  const [openDropdown20, setOpenDropdown20] = useState(false);
  const [openDropdown21, setOpenDropdown21] = useState(false);
  const [openDropdown22, setOpenDropdown22] = useState(false);
  const [openDropdown23, setOpenDropdown23] = useState(false);
  const [openDropdown24, setOpenDropdown24] = useState(false);
  const [openDropdown25, setOpenDropdown25] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  // Define click handlers for each dropdown
  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };
  const handleDropdown2Click = () => {
    setOpenDropdown2(!openDropdown2);
  };

  const handleDropdown3Click = () => {
    setOpenDropdown3(!openDropdown3);
  };

  const handleDropdown4Click = () => {
    setOpenDropdown4(!openDropdown4);
  };
  const handleDropdown5Click = () => {
    setOpenDropdown5(!openDropdown5);
  };
  const handleDropdown6Click = () => {
    setOpenDropdown6(!openDropdown6);
  };
  const handleDropdown7Click = () => {
    setOpenDropdown7(!openDropdown7);
  };
  const handleDropdown8Click = () => {
    setOpenDropdown8(!openDropdown8);
  };
  const handleDropdown9Click = () => {
    setOpenDropdown9(!openDropdown9);
  };
  const handleDropdown10Click = () => {
    setOpenDropdown10(!openDropdown10);
  };
  const handleDropdown11Click = () => {
    setOpenDropdown11(!openDropdown11);
  };
  const handleDropdown12Click = () => {
    setOpenDropdown12(!openDropdown12);
  };
  const handleDropdown13Click = () => {
    setOpenDropdown13(!openDropdown13);
  };

  const handleDropdown14Click = () => {
    setOpenDropdown14(!openDropdown14);
  };

  const handleDropdown15Click = () => {
    setOpenDropdown15(!openDropdown15);
  };

  const handleDropdown16Click = () => {
    setOpenDropdown16(!openDropdown16);
  };

  const handleDropdown17Click = () => {
    setOpenDropdown17(!openDropdown17);
  };

  const handleDropdown18Click = () => {
    setOpenDropdown18(!openDropdown18);
  };

  const handleDropdown19Click = () => {
    setOpenDropdown19(!openDropdown19);
  };

  const handleDropdown20Click = () => {
    setOpenDropdown20(!openDropdown20);
  };

  const handleDropdown21Click = () => {
    setOpenDropdown21(!openDropdown21);
  };

  const handleDropdown22Click = () => {
    setOpenDropdown22(!openDropdown22);
  };

  const handleDropdown23Click = () => {
    setOpenDropdown23(!openDropdown23);
  };

  const handleDropdown24Click = () => {
    setOpenDropdown24(!openDropdown24);
  };

  const handleDropdown25Click = () => {
    setOpenDropdown25(!openDropdown25);
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        anchor="left"
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
          },
        }}
      >
        <h1>
          <center>Manage</center>
        </h1>
        <List>
      

          {/* Dropdown 2 */}
          <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="SAZPIN DEVICE UPDATES" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/SazpinUpdate/Update">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/SazpinUpdate/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

         

          

        

          


          
           <ListItem button onClick={handleDropdown9Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="_DEVICE UPDATES" />
            {openDropdown9 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown9} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/_DeviceUpdates/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/_Deviceupdates/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse> 

         

         
          

          <ListItem button onClick={handleDropdown13Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MESSAGES" />
            {openDropdown13 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown13} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Message/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Allmessage" />
              </ListItem>
              <ListItem button component={Link} to="/Message/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown14Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="FRANCE MESSAGES" />
            {openDropdown14 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown14} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/France/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/France/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown15Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SHAHID MESSAGE" />
            {openDropdown15 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown15} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Shahid/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/Shahid/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown16Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MULTIUSER MESSAGE" />
            {openDropdown16 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown16} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Multi/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="All Message" />
              </ListItem>
              <ListItem button component={Link} to="/Multi/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          

          
          


          

          

          <ListItem button onClick={handleDropdown23Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="LIVE MESSAGE" />
            {openDropdown23 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown23} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/LiveMessage/AppMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AppMessage" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown24Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SHAHIDNEW MESSAGE" />
            {openDropdown24 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown24} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ShahidNew/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/ShahidNew/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown25Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="INVENTORY" />
            {openDropdown25 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown25} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Inventory/All">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="All" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>

      {isSmallScreen && (
      <IconButton
        color="inherit"
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        sx={{
          position: 'fixed',
          top: '2%',
          left: isSidebarOpen ? drawerWidth : 0.5,
          transform: 'translateY(-50%)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      )}


    </ThemeProvider>
  );
}

export default Sidebarmanage;
