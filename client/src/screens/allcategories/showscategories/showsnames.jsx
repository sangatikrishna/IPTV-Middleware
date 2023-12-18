import React from "react";
import axios from "axios";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
// import SidebarContent from "components/SidebarContent"
import CustomColumnMenu from "components/DataGridCustomColumnMenu";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Edit,
  Delete
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle
} from "@mui/material";

import Sidebar from "components/Sidebar";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";

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
import { useNavigate } from "react-router-dom";
import SidebarContent from "components/SidebarContent";
import { Menu as MenuIcon, IconButton } from "@mui/material";
import SidebarAllCategory from "components/SidebarAllCategories";

const ShowsNames = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1280px)");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const { data, isLoading } = useGetDashboardQuery();
  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);

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

  const columns = [
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
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        const id = params.row.id; // Assuming 'id' is a unique identifier for the row

        const handleEditAction =        (_id) =>
              {
                navigate(`/ShowsNames/AddShowsNames/${params.row._id}`);
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
                  .delete(`http://localhost:5001/api/show_sub_categories/delete/${deleteItemId}`)
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

  const [showsnames, setShowsnames] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5001/api/show_sub_categories/find")
      .then((response) => response.json())
      .then((json) => setShowsnames(json.data));
  };
  console.log(showsnames);

  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "310px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>{/* <Header title="Movie Category"  /> */}</FlexBetween>

      <Box
         // mt="20px"
         mt={isSmallScreen ? "10px" : "50px"}
         display="grid"
         gridTemplateColumns="repeat(12, 1fr)"
         // gap="20px"
         gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="SHOW SUB CATEGORY"
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
          rows={showsnames}
          columns={columns}
        />
      </Box>

      <CustomColumnMenu />

      {/* <SidebarAllCategory /> */}
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

export default ShowsNames;
