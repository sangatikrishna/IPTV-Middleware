

import React, { useState } from "react";

import { Link } from "react-router-dom";

import {

  Drawer,
  Box,
  Typography,
  IconButton,
  List,

  ListItem,

  ListItemIcon,

  ListItemText,

  Collapse,

  ThemeProvider,

  useTheme,
  useMediaQuery
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
 
function SidebarMonetize({ isNonMobile, drawerWidth }) {
  const [openDropdown1, setOpenDropdown1] = useState(false);

  const [openDropdown2, setOpenDropdown2] = useState(false);

  const [openDropdown3, setOpenDropdown3] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMonetizeOpen, setIsSidebarMonetizeOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const theme = useTheme();
 
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
      // open={isSidebarOpen}
      // onClose={() => setIsSidebarOpen(false)}
        anchor="left"
        variant={isNonMobile ? "temporary" : "persistent"}
        open={isSidebarMonetizeOpen}
        onClose={() => setIsSidebarMonetizeOpen(false)}
        sx={{

          "& .MuiDrawer-paper": {

            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
          },

        }}

      >
        <Box width={isNonMobile ? "100%" : 240}>
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="h2" fontWeight="bold">
                  Monetize
                </Typography>
              </Box>
              {/* {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarMonetizeOpen(!isSidebarMonetizeOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )} */}
            </FlexBetween>
          </Box>
        </Box>
        <List>
          <ListItem button onClick={handleDropdown1Click}>

            <ListItemIcon>

              <Inventory2 />

            </ListItemIcon>

            <ListItemText primary="Box Packages" />

            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}

          </ListItem>

          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>

              <ListItem button component={Link} to="/allpackages">

                <ListItemIcon>

                  <InventorySharp />

                </ListItemIcon>

                <ListItemText primary="All Packages" />

              </ListItem>

              <ListItem button component={Link} to="/addpackages">

                <ListItemIcon>

                  <PostAdd />

                </ListItemIcon>

                <ListItemText primary="Add Packages" />

              </ListItem>

            </List>

          </Collapse>
 
          <ListItem button onClick={handleDropdown2Click}>

            <ListItemIcon>

              <AttachMoney />

            </ListItemIcon>

            <ListItemText primary="Billing" />

            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}

          </ListItem>

          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>

              <ListItem button component={Link} to="/billingtypes">

                <ListItemIcon>

                  <CreditCard />

                </ListItemIcon>

                <ListItemText primary="Billing Types" />

              </ListItem>

              <ListItem button component={Link} to="/addbillingtype">

                <ListItemIcon>

                  <AddCard />

                </ListItemIcon>

                <ListItemText primary="Add Billing Type" />

              </ListItem>

            </List>

          </Collapse>
 
          <ListItem button onClick={handleDropdown3Click}>

            <ListItemIcon>

              <Category />

            </ListItemIcon>

            <ListItemText primary="Products" />

            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}

          </ListItem>

          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>

              <ListItem button component={Link} to="/allproducts">

                <ListItemIcon>

                  <Inventory2 />

                </ListItemIcon>

                <ListItemText primary="All products" />

              </ListItem>

              <ListItem button component={Link} to="/addproducts">

                <ListItemIcon>

                  <PostAdd />

                </ListItemIcon>

                <ListItemText primary="Add Products" />

              </ListItem>
              <ListItem button component={Link} to="/assignproducts">

                <ListItemIcon>

                  <Assignment />

                </ListItemIcon>

                <ListItemText primary="Assign Products" />

              </ListItem>

              <ListItem button component={Link} to="/assignedproducts">

                <ListItemIcon>

                  <AssignmentTurnedIn />

                </ListItemIcon>

                <ListItemText primary="Assigned Products" />

              </ListItem>
            </List>

          </Collapse>

        </List>

      </Drawer>
{isSmallScreen && (
      <IconButton
        color="inherit"
        aria-label={isSidebarMonetizeOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsSidebarMonetizeOpen(!isSidebarMonetizeOpen)}
        sx={{
          position: 'fixed',
          top: '5%',
          left: isSidebarMonetizeOpen ? drawerWidth : 0.5,
          transform: 'translateY(-50%)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        {isSidebarMonetizeOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      )}
    </ThemeProvider>

  );

}
 
export default SidebarMonetize;
 