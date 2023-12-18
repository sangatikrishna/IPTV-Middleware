import React from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import { DataGrid } from "@mui/x-data-grid";

// import SidebarContent from "components/SidebarContent"

import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import axios from "axios";

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
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from "@mui/material";

// import BreakdownChart from "components/BreakdownChart";

// import OverviewChart from "components/OverviewChart";

// import { useGetDashboardQuery } from "state/api";

import StatBox from "components/StatBox";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

// import 'react-pro-sidebar/dist/css/styles.css'

import { Link } from "react-router-dom";

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

import { useState, useEffect } from "react";

import SidebarContent from "components/SidebarContent";

import { Menu as MenuIcon, IconButton } from "@mui/material";

import Navbar from "components/Navbar";
import { useNavigate } from 'react-router-dom';

const AllBanner = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width:1280px)"
  );

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  // const { data, isLoading } = useGetDashboardQuery();

  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);


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

  const columns = [
    {
      field: "id",

      headerName: "Id",

      flex: 1,
    },
    {
      field: "image",

      headerName: "Image",

      flex: 1,
    },

    {
      field: "title",

      headerName: "Title",

      flex: 1,
    },

    {
      field: "created",

      headerName: "Date Added",

      flex: 1,
    },

    {
      field: "status",

      headerName: "Active Status",

      flex: 0.5,

      sortable: false,

      // renderCell: (params) => params.value.length,
    },

    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const id = params.row.id; // Assuming 'id' is a unique identifier for the row
  
        const handleEditAction = (_id) =>
        {
          navigate(`/addbanner/${params.row._id}`);
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
            .delete(`http://localhost:5001/api/dashboard_banners/delete/${deleteItemId}`)
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
  const [banner, setBanner] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5001/api/dashboard_banners/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBanner(res.data);
      });
  };
  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);
  console.log(banner);

  return (
    // <Box
    //   m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"}
    //   ml={isSmallScreen ? "10px" : "300px"}
    // >
    //   {/* // <Box m="2.5rem 3.5rem" ml="310px"> */}


    // // <Box m="2.5rem 3.5rem" ml="310px">
<Box m={isSmallScreen ? "1rem" : "2.5rem 3.5rem"} ml={isSmallScreen ? "10px" : "310px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <Navbar/>

      <FlexBetween>
        {/* <Header title="Banner"  /> */}

        <Box></Box>
      </FlexBetween>

      <Box
        // mt="50px"

        ml="0px"
        display="grid"
        // gridTemplateColumns="repeat(12, 1fr)"

        gridAutoRows="160px"
        // gap="20px"

        // gap="20px"
        
mt={isSmallScreen ? "10px" : "50px"}
gridTemplateColumns={isSmallScreen ? "1fr" : "repeat(12, 1fr)"}
gap={isSmallScreen ? "10px" : "20px"}

        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}

        <StatBox
          title="CATEGORY LISTING"
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
          // value={data && data.totalCustomers}

          // increase="+14%"

          // description="Since last month"

          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "40px" }}
            />
          }
        />
<Container sx={{height: 450}}>
        <DataGrid
          sx={{ mt: isSmallScreen ? "10px" : "-60px" }}
          // loading={isLoading || !data}

              //  <DataGrid
              //  sx={{ mt: isSmallScreen ? "10px" : "-60px" }}

            // loading={isLoading || !data}

            // getRowId={(row) => row._id}

            // rows={(data && data.transactions) || []}

            disableSelectionOnClick
            rows={banner}
            columns={columns}
            // pageSize={8}
            // checkboxSelection
            getRowId={(row) => String(row._id)}

          />



          {/* // getRowId={(row) => row._id}

          // rows={(data && data.transactions) || []}

          disableSelectionOnClick
          rows={banner}
          columns={columns}
          // sx={{ mt: isSmallScreen ? "10px" : "-60px" }}
          // pageSize={8}
          // checkboxSelection
          // getRowId={(row) => String(row._id)} */}
        {/* /> */}
        </Container>
      </Box>

      <CustomColumnMenu />

      {/* <SidebarContent/> */}

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

export default AllBanner;
