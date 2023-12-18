import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import SidebarContent from "components/SidebarContent"
import CustomColumnMenu from "components/DataGridCustomColumnMenu";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Delete,
  Edit
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,

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
import SidebarContent from "components/SidebarContent";
import { Menu as MenuIcon, IconButton } from "@mui/material";
import SidebarAllCategory from "components/SidebarAllCategories";
import SidebarAdmin from "components/SidebarAdmin";

const AllAdministrator = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)");
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const { data, isLoading } = useGetDashboardQuery();
  const [alladministrators, setAlladministrators] = useState([]);
    const fetchData = () => {
      fetch("http://localhost:5001/api/administrators/find")
        .then((response) => response.json())
        .then((json) => setAlladministrators(json.data));
    };
    console.log(alladministrators);
     
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
  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);

  const columns = [
    {
      field: "nick",
      headerName: "Nick",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "mail",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      //   sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "created",
      headerName: "Create Date",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      renderCell: (params) => {
        // const id = params.row.id; // Assuming 'id' is a unique identifier for the row
        const handleEditAction =        (_id) =>
        {
          navigate(`/addadministrator/${params.row._id}`);
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
            .delete(`http://localhost:5001/api/administrators/delete/${deleteItemId}`)
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

        // const handleEditAction = () => {
        //   // Ikkada Edit Action Logic Raasko
        //   console.log(`Edit action for ID `);
        //   // aah Edit Logic ikkada Add chesko
        // };
        // const handleDeleteAction = () => {
        //   // Ikkada Delete Action Logic Raasko
        //   console.log(`Delete action for ID `);
        //   // aah Delete Logic ikkada Add chesko
        // }

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
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "310px"} mt={isSmallScreen ? "70px" : "undefined"}>
    {/* <Box m="1.5rem 2.5rem" ml="310px"> */}
      <FlexBetween>{/* <Header title="Live TV Category"  /> */}</FlexBetween>

      <Box
        mt={isSmallScreen ? "10px" : "50px"}
        // mt="20px"
        ml="0px"
        display="grid"
        // gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateColumns={isSmallScreen ? "1fr" : "repeat(12, 1fr)"}
        gridAutoRows="160px"
        // gap="20px"
        gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="ALL ADMIN LIST"
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
                    <input  type="text" aria-controls="data_table" />
                  </label>
                </div>
              </div>
            </div>
          }
        />
        {/* <DataGrid */}
        {/* <DataGrid   */}
         {/* rows={[]}  */}
         {/* columns={columns}  */}
         {/* /> */}
          {/* loading={isLoading || !data}
           getRowId={(row) => row._id}
           rows={(data && data.transactions) || []}
           rows={[]}
           columns={columns}
         */}
         <Container sx={{height:550}} >
        <DataGrid
        sx={{ mt: isSmallScreen ? "10px" : "-60px" }}
          // loading={isLoading || !data}
          // getRowId={(row) => row._id}
          // rows={(data && data.transactions) || []}
          rows={alladministrators}
          columns={columns}
        />
        </Container>
      </Box>

      <CustomColumnMenu />

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

export default AllAdministrator;
