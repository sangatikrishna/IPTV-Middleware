import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import SidebarContent from "components/SidebarContent";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  Container,
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
import SidebarReseller from "components/SidebarResellers";

const Allreseller = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
  // const { data, isLoading } = useGetDashboardQuery();
  const [resellers, setResellers] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5001/api/resellers/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setResellers(res.data);
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
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "created",
      headerName: "Created Date",
      flex: 0.5,
      sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "actions",
      headerName: "Action",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

      renderCell: (params) => {
        const _id = params.row._id;
        const handleEditAction =        (_id) =>
      {
        navigate(`/addresellers/${params.row._id}`);
        console.log(`Edit action for ID ${_id}`);
      };
      const handleDeleteAction = (_id) => {
        // Open the delete confirmation dialog
        openDeleteDialog(_id);
      };

      const handleDeleteConfirmation = () => {
        // Assuming you have an API endpoint for deleting by ID
        axios
          .delete(`http://localhost:5001/api/resellers/delete/${deleteItemId}`)
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
    <Box m="1.5rem 2.5rem" ml="300px">
      <FlexBetween>
        {/* <Header title="ADD MOVIE" /> */}


      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="80px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="All Resellers"
          // value={data && data.totalCustomers}
          // increase="+14%"
          // description="Since last month"
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
        />
<Container sx={{height: 450}}>
<DataGrid
   // className={classes.root}
    // components={{
    //   LoadingOverlay: CustomLoadingOverlay,
    //   NoRowsOverlay: CustomNoRowsOverlay,
    //   ErrorOverlay: CustomErrorOverlay,
    // }}
    // loading={loading}
    // error={error}


    disableSelectionOnClick
    rows={resellers}
    columns={columns}
    pageSize={8}
    checkboxSelection
    getRowId={(row) => String(row._id)}
   />
   </Container>
  
        {/* <DataGrid
          // loading={isLoading || !data}
          // getRowId={(row) => row._id}
          // rows={(data && data.transactions) || []}
          rows={[]}
          columns={columns}
        /> */}
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
      </Box>

      <CustomColumnMenu />
    </Box>
  );
};

export default Allreseller;
