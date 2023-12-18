import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
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
  InventorySharp,
  CreditCard,
  AttachMoney,
  AddCard,
  Category,
  Inventory2,
  PostAdd,
  Assignment,
  AssignmentTurnedIn,

} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

function SidebarReseller(drawerWidth) {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  // const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  

  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [isSidebarResellerOpen, setIsSidebarResellerOpen] = useState(true);

  // Define click handlers for each dropdown
  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };
  //   const handleDropdown2Click = () => {
  //     setOpenDropdown2(!openDropdown2);
  //   };
  //   const handleDropdown3Click = () => {
  //     setOpenDropdown3(!openDropdown3);
  //   }

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        open={isSidebarResellerOpen}
        anchor="left"
        variant="persistent"
        onClose={() => setIsSidebarResellerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],

            backgroundColor: theme.palette.background.alt,

            boxSizing: "border-box",
          },
        }}
      >
        <h1>
          <center>Resellers</center>
        </h1>
        <List>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <Inventory2 />
            </ListItemIcon>
            <ListItemText primary="Resellers List" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/allresellers">
                <ListItemIcon>
                  <InventorySharp />
                </ListItemIcon>
                <ListItemText primary="All Resellers" />
              </ListItem>
              <ListItem button component={Link} to="/addresellers">
                <ListItemIcon>
                  <PostAdd />
                </ListItemIcon>
                <ListItemText primary="Add Resellers" />
              </ListItem>
              <ListItem button component={Link} to="/onlineresellers">
                <ListItemIcon>
                  <PostAdd />
                </ListItemIcon>
                <ListItemText primary="Online Resellers" />
              </ListItem>
              <ListItem button component={Link} to="/resellersloginnotfication">
                <ListItemIcon>
                  <PostAdd />
                </ListItemIcon>
                <ListItemText primary="Resellers Login Notification" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/resellersactionotification"
              >
                <ListItemIcon>
                  <PostAdd />
                </ListItemIcon>
                <ListItemText primary="Resellers Actions Notification" />
              </ListItem>
              {/* <ListItem button component={Link} to="/resellersregistrationform">
                <ListItemIcon>
                  <PostAdd />
                </ListItemIcon>
                <ListItemText primary="Resellers Registration Form" />
              </ListItem> */}
            </List>
          </Collapse>
        </List>
      </Drawer>
      {isSmallScreen && (
      <IconButton
        color="inherit"
        aria-label={isSidebarResellerOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsSidebarResellerOpen(!isSidebarResellerOpen)}
        sx={{
          position: 'fixed',
          top: '5%',
          left: isSidebarResellerOpen ? drawerWidth : 0.5,
          transform: 'translateY(-50%)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        {isSidebarResellerOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      )}
    </ThemeProvider>
  );
}

export default SidebarReseller;
