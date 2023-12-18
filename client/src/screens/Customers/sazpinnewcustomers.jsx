import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  IconButton,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  openDe,

} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart"; 
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import Navbar from "components/Navbar";
import SidebarCustomers from "components/SidebarCustomers";

const SazpinNewCustomers = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");
  // const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const { data, isLoading } = useGetDashboardQuery();
  const [sazpinnewuserlist, setsazpinnewuserlist] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5001/api/customers/get")
      .then((res) => res.json())
      .then((res) => {
        console.log(res); 
        setsazpinnewuserlist(res.data);
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
      field: "disable/enable",
      headerName: "Disable/Enable",
      flex: 1,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "created",
      headerName: "Created Date",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const _id = params.row._id; // Assuming 'id' is a unique identifier for the row

  const handleEditAction =        (_id) =>
        {
          navigate(`/Customers/addcustomer/${params.row._id}`);
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
            .delete(`http://localhost:5001/api/customers/delete/${deleteItemId}`)
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
      {
        field: "kick",
        headerName: "Kick",
        flex: 1,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
  ];


  // const [sazpinNewCustomers, setSazpinNewCustomers] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5001/api/masa_new_users/find")
  //     .then((response) => response.json())
  //     .then((json) => setSazpinNewCustomers(json.data));
  // }, []);
  // console.log(sazpinNewCustomers);


  return (

    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>
        {/* <Header title="ALL USERS LIST" /> */}
      </FlexBetween>
      <Navbar/>

      <Box
        mt={isSmallScreen ? "10px" : "50px"}
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="250px"
        gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="ALL USERS LIST"

          searchtab = {<div className="content">
            <div id="data_table_wrapper" className="dataTables_wrapper" role="grid">
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
<Container 
sx={{height:1000}}>
               <DataGrid   
               sx={{ mt: isSmallScreen ? "10px" : "-100px" }}
                         getRowId={(row) => row._id}
            // rows={[]}

            rows={sazpinnewuserlist}


            columns={columns}
          />
      </Container>


      </Box>


      <CustomColumnMenu/>
      {/* <SidebarCustomers/> */}
    </Box>
  );
};

export default SazpinNewCustomers;