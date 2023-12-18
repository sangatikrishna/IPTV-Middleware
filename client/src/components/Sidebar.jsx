
import React from "react";
 
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
 
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppinCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOffOutlined,
  PointOfSaleOutlined,
  CalendarTodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  ContentCopyOutlined,
  ChevronRight,
} from "@mui/icons-material";
 
import { TocOutlinedIcon } from "@mui/icons-material/TocOutlined";
 
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
 
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
 
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
 
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
 
import {} from "@mui/icons-material";
 
import { useState, useEffect } from "react";
 
import { Navigate, useLocation, useNavigate } from "react-router-dom";
 
import FlexBetween from "./FlexBetween";
 
import image_saz from "assets/image_saz.png";
 
const navItems = [
  { text: "DASHBOARD", icon: <HomeOutlined /> },
  { text: "CONTENT", icon: <ContentCopyOutlined /> },
  { text: "MONETIZE", icon: <BusinessOutlinedIcon /> },
  { text: "CUSTOMERS", icon: <BusinessOutlinedIcon /> },
  { text: "MANAGE", icon: <ManageAccountsOutlinedIcon /> },
  { text: "ADMINISTRATORS", icon: <SupervisorAccountOutlinedIcon /> },
  { text: "RESELLERS", icon: <SupervisorAccountOutlinedIcon /> },
  { text: "DC", icon: <BusinessOutlinedIcon /> },
];
 
const Sidebar = ({
  drawerWidth,
 
  isSidebarOpen,
 
  setIsSidebarOpen,
 
  isNonMobile,
}) => {
  const { pathname } = useLocation();
 
  const [active, setActive] = useState("");
 
  const navigate = useNavigate();
 
  const theme = useTheme();
 
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
 
              backgroundColor: theme.palette.background.alt,
 
              boxSizing: "border-box",
 
              borderWidth: isNonMobile ? 0 : "2px",
 
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              {/* m= top right bottom left */}
 
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    SAZPIN IPTV
                  </Typography>
                </Box>

                
              </FlexBetween>
            </Box>
 
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
 
                const lcText = text.toLowerCase();
 
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
 
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
 
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem ",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
 
                      <ListItemText primary={text} />
 
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
      {!isNonMobile && (
      <IconButton
        color="inherit"
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        sx={{
          position: 'fixed',
          top: '10%',
          left: isSidebarOpen ? drawerWidth : 0.5,
          transform: 'translateY(-50%)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      )}
    </Box>
  );
};
 
export default Sidebar;
 
 