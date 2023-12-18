
                                                                                                                                                           import React from "react";
import FlexBetween from "components/FlexBetween";
 
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
 
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
// import SidebarReseller from "components/SidebarResellers";
 
const OnlineResellers = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
  // const { data, isLoading } = useGetDashboardQuery();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
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
      field: "emailAddress",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "onlineStatus",
      headerName: "Online Status",
      flex: 1,
      //   sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "forceaction",
      headerName: "Force Action",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
 
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
 
    // <Box m="1.5rem 2.5rem" ml="300px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"}>
      <FlexBetween>
        {/* <Header title="ADD MOVIE" /> */}
 
        <Box></Box>
      </FlexBetween>
 
      <Box
        // mt="20px"
        mt={isSmallScreen ? "10px" : "50px"}
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        // gap="20px"
        gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="ONLINE RESELLER LIST"
          //   value={data && data.totalCustomers}
          //   increase="+14%"
          //   description="Since last month"
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
                    Search: &nbsp;&nbsp;
                    <input type="text" aria-controls="data_table" />
                  </label>
                </div>
              </div>
            </div>
          }
        />
        <DataGrid
        sx={{ mt: isSmallScreen ? "10px" : "60px" }}
        rows={[]} columns={columns} />
 
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
        {/* <SidebarReseller /> */}
      </Box>
 
      <CustomColumnMenu />
    </Box>
  );
};
 
export default OnlineResellers;
 