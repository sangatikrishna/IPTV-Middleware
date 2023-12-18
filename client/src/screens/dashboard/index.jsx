import React, { useEffect } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
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
  Container,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import StatBox from "components/StatBox";
import Sidebar from "components/Sidebar";
 
const Dashboard = ({}) => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 601px,max-width:1280px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const { data, isLoading } = useGetDashboardQuery();
useEffect(()=>
{
 
  fetch("")
},[])
const columns = [
  { field: "username", headerName: "UserName", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "createdAt", headerName: "Create Date", flex: 1 },
  { field: "package", headerName: "Package", flex: 0.5, sortable: false },
  { field: "reseller", headerName: "Reseller", flex: 1 },
  { field: "action", headerName: "Action", flex: 1 },
];
const columns1 = [
  { field: "username", headerName: "UserName", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "createdAt", headerName: "Create Date", flex: 1 },
  { field: "action", headerName: "Action", flex: 1 },
];
const columns2 = [
  { field: "username", headerName: "UserName", flex: 1 },
  { field: "visible", headerName: "Visible", flex: 1 },
  { field: "createdAt", headerName: "Create Date", flex: 1 },
  { field: "category", headerName: "Category", flex: 0.5, sortable: false },
  { field: "action", headerName: "Action", flex: 1 },
];
const columns3 = [
  { field: "appname", headerName: "App Name", flex: 1 },
  { field: "version", headerName: "Version", flex: 1 },
  { field: "createdAt", headerName: "Create Date", flex: 1 },
  { field: "firmwareurl", headerName: "Firmwareurl", flex: 0.5, sortable: false },
];
const columns4 = [
  { field: "title", headerName: "Title", flex: 1 },
  { field: "startdate", headerName: "Startdate", flex: 1 },
  { field: "createdAt", headerName: "Create Date", flex: 1 },
  { field: "users", headerName: "Users", flex: 0.5, sortable: false },
];
const columns5 = [
  { field: "ticketno", headerName: "Ticketno", flex: 1 },
  { field: "user", headerName: "User", flex: 1 },
  { field: "subject", headerName: "Subject", flex: 1 },
  { field: "message", headerName: "Message", flex: 1, sortable: false },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "priority", headerName: "Priority", flex: 1 },
  { field: "assignedto", headerName: "Assignedto", flex: 1 },
  { field: "closedate", headerName: "Closedate", flex: 1 },
];
 
  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "50px"}>
    {/* m="1.5rem 3.5rem" ml="20px"> */}
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>
 
      <Box
       // mt="20px"
       mt={isSmallScreen ? "10px" : "50px"}
      //  ml="0px"
       display="grid"
       gridTemplateColumns="repeat(12, 1fr)" 
       // gridAutoRows="500px"
       // gap="20px"
       gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* Your StatBox and DataGrid components can be rendered here */}
        <StatBox
          title="RECENT USERS"
          // icon={
          //   <Email
          //     sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
          //   />
          // }
        />
        <Container sx={{height: 450}}>
        <DataGrid sx={{ mt: "60px" }} rows={[]} columns={columns} />
        <StatBox
          title="RECENT RESELLERS"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
 
        />
        <DataGrid
          sx={{ mt: "60px" }}
          //  sx={{mt:"10px"}}
          rows={[]}
          columns={columns1}
        />
 
        <StatBox
          title="RECENT RESELLERS"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
        }
        />
        <DataGrid sx={{ mt: "60px" }} rows={[]} columns={columns2} />
        <StatBox
          title="RECENT RESELLERS"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
        }
        />
        <DataGrid sx={{ mt: "60px" }} rows={[]} columns={columns3} />
        <StatBox
          title="RECENT RESELLERS"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
        }
        />
        <DataGrid sx={{ mt: "60px" }} rows={[]} columns={columns4} />
 
        <StatBox
          title="RECENT RESELLERS"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
        }
        />
        <DataGrid 
        sx={{ mt: isSmallScreen ? "30px" : "60px" }}
        rows={[]}
        columns={columns5} />
        </Container>
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
              mt: "20px",
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
        <CustomColumnMenu />
      </Box>
    </Box>
  );
};
 
export default Dashboard;
 
