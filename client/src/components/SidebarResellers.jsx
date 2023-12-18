import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ThemeProvider, useTheme,
} from '@mui/material';
import { PlaylistAddCircle, LiveTv, ListAlt, Inbox, Sort, Theaters, AddCircleSharp, AutoAwesomeMotionSharp, RadioTwoTone, FastRewind, TheatersTwoTone, MusicNote, PlaylistAdd, LibraryMusic, OndemandVideo, Layers,ChevronLeft, Menu as MenuIcon, SortByAlpha, InventorySharp, CreditCard, AttachMoney, AddCard, Category, Inventory2, PostAdd, Assignment, AssignmentTurnedIn } from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

function SidebarReseller() {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
//   const [openDropdown2, setOpenDropdown2] = useState(false);
//   const [openDropdown3, setOpenDropdown3] = useState(false);
//   const [openDropdown4, setOpenDropdown4] = useState(false);
//   const [openDropdown5, setOpenDropdown5] = useState(false);
//   const [openDropdown6, setOpenDropdown6] = useState(false);
//   const [openDropdown7, setOpenDropdown7] = useState(false);
//   const [openDropdown8, setOpenDropdown8] = useState(false);
//   const [openDropdown9, setOpenDropdown9] = useState(false);

const theme = useTheme();
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
    <Drawer anchor="left" variant="permanent" sx={{

"& .MuiDrawer-paper": {

  color: theme.palette.secondary[200],



  backgroundColor: theme.palette.background.alt,



  boxSizing: "border-box",

},

}}>

  <h1><center>Reseller</center></h1>
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

            <ListItem button component={Link} to="/Resellers/OnlineResellers">

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
            <ListItem button component={Link} to="/resellersactionotification">
              <ListItemIcon>
                <PostAdd />
              </ListItemIcon>
              <ListItemText primary="Resellers Action Notification" />
            </ListItem>
            <ListItem button component={Link} to="/resellersregistrationform">
              <ListItemIcon>
                <PostAdd />
              </ListItemIcon>
              <ListItemText primary="Resellers Registration Form" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
    </ThemeProvider>
  );
}

export default SidebarReseller;
