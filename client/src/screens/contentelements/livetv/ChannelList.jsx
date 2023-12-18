import React from "react";
import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import SidebarContent from "components/SidebarContent";
import { useState,useEffect } from "react";
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
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
  Container,
  Avatar,
  IconButton
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import { useNavigate } from "react-router-dom";
const Channellist = () => {
  const navigate = useNavigate()
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 2000px)"
  );

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  // const isNonMediumScreens = useMediaQuery(
  //   "(min-width: 400px, max-width: 1280px)"
  // );

  // const { data, isLoading } = useGetDashboardQuery();

  const [livetvs, setLivetvs] = useState([]);

  const fetchData = () => {
   fetch("http://localhost:5001/api/livetvs/find")
     .then((response) => response.json())
     .then((res) => {
       console.log(res);
       setLivetvs(res.data);
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
      field: "kameraImage",

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
      renderCell:(livetvs)=>{
        return(
          <div>

            <Avatar alt="Movie Name" src={livetvs.row.kameraImage}>  {livetvs.row.kameraImage}</Avatar>
            </div>
        )
      }

    },
    {
      field: "streamName",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "created",
      headerName: "Date Added",
      flex: 1,
    },
    {
      field: "activeStatus",
      headerName: "Active Status",
      flex: 0.5,
      sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      renderCell: (params) => {
        const id = params.row.id; // Assuming 'id' is a unique identifier for the row

        const handleEditAction =        (_id) =>
              {
                navigate(`/Addchannel/${params.row._id}`);
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
                  .delete(`http://localhost:5001/api/livetvs/delete/${deleteItemId}`)
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
  // const [livetv, setlivetv] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5001/api/videos")
  //     .then((response) => response.json())
  //     .then((json) => setlivetv(json));
  // }, []);
  // console.log(livetv);
  return (
    // <Box m="1.5rem 2.5rem">
    //   <FlexBetween>
    //     <Header title="Live TV" subtitle="Welcome to your Live TV" />

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

    // <Box m="1.5rem 2.5rem" ml="350px">
    // <FlexBetween>
    //   {/* <Header title="ADD MOVIE" /> */}

    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"} mt={isSmallScreen ? "70px" : "undefined"}>
      <FlexBetween>
        {/* <Header title="ADD MOVIE" /> */}

        <Box></Box>
      </FlexBetween>

      <Box
        // mt="20px"
        display="grid"
        // gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
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
          title="CHANNEL LISTING"
          // value={data && data.totalCustomers}
          // increase="+14%"
          // description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Container sx={{height:450}}>
        <DataGrid
          sx={{ mt: isSmallScreen ? "10px" : "-60px" }}
          // loading={isLoading || !data}
          getRowId={(row) => row._id}
          // rows={(data && data.transactions) || []}
          rows={livetvs}
          columns={columns}
        />
        </Container>
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

export default Channellist;
