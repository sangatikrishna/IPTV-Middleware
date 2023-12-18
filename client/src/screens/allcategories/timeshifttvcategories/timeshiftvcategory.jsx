import React from "react";
import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
// import { useState } from "react";
// import SidebarContent from "components/SidebarContent"
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Edit,
  Delete,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
// import Sidebar from "components/Sidebar";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
 
// import { SettingsOutlined,ChevronLeft,ChevronRightOutlined,HomeOutlined ,ShoppinCartOutlined,Groups2Outlined,ReceiptLongOutlined,PublicOffOutlined,PointOfSaleOutlined,CalendarTodayOutlined,CalendarMonthOutlined,AdminPanelSettingsOutlined,TrendingUpOutlined, ContentCopyOutlined} from '@mui/icons-material';
// import {TocOutlinedIcon} from '@mui/icons-material/TocOutlined';
// import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
// import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import {} from "@mui/icons-material";
import { useState, useEffect } from "react";
// import SidebarContent from "components/SidebarContent";
import { Menu as MenuIcon, IconButton } from "@mui/material";
// import SidebarAllCategory from "components/SidebarAllCategories";
 
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
} from "@mui/icons-material";
import { TocOutlinedIcon } from "@mui/icons-material/TocOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import {} from "@mui/icons-material";
// import {useState,useEffect} from "react";
import SidebarContent from "components/SidebarContent";
// import {Menu as MenuIcon,IconButton} from "@mui/material"
import SidebarAllCategory from "components/SidebarAllCategories";
import SidebarAllCategories from "components/SidebarAllCategories";
 
const TimeshiftTvCategory = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNonMediumScreens = useMediaQuery("(min-width: 1280px)");
  const isNonMobile = useMediaQuery("(min-width:400px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
 
 
 
  const [videolivecategories, setvideolivecategories] = useState([]);
 
const fetchData = () => {
  fetch("http://localhost:5001/api/video_live_categories/find")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setvideolivecategories(res.data);
    });
};
 
useEffect(() => {
  fetchData(); // Fetch initial data when the component mounts
}, []);
 
 
const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
const [deleteItemId, setDeleteItemId] = useState(null);
 
const openDeleteDialog = (_id) => {
  setDeleteDialogOpen(true);
  setDeleteItemId(_id);
};
 
const closeDeleteDialog = () => {
  setDeleteDialogOpen(false);
  setDeleteItemId(null);
};
 
  // const { data, isLoading } = useGetDashboardQuery();
  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);
 
  const columns = [
    {
      field: "image",
 
    headerName: "Image",
    flex: 1,
    renderCell: (params) => (
      <Avatar
        alt="User Avatar"
        // src={`${params.value}`}
        sx={{ width: 50, height: 50 }} // Customize the width and height of the avatars
      />
    ),
 
      headerName: "Image",
 
      flex: 1,
      width:200,
      renderCell:(video_live_categories)=>{
        return(
          <div>
 
            <Avatar alt="Movie Name" src={video_live_categories.row.image}>  {video_live_categories.row.image}</Avatar>
            </div>
        )
      }
    },
 
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "activeStatus",
      headerName: "Active Status",
      flex: 1,
    },
    {
      field: "createdate",
      headerName: "Created Date",
      flex: 0.5,
      sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
 
        const handleEditAction = (_id) =>
        {
          navigate(`/TimeshiftCategory/AddCategory/${params.row._id}`);
          // Ikkada Edit Action Logic Raasko
          console.log(`Edit action for ID ${_id}`);
          // aah Edit Logic ikkada Add chesko
        };
        const handleDeleteAction = (_id) => {
          // Open the delete confirmation dialog
          openDeleteDialog(_id);
        };
 
        const handleDeleteConfirmation = () => {
          // Assuming you have an API endpoint for deleting by ID
          axios
            .delete(`http://localhost:5001/api/video_live_categories/delete/${deleteItemId}`)
            .then((response) => {
              console.log(`Item with ID ${deleteItemId} deleted successfully.`);
              closeDeleteDialog(); // Close the dialog
              fetchData();
              // You might want to refresh your data after a successful delete
            })
            .catch((error) => {
              console.error(
                `Error deleting item with ID ${deleteItemId}:`,
                error
              );
            });
        };
     
 
        return (
          <div>
            <IconButton
              onClick={handleEditAction}
              aria-label="Edit"
              color="primary"
 
            >
              <Edit />
            </IconButton>
 
            <text>|</text>
 
            <IconButton
           
             onClick={() => handleDeleteAction(params.row._id)}
              aria-label="Delete"
              color="secondary"
            >
 
              <Delete />
            </IconButton>
            <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogContent>
                Are you sure you want to delete this item?
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDeleteDialog} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleDeleteConfirmation} color="secondary">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      },
    },
  ];
 
  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"}>
    {/* m="1.5rem 2.5rem" ml="350px"> */}
      <FlexBetween>{/* <Header title="Movie Category"  /> */}</FlexBetween>
 
      {/* <SidebarAllCategories /> */}
      <FlexBetween>{/* <Header title="Movie Category"  /> */}</FlexBetween>
 
      <Box
       // mt="20px"
       mt={isSmallScreen ? "10px" : "50px"}
       ml="0px"
       display="grid"
       gridTemplateColumns="repeat(12, 1fr)"
       // gridAutoRows="500px"
       // gap="20px"
       gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="LIVE TV CATEGORY"
          // value={data && data.totalCustomers}
          // increase="+14%"
          // description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
          searchtab={
            <div className="content">
              <div
                id="data_table_wrapper"
                className="dataTables_wrapper"
                role="grid"
              >
                <div className="dataTables_filter" id="data_table_filter">
                  <label>
                    Search &nbsp;&nbsp;
                    <input type="text" aria-controls="data_table" />
                  </label>
                </div>
              </div>
            </div>
          }
        />
        <DataGrid
          // loading={isLoading || !data}
          // getRowId={(row) => row._id}
          // rows={(data && data.transactions) || []}
          sx={{ mt: isSmallScreen ? "30px" : "60px" }}
          rows={videolivecategories}
          columns={columns}
        />
      </Box>
 
      <CustomColumnMenu />
 
      {/* <SidebarAllCategory/> */}
      <FlexBetween>
        <IconButton
          onClick={() => setIsSidebarContentOpen(!isSidebarContentOpen)}
        >
          <MenuIcon />
        </IconButton>
      </FlexBetween>
    </Box>
  );
};
 
export default TimeshiftTvCategory;
 
