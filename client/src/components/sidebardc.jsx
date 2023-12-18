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
  ChevronRight,
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
  Menu as MenuIcon,
  SortByAlpha,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

const Sidebardc = ({isSidebarDcOpen,setIsSidebarDcOpen,drawerWidth}) => {
// const Sidebardc = (drawerWidth) => {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
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
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        open={isSidebarOpen}
        onClose={() => isSidebarOpen(false)}
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
          <center>DC</center>
        </h1>
        <List>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="DASHBOARDCONTENTS" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/allcontent">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="ALLCONTENT" />
              </ListItem>
              <ListItem button component={Link} to="/addcontent">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="ADDCONTENT" />
              </ListItem>
              <ListItem button component={Link} to="/ContentSortable">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="CONTENTSORTABLE" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 2 */}
          <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="DASHBOARDCATEGORY" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/allcategory">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="ALLCATEGORY" />
              </ListItem>
              <ListItem button component={Link} to="/dc/addcategory">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="ADDCATEGORY" />
              </ListItem>
              <ListItem button component={Link} to="/categorysortable">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="CATEGORYSORTABLE" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 3 */}
          <ListItem button onClick={handleDropdown3Click}>
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
            <ListItemText primary="BANNER" />
            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/allbanner">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="ALLBANNER" />
              </ListItem>
              <ListItem button component={Link} to="/addbanner">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="ADDBANNER" />
              </ListItem>
              <ListItem button component={Link} to="/bannersortable">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="BANNERSORTABLE" />
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
};

export default Sidebardc;
