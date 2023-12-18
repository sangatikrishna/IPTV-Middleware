
 
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
  Menu as MenuIcon,
  SortByAlpha,
  ChevronRight,
} from "@mui/icons-material";
 
import FlexBetween from "./FlexBetween";
 
const SidebarContent = ({
   
  isNonMobile,
  // isSidebarContentOpen,
  // setIsSidebarContentOpen,
 
}) => {
// function Sidebar(drawerWidth) {
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
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isNonMobile);
 

  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);
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
        open={isSidebarContentOpen}
        onClose={() => setIsSidebarContentOpen(false)}
        anchor="left"
        variant={isNonMobile ? "temporary" : "persistent"}
        sx={{
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
 
            backgroundColor: theme.palette.background.alt,
 
            boxSizing: "border-box",
          },
        }}
      >
        {/*
            <a href="/dashboard">
 
<img src="/logo.png" alt="Custom Icon" />
 
</a> */}
        {/* <h1>
          <center>Content</center>
        </h1> */}
        <Box width={isNonMobile ? "100%" : 240}>
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="h4" fontWeight="bold">
                  Content
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
          </Box>
 
        <List>
          {/* Dropdown 1 */}
 
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
 
            <ListItemText primary="LIVETV" />
 
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Addchannel">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
 
                <ListItemText primary="ADD CHANNEL" />
              </ListItem>
 
              <ListItem button component={Link} to="/ListChannel">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
 
                <ListItemText primary="LIST CHANNEL" />
              </ListItem>
 
              <ListItem button component={Link} to="/SortableChannel">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
 
                <ListItemText primary="SORTABLE CHANNEL" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 2 */}
 
          <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
 
            <ListItemText primary="Movies" />
 
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddMovie">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
 
                <ListItemText primary="Add Movie" />
              </ListItem>
 
              <ListItem button component={Link} to="/MovieList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
 
                <ListItemText primary="Movie List" />
              </ListItem>
 
              <ListItem button component={Link} to="/Dropdown2Option2">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
 
                <ListItemText primary="Movie Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 3 */}
 
          <ListItem button onClick={handleDropdown3Click}>
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
 
            <ListItemText primary="Series" />
 
            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddSeriesEpisodes">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
 
                <ListItemText primary="Add Series Episodes" />
              </ListItem>
 
              <ListItem button component={Link} to="/SeriesEpisodesList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
 
                <ListItemText primary="Series Episodes List" />
              </ListItem>
 
              <ListItem
                button
                component={Link}
                to="/SeriesEpisodesSortableList"
              >
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
 
                <ListItemText primary="Series Episodes Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          <ListItem button onClick={handleDropdown4Click}>
            <ListItemIcon>
              <RadioTwoTone />
            </ListItemIcon>
 
            <ListItemText primary="Radios" />
 
            {openDropdown4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Addradio">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
 
                <ListItemText primary="Add Radio" />
              </ListItem>
 
              <ListItem button component={Link} to="/RadioList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
 
                <ListItemText primary="Radio List" />
              </ListItem>
 
              <ListItem button component={Link} to="/radioSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
 
                <ListItemText primary="Radio Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          <ListItem button onClick={handleDropdown5Click}>
            <ListItemIcon>
              <FastRewind />
            </ListItemIcon>
 
            <ListItemText primary="Timeshift Tv" />
 
            {openDropdown5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddtimeshiftChannel">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
 
                <ListItemText primary="Add Time Shift Tv Channel" />
              </ListItem>
 
              <ListItem button component={Link} to="/timeshiftChannelList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
 
                <ListItemText primary="Timeshift Tv Channel list" />
              </ListItem>
 
              <ListItem button component={Link} to="/TimeshiftChannelSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
 
                <ListItemText primary="Timeshift Tv Channels Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          <ListItem button onClick={handleDropdown6Click}>
            <ListItemIcon>
              <TheatersTwoTone />
            </ListItemIcon>
 
            <ListItemText primary="Show Episodes" />
 
            {openDropdown6 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddShowEpisodes">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
 
                <ListItemText primary="Add Show Episodes" />
              </ListItem>
 
              <ListItem button component={Link} to="/ShowsEpisodeList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
 
                <ListItemText primary="Shows Episode List" />
              </ListItem>
 
              <ListItem button component={Link} to="/ShowsEpisodeSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
 
                <ListItemText primary="Shows Episode Sortable list" />
              </ListItem>
            </List>
          </Collapse>
 
          <ListItem button onClick={handleDropdown7Click}>
            <ListItemIcon>
              <MusicNote />
            </ListItemIcon>
 
            <ListItemText primary="Songs" />
 
            {openDropdown7 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddSongs">
                <ListItemIcon>
                  <PlaylistAdd />
                </ListItemIcon>
 
                <ListItemText primary="Add Songs" />
              </ListItem>
 
              <ListItem button component={Link} to="/SongsList">
                <ListItemIcon>
                  <LibraryMusic />
                </ListItemIcon>
 
                <ListItemText primary="Songs List" />
              </ListItem>
 
              <ListItem button component={Link} to="/SongsSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
 
                <ListItemText primary="Songs Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          <ListItem button component={Link} to="/AllCategories/MoviesCategory">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
 
            <ListItemText primary="All Categories" />
          </ListItem>
 
          <ListItem button onClick={handleDropdown9Click}>
            <ListItemIcon>
              <OndemandVideo />
            </ListItemIcon>
 
            <ListItemText primary="CatchUp Tv" />
 
            {openDropdown9 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
 
          <Collapse in={openDropdown9} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/CatchupList">
                <ListItemIcon>
                  <SortByAlpha />
                </ListItemIcon>
 
                <ListItemText primary="All Channels" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
 
      <Drawer
        open={isSidebarContentOpen}
        onClose={() => setIsSidebarContentOpen(false)}
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
        {/* <h1>
          <center>Content</center>
        </h1> */}
        <Box width={isNonMobile ? "100%" : 240}>
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween color={theme.palette.secondary.main}>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="h4" fontWeight="bold">
                  Content
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
          </Box>
        <List>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="Movies" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddMovie">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Movie" />
              </ListItem>
              <ListItem button component={Link} to="/MovieList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Movie List" />
              </ListItem>
              <ListItem button component={Link} to="/Dropdown2Option2">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="Movie Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 2 */}
          <ListItem button onClick={handleDropdown3Click}>
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
            <ListItemText primary="Series" />
            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddSeriesEpisodes">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Series Episodes" />
              </ListItem>
              <ListItem button component={Link} to="/SeriesEpisodesList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Series Episodes List" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/SeriesEpisodesSortableList"
              >
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="Series Episodes Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 3 */}
          <ListItem button onClick={handleDropdown4Click}>
            <ListItemIcon>
              <RadioTwoTone />
            </ListItemIcon>
            <ListItemText primary="Radios" />
            {openDropdown4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Addradio">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Radio" />
              </ListItem>
              <ListItem button component={Link} to="/RadioList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Radio List" />
              </ListItem>
              <ListItem button component={Link} to="/radioSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="Radio Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 4 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="LIVETV" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Addchannel">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="ADD CHANNEL" />
              </ListItem>
              <ListItem button component={Link} to="/ListChannel">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="LIST CHANNEL" />
              </ListItem>
              <ListItem button component={Link} to="/SortableChannel">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="SORTABLE CHANNEL" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 5 */}
          <ListItem button onClick={handleDropdown5Click}>
            <ListItemIcon>
              <FastRewind />
            </ListItemIcon>
            <ListItemText primary="Timeshift Tv" />
            {openDropdown5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddtimeshiftChannel">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Time Shift Tv Channel" />
              </ListItem>
              <ListItem button component={Link} to="/timeshiftChannelList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Timeshift Tv Channel list" />
              </ListItem>
              <ListItem button component={Link} to="/TimeshiftChannelSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="Timeshift Tv Channels Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 6 */}
          <ListItem button onClick={handleDropdown6Click}>
            <ListItemIcon>
              <TheatersTwoTone />
            </ListItemIcon>
            <ListItemText primary="Show Episodes" />
            {openDropdown6 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddShowEpisodes">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Add Show Episodes" />
              </ListItem>
              <ListItem button component={Link} to="/ShowsEpisodeList">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Shows Episode List" />
              </ListItem>
              <ListItem button component={Link} to="/ShowsEpisodeSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="Shows Episode Sortable list" />
              </ListItem>
            </List>
          </Collapse>
 
          {/* Dropdown 7 */}
          <ListItem button onClick={handleDropdown7Click}>
            <ListItemIcon>
              <MusicNote />
            </ListItemIcon>
            <ListItemText primary="Songs" />
            {openDropdown7 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AddSongs">
                <ListItemIcon>
                  <PlaylistAdd />
                </ListItemIcon>
                <ListItemText primary="Add Songs" />
              </ListItem>
              <ListItem button component={Link} to="/SongsList">
                <ListItemIcon>
                  <LibraryMusic />
                </ListItemIcon>
                <ListItemText primary="Songs List" />
              </ListItem>
              <ListItem button component={Link} to="/SongsSort">
                <ListItemIcon>
                  <Sort />
                </ListItemIcon>
                <ListItemText primary="Songs Sortable List" />
              </ListItem>
            </List>
          </Collapse>
 
          <ListItem button component={Link} to="/AllCategories/MoviesCategory">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary="All Categories" />
          </ListItem>
 
          {/* Dropdown 9 */}
          <ListItem button onClick={handleDropdown9Click}>
            <ListItemIcon>
              <OndemandVideo />
            </ListItemIcon>
            <ListItemText primary="CatchUp Tv" />
            {openDropdown9 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown9} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/CatchupList">
                <ListItemIcon>
                  <SortByAlpha />
                </ListItemIcon>
                <ListItemText primary="All Channels" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
      {isSmallScreen && (
      <IconButton
        color="inherit"
        aria-label={isSidebarContentOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsSidebarContentOpen(!isSidebarContentOpen)}
        sx={{
          position: 'fixed',
          top: '1%',
          left: '1%',
          transform: 'translateY(50%)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        {isSidebarContentOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      )}
    </ThemeProvider>
  );
};
 
export default SidebarContent;
 
