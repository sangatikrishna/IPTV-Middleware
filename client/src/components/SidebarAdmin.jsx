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

const SidebarAdmin = (drawerWidth) => {
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
          <center>ADMINISTRATOR</center>
        </h1>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="ADMINISTRATOR" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ALLADMINISTRATOR">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="ALL ADMINISTRATOR" />
              </ListItem>
              <ListItem button component={Link} to="/ADDADMINISTRATOR">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="ADD ADMINISTRATOR" />
              </ListItem>
            </List>
          </Collapse>


              {/* Dropdown 2 */}
             <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="CUSTOMERS PLAYLIST" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button onClick={handleDropdown3Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Saz_playlist_1" />
            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Saz_playlist_1/All_Playlist">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="All Playlist" />
              </ListItem>
              <ListItem button component={Link} to="/Saz_playlist_1/Add_Playlist">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Playlist" />
              </ListItem>
            </List>
          </Collapse>
          
 
          <ListItem button onClick={handleDropdown4Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Saz_playlist_2" />
            {openDropdown4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Saz_playlist_2/All_Playlist">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="All Playlist" />
              </ListItem>
              <ListItem button component={Link} to="Saz_playlist_2/Add_Playlist">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Playlist" />
              </ListItem>
            </List>
          </Collapse>
 
 
          <ListItem button onClick={handleDropdown5Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Saz_playlist_3" />
            {openDropdown5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Saz_playlist_3/All_Playlist">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="All Playlist" />
              </ListItem>
              <ListItem button component={Link} to="/Saz_playlist_3/Add_Playlist">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Playlist" />
              </ListItem>
            </List>
          </Collapse>



          </List>
          </Collapse>
          {/* Dropdown 2 */}
          <ListItem button onClick={handleDropdown6Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Demo_saz_playlist" />
            {openDropdown6 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button onClick={handleDropdown7Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Demo_saz_playlist_1" />
            {openDropdown7 ? <ExpandLess /> : <ExpandMore />}
           </ListItem>
          <Collapse in={openDropdown7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Demo_saz_playlist_1/All_Playlist">
                <ListItemIcon>
                <ListAlt />
                </ListItemIcon>
                <ListItemText primary="All Playlist" />
              </ListItem>
              <ListItem button component={Link} to="/Demo_saz_playlist_1/Add_Playlist">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Playlist" />
              </ListItem>
            </List>
          </Collapse>
          {/* </List>
          </Collapse> */}

          <ListItem button onClick={handleDropdown8Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Demo_saz_playlist_2" />
            {openDropdown8 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown8} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Demo_saz_playlist_2/All_Playlist">
                <ListItemIcon>
                <ListAlt />
                </ListItemIcon>
                <ListItemText primary="All Playlist" />
              </ListItem>
              <ListItem button component={Link} to="/Demo_saz_playlist_2/Add_Playlist">
                <ListItemIcon>
                  {/* <ListAlt /> */}
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Playlist" />
              </ListItem>
            </List>
          </Collapse>


          <ListItem button onClick={handleDropdown9Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Demo_saz_playlist_3" />
            {openDropdown9 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown9} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Demo_saz_playlist_3/All_Playlist">
                <ListItemIcon>
                <ListAlt />
                </ListItemIcon>
                <ListItemText primary="All Playlist" />
              </ListItem>
              <ListItem button component={Link} to="/Demo_saz_playlist_3/Add_Playlist">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Playlist" />
              </ListItem>
            </List>
          </Collapse>
          </List>
          </Collapse>








        {/* </List> */}
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
};

export default SidebarAdmin;
