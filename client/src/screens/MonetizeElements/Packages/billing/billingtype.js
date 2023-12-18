import React from "react";
import { useState, useEffect } from "react";
import FlexBetween from "components/FlexBetween";
 
import axios from "axios";
 
import Header from "components/Header";
 
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
 
import SidebarContent from "components/SidebarContent";
 
import Navbar from "components/Navbar";
import { useNavigate } from 'react-router-dom';
 
// import { useState, useEffect } from "react";
 
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
 
import { DataGrid } from "@mui/x-data-grid";
 
// import BreakdownChart from "components/BreakdownChart";
 
// import OverviewChart from "components/OverviewChart";
 
// import { useGetDashboardQuery } from "state/api";
 
import StatBox from "components/StatBox";
import SidebarPackages from "components/SidebarMonetize";
const Billingtype = () => {
  const navigate = useNavigate();
  const [allcontent, setAllcontent] = useState([]);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const theme = useTheme();
 
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  // const { data, isLoading } = useGetDashboardQuery();

  const columns = [
    // {
 
    //   field: "image",
 
    //   headerName: "Image",
 
    //   flex: 1,
 
    // },
 
    {
      field: "name",
 
      headerName: "Name",
 
      flex: 1,
    },
 
    // {
 
    //   field: "category",
 
    //   headerName: "Category",
 
    //   flex: 1,
 
    // },
 
    // {
 
    //   field: "dateAdded",
 
    //   headerName: "Date Added",
 
    //   flex: 1,
 
    // },
 
    // {
 
    //   field: "actionStatus",
 
    //   headerName: "Action Status",
 
    //   flex: 0.5,
 
    //   sortable: false,
 
    //   // renderCell: (params) => params.value.length,
 
    // },
 
    {
      field: "actions",
 
      headerName: "Actions",
 
      flex: 1,
      renderCell: (params) => {
        const _id = params.row._id; // Assuming 'id' is a unique identifier for the row
  const handleEditAction =        (_id) =>
        {
          navigate(`/addbillingtype/${params.row._id}`);
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
            .delete(`http://localhost:5001/api/adons_billing_types/delete/${deleteItemId}`)
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

      // renderCell: (params) => {
      //   const _id = params.row._id; // Assuming 'id' is a unique identifier for the row

        // const handleEditAction = () => {
        //   // Ikkada Edit Action Logic Raasko
        //   console.log(`Edit action for ID `);
        //   // aah Edit Logic ikkada Add chesko
        // };
        // const handleDeleteAction = async (id) => {
        //     try {
        //       const res = await axios.delete(`https://localhost:5001/api/adons_billing_types/delete/${id}`);
        //       if (res.data.success) {
        //         alert(res.data.msg);
        //         setBillingTypes((prevData) => prevData.filter(item => item._id !== id));
        //       }
        //     } catch (err) {
        //       console.error(err);
        //     }
        //   alert("Delete Record");
        // }
        // const handleDeleteAction = async (id) => {
        //   if (
        //     window.confirm(`Do you want to delete item with ObjectId: ${id}?`)
        //   ) {
        //     try {
        //       const res = await axios.delete(
        //         `http://localhost:5001/api/adons_billing_types/delete/${id}`
        //       );
        //       if (res.status === 200) {
        //         const updatedAllcontent = allcontent.filter(
        //           (item) => item._id !== id
        //         );
        //         setAllcontent(updatedAllcontent);
        //         fetchData();
        //         // alert('Record Deleted Successfully')
        //       } else {
        //         console.error("Failed to delete item.");
        //         alert("Failed to Delete the record");
        //       }
        //     } catch (err) {
        //       console.error(err);
        //     }
        //   }
        // };
       
  const openDeleteDialog = (_id) => {
    setDeleteDialogOpen(true);
    setDeleteItemId(_id);
  };
  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setDeleteItemId(null);
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
 
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
 
  const [billingTypes, setBillingTypes] = useState([]);
  
  // console.log(billingTypes);

  const fetchData = () => {
    fetch("http://localhost:5001/api/adons_billing_types/get")
      .then((response) => response.json())
      .then((json) =>
       setBillingTypes(json.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <Box m="1.5rem 2.5rem">
 
    //   <FlexBetween>
 
    //     <Header title="Movies" subtitle="Welcome to your Movies" />
    //     <Box>
 
    //       <Button
 
    //         sx={{
 
    //           backgroundColor: theme.palette.secondary.light,
 
    //           color: theme.palette.background.alt,
 
    //           fontSize: "14px",
 
    //           fontWeight: "bold",
 
    //           padding: "10px 20px",
 
    //         }}
 
    //       >
 
    //         <DownloadOutlined sx={{ mr: "10px" }} />
 
    //         Download Reports
 
    //       </Button>
 
    //     </Box>
 
    //   </FlexBetween>
 
    <Box
      m={isSmallScreen ? "1rem" : "1.5rem 3.5rem"}
      ml={isSmallScreen ? "10px" : "300px"}
    >
      {/* <Box m="1.5rem 2.5rem" ml="250px"> */}
      <Navbar />
 
      <FlexBetween>
        {/* <Header title="ADD MOVIE" /> */}
 
        <Box></Box>
      </FlexBetween>
 
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        // gridAutoRows="160px"
 
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
 
        <StatBox
          title="Billingtype"
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
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
 
        <DataGrid
          // loading={isLoading || !data}
 
          // getRowId={(row) => row._id}
 
          // rows={(data && data.transactions) || []}
          sx={{ mt: isSmallScreen ? "10px" : "60px" }}
          // rows={(data && data.transactions) || []}
          getRowId={(row) => row._id}
          rows={billingTypes}
          columns={columns}
        />
        {/* ROW 2 */}
 
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
 
              borderRadius: "5rem",
            },
 
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
 
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
 
              color: theme.palette.secondary[100],
 
              borderBottom: "none",
            },
 
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
 
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
 
              color: theme.palette.secondary[100],
 
              borderTop: "none",
            },
 
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        ></Box>
 
        {/* <SidebarPackages /> */}
      </Box>
 
      <CustomColumnMenu />
    </Box>
  );
};
 
export default Billingtype;
 
 
