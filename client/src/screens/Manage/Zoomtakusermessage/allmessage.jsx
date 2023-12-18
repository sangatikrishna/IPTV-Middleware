import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FlexBetween from "components/FlexBetween";

import Header from "components/Header";
import { useNavigate } from "react-router-dom";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Update,
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
  Container
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

// import BreakdownChart from "components/BreakdownChart";

// import OverviewChart from "components/OverviewChart";

// import { useGetDashboardQuery } from "state/api";

import StatBox from "components/StatBox";

import Navbar from "components/Navbar";

const Allmessage6 = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 1280px,)"
  );
  // const { data, isLoading } = useGetDashboardQuery();

  // const [products, setProducts] = useState([]);
  const [Amusermessages, setAmusermessages] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5001/api/AMusermessages/get")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAmusermessages(res.data);
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
      field: "title",

      headerName: "Title",

      flex: 1,
    },

    {
      field: "description",

      headerName: "Description",

      flex: 1,
    },

    {
      field: "created",

      headerName: "Created Date",

      flex: 1,
    },

    {
      field: "user_ids",

      headerName: "Users",

      flex: 1,

      // renderCell: (params) => params.value.length,
    },

    {
      field: "start_date",

      headerName: "Starting Date",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },

    {
      field: "repeat_interval",

      headerName: "Repeat Interval",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },

    {
      field: "is_active",

      headerName: "Status",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },

    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const _id = params.row._id; // Assuming 'id' is a unique identifier for the row

        const handleDeleteAction = (_id) => {
          // Open the delete confirmation dialog
          openDeleteDialog(_id);
        };

        const handleDeleteConfirmation = () => {
          // Assuming you have an API endpoint for deleting by ID
          axios
            .delete(`http://localhost:5001/api/AMusermessages/delete/${deleteItemId}`)
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
            {/* <IconButton
              onClick={handleEditAction}
              aria-label="Edit"
              color="primary"
            >
              <Edit />
            </IconButton> */}
            {/* <text>|</text> */}

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
    <Box m="1.5rem 3.5rem" ml="400px">
      <FlexBetween>{/* <Header title="ALL USERS LIST" /> */}</FlexBetween>

      {/* <Navbar/> */}

      <Box
        mt="50px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        // gridAutoRows="360px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}

        <StatBox
          title="APP MESSAGE"
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
<Container sx={{height: 450}}>
        <DataGrid
          // sx={{ mt: "-60px" }}
          rows={Amusermessages}
          columns={columns}
          getRowId={(row)=>String(row._id)}
        />
        </Container>
      </Box>
      <CustomColumnMenu />
    </Box>
  );
};

export default Allmessage6;
