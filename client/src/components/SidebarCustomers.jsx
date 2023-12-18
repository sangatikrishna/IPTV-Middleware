//DropDownBar

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
  IconButton,


  useMediaQuery,
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
  NotificationAddOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

function SidebarCustomers( drawerWidth) {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [openDropdown4, setOpenDropdown4] = useState(false);
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
          <center>Customers</center>
        </h1>
        <List>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="CUSTOMERS" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
          <ListItem button component={Link} to="/Customers/sazpinnewcustomers">
            <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
                <ListItemText primary="Sazpin New Customers" />
              </ListItem>
              <ListItem button component={Link} to="/Customers/addcustomer">
                <ListItemIcon>
                <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Add Customers" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 2 */}
       < ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="CUSTOMER_SAZ1" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Customers/Customer_Saz1">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="All Customers_Saz1" />
              </ListItem>
              <ListItem button component={Link} to="/Customers/addcustomer_saz1">
                <ListItemIcon>
                <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Customers_Saz1" />
              </ListItem>
            </List>
          </Collapse>




          {/* <ListItem button component={Link} to="/Customers/Customer_Saz2">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary=" Customer_Saz2" />
          </ListItem>
          <ListItem button component={Link} to="/Customers/Customer_Saz3">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary=" Customer_Saz3" />
          </ListItem> */}
         {/* Dropdown 3 */}
         <ListItem button onClick={handleDropdown3Click}>
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
            <ListItemText primary="CUSTOMER_SAZ2" />
            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Customers/Customer_Saz2">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="All Customer_Saz2" />
              </ListItem>
              <ListItem button component={Link} to="/Customers/addcustomer_saz2">
                <ListItemIcon>
                <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Customers_Saz2" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 4 */}
         <ListItem button onClick={handleDropdown4Click}>
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
            <ListItemText primary="CUSTOMER_SAZ3" />
            {openDropdown4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Customers/Customer_Saz3">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="All Customer_Saz3" />
              </ListItem>
              <ListItem button component={Link} to="/Customers/addcustomer_saz3">
                <ListItemIcon>
                <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Customers_Saz3" />
              </ListItem>
            </List>
          </Collapse>


          <ListItem button component={Link} to="/Customers/Notifications">
            <ListItemIcon>
              <NotificationAddOutlined />
            </ListItemIcon>
            <ListItemText primary=" Notifications" />
          </ListItem>

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

export default SidebarCustomers;





