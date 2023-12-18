//Category Dropdown
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
  createTheme,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import {Inbox, ExpandLess, ExpandMore, StarBorder, VideoCallSharp,ChevronRight,ChevronLeft, SwitchVideo, LocalMoviesTwoTone, Difference, RadioRounded, SurroundSound, LoupeRounded, QueuePlayNext, DvrOutlined, SmartDisplayOutlined, DesktopWindowsRounded, AddToQueueSharp, LiveTvTwoTone, ViewTimelineSharp, FormatLineSpacingOutlined, AddCircleOutlined, TheatersSharp, ControlPoint, DeveloperBoardTwoTone, TheatersRounded, ControlPointRounded, LibraryMusicTwoTone, LyricsRounded, PlaylistAdd} from "@mui/icons-material";


function Sidebar(drawerWidth) {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [openDropdown4, setOpenDropdown4] = useState(false);
  const [openDropdown5, setOpenDropdown5] = useState(false);
  const [openDropdown6, setOpenDropdown6] = useState(false);
  const [openDropdown7, setOpenDropdown7] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
          <center>All Categories</center>
        </h1>
        <List>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <SwitchVideo />
            </ListItemIcon>
            <ListItemText primary="Movie Categories" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/AllCategories/MoviesCategory">
                <ListItemIcon>
                  <LocalMoviesTwoTone />
                </ListItemIcon>
                <ListItemText primary="Movies Category" />
              </ListItem>
              <ListItem button component={Link} to="/MovieCategory/AddCategory">
                <ListItemIcon>
                  <VideoCallSharp />
                </ListItemIcon>
                <ListItemText primary="Add Category" />
              </ListItem>
              <ListItem button component={Link} to="/MoviescatSort">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="Movies Category Sortable List" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 2 */}
          <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <RadioRounded />
            </ListItemIcon>
            <ListItemText primary="Radio Categories" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/RadioCategory">
                <ListItemIcon>
                  <SurroundSound />
                </ListItemIcon>
                <ListItemText primary="Radio Category" />
              </ListItem>
              <ListItem button component={Link} to="/RadioCategory/AddCategory">
                <ListItemIcon>
                  <LoupeRounded />
                </ListItemIcon>
                <ListItemText primary="Add Category" />
              </ListItem>
              <ListItem button component={Link} to="/SortRadiocat">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="Sortable Radio category" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 3 */}
          <ListItem button onClick={handleDropdown3Click}>
            <ListItemIcon>
              <DvrOutlined />
            </ListItemIcon>
            <ListItemText primary="Live Tv Categories" />
            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/LiveTvCategory">
                <ListItemIcon>
                  <SmartDisplayOutlined />
                </ListItemIcon>
                <ListItemText primary="Live Tv Category" />
              </ListItem>
              <ListItem button component={Link} to="/LiveCategory/AddCategory">
                <ListItemIcon>
                  <QueuePlayNext />
                </ListItemIcon>
                <ListItemText primary="Add Category" />
              </ListItem>
              <ListItem button component={Link} to="/LiveTvcatSortableList">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="LiveTv Category Sortable List" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleDropdown4Click}>
            <ListItemIcon>
              <DesktopWindowsRounded />
            </ListItemIcon>
            <ListItemText primary="Timeshift Tv Categories" />
            {openDropdown4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/TimeshiftTvCategory">
                <ListItemIcon>
                  <LiveTvTwoTone />
                </ListItemIcon>
                <ListItemText primary="Timeshift Tv category" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/TimeshiftCategory/AddCategory"
              >
                <ListItemIcon>
                  <AddToQueueSharp />
                </ListItemIcon>
                <ListItemText primary="Add Category" />
              </ListItem>
              <ListItem button component={Link} to="/Timeshiftcatsort">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="TimeshiftTv Category Sortable" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleDropdown5Click}>
            <ListItemIcon>
              <ViewTimelineSharp />
            </ListItemIcon>
            <ListItemText primary="Series Categories" />
            {openDropdown5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Seriesnamelist">
                <ListItemIcon>
                  <FormatLineSpacingOutlined />
                </ListItemIcon>
                <ListItemText primary="Series Name List" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/SeriesCategory/AddseriesName"
              >
                <ListItemIcon>
                  <AddCircleOutlined />
                </ListItemIcon>
                <ListItemText primary="Add Series Name" />
              </ListItem>
              <ListItem button component={Link} to="/seriesNameSortableList">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="Series Name Sortable List" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleDropdown6Click}>
            <ListItemIcon>
              <TheatersSharp />
            </ListItemIcon>
            <ListItemText primary="Shows categories" />
            {openDropdown6 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ShowsCategory">
                <ListItemIcon>
                  <DeveloperBoardTwoTone />
                </ListItemIcon>
                <ListItemText primary="Shows Category" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/ShowsCategory/ShowsAddCategory"
              >
                <ListItemIcon>
                  <ControlPoint />
                </ListItemIcon>
                <ListItemText primary="Add category" />
              </ListItem>
              <ListItem button component={Link} to="/ShowscatSort">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="Shows Category Sortable list" />
              </ListItem>
            </List>
          </Collapse>

          <Collapse in={openDropdown6} timeout="auto" unmountOnExit>
            <hr></hr>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ShowsNames">
                <ListItemIcon>
                  <TheatersRounded />
                </ListItemIcon>
                <ListItemText primary="Shows Names" />
              </ListItem>
              <ListItem button component={Link} to="/ShowsNames/AddShowsNames">
                <ListItemIcon>
                  <ControlPointRounded />
                </ListItemIcon>
                <ListItemText primary="Add Shows Names" />
              </ListItem>
              <ListItem button component={Link} to="/ShowscatSort">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="Shows Names Sortable list" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleDropdown7Click}>
            <ListItemIcon>
              <LibraryMusicTwoTone />
            </ListItemIcon>
            <ListItemText primary="Song categories" />
            {openDropdown7 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/SongCategoryList">
                <ListItemIcon>
                  <LyricsRounded />
                </ListItemIcon>
                <ListItemText primary="Song Category List" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/SongCategoryList/AddSongCategoryName"
              >
                <ListItemIcon>
                  <PlaylistAdd />
                </ListItemIcon>
                <ListItemText primary="Add Song Cat Name" />
              </ListItem>
              <ListItem button component={Link} to="/SongcatSort">
                <ListItemIcon>
                  <Difference />
                </ListItemIcon>
                <ListItemText primary="Song Cat Sortable List" />
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

export default Sidebar;
