import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
// import SidebarContent from "components/SidebarContent"
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
// import "index.css";
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

// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
// import { Sidebar, Menu, MenuItem, SubMenu,sidebarClasses } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css'
// import { Link } from 'react-router-dom';

// import { SettingsOutlined,ChevronLeft,ChevronRightOutlined,HomeOutlined ,ShoppinCartOutlined,Groups2Outlined,ReceiptLongOutlined,PublicOffOutlined,PointOfSaleOutlined,CalendarTodayOutlined,CalendarMonthOutlined,AdminPanelSettingsOutlined,TrendingUpOutlined, ContentCopyOutlined} from '@mui/icons-material';
// import {TocOutlinedIcon} from '@mui/icons-material/TocOutlined';
// import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
// import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import {} from "@mui/icons-material";
import { useState, useEffect } from "react";
import SidebarContent from "components/SidebarContent";
import { Menu as MenuIcon, IconButton } from "@mui/material";
// import Navbar from "components/Navbar";

const Content = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width:1280px)"
  );

  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  // const { data, isLoading } = useGetDashboardQuery();
  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "250px"} mt={isSmallScreen ? "70px" : "undefined"}>
    {/* <Box m="1.5rem 2.5rem" ml="250px"> */}
      <FlexBetween>
        <Header title="CONTENT" />

        <Box></Box>
      </FlexBetween>

      <Box
        // mt="20px"   
        mt={isSmallScreen ? "10px" : "50px"}
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
          title="RECENT USERS"
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
          sx={{ mt: isSmallScreen ? "10px" : "60px" }}
          // loading={isLoading || !data}
          // getRowId={(row) => row._id}
          // rows={(data && data.transactions) || []}
          rows={[]}
          columns={columns}
        />
      </Box>

      {/*
<SidebarContent/> */}

      <CustomColumnMenu />

      {/* <SidebarContent />  */}

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

export default Content;
