import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Delete,
  Edit,
  Height
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Menu as MenuIcon,
  Container,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Customer_Saz2 = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const { data, isLoading } = useGetDashboardQuery();
  const [allcustomer_saz2, setAllcustomer_saz2] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5001/api/customer_saz2/find")
      .then((response) => response.json())
      .then((json) => setAllcustomer_saz2(json.data));
  };
  console.log(allcustomer_saz2);
   
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
      field: "id",
      headerName: "ID",
      flex: 0.7,
    },
    {
      field: "Customer ID",
      headerName: "Customer ID",
      flex: 1.1,
    },
    {
      field: "Module Name",
      headerName: "Module Name",
      flex: 1.1,
    },
    {
      field: "device_id",
      headerName: "DeviceType",
      flex: 1,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.7,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
        field: "is_trail",
        headerName: "isTrail",
        flex: 0.7,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "status",
        headerName: "Active/InActive",
        flex: 1,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "Expiry Date",
        headerName: "Expiry Date",
        flex: 1,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "created",
        headerName: "Created Date",
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
            navigate(`/Customers/addcustomer_saz2/${params.row._id}`);
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
              .delete(`http://localhost:5001/api/customer_saz2/delete/${deleteItemId}`)
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

    <Box m={isSmallScreen ? "1rem" : "1.5rem 3.5rem"} ml={isSmallScreen ? "10px" : "300px"}mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>
        {/* <Header title="Customer_Saz2" /> */}
      </FlexBetween>
      <Navbar/>

      <Box
        mt={isSmallScreen ? "10px" : "50px"}
        display="grid"
        gridTemplateColumns={isSmallScreen ? "1fr" : "repeat(12, 1fr)"}
        gridAutoRows="160px"
        gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Customer_Saz2"
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

          //   icon={
          //     <Email
          //       sx={{ color: theme.palette.secondary[100], fontSize: "26px" }}
          //     />
          //   }
        />
        <Container sx={{height:450}}>
               <DataGrid   sx={{ mt: isSmallScreen ? "10px" : "-60px" }} 
               getRowId={(row) => row._id}
         
            rows={allcustomer_saz2}
            columns={columns}
          />
        </Container>

     
      </Box>

      <CustomColumnMenu/>
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

export default Customer_Saz2;
