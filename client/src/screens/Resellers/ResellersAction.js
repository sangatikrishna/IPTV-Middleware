import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
// import SidebarContent from "components/SidebarContent"
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

const ResellersAction = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1300px)"
  );
  const isNonMobile = useMediaQuery("(min-width: 400px, max-width: 1300px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const { data, isLoading } = useGetDashboardQuery();
  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);

  const columns = [
    {
      field: "reseller_name",
      headerName: "Reseller Name",
      flex: 1,
    },
    {
      field: "reseller_email",
      headerName: "Reseller Email",
      flex: 1,
    },
    {
      field: "customer_name",
      headerName: "Customer Name",
      flex: 1,
    },
    {
      field: "customer_email",
      headerName: "Customer Email",
      flex: 1,
      sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"}>
    {/* m="1.5rem 2.5rem" ml="310px"> */}
      <FlexBetween>
        {/* <Header title="Reseller Action Notification"  /> */}
      </FlexBetween>

      <Box
         // mt="20px"
         mt={isSmallScreen ? "10px" : "50px"}
         ml="0px"
         display="grid"
         gridTemplateColumns="repeat(12, 1fr)"
         // gridAutoRows="500px"
         // gap="20px"
         gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="RESELLER ACTIONS NOTIFICATION"
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
                    <input type="text" aria-controls="data_table" />
                  </label>
                </div>
              </div>
            </div>
          }
        />
        <DataGrid
          // loading={isLoading || !data}
          // getRowId={(row) => row._id}
          // rows={(data && data.transactions) || []}
          sx={{ mt: isSmallScreen ? "30px" : "60px" }}
          rows={[]}
          columns={columns}
        />

        {/* <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button>Reset</Button>

          <Button>Submit</Button>
        </ButtonGroup> */}
      </Box>

      <CustomColumnMenu />

      {/* <SidebarAllCategory/> */}
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

export default ResellersAction;
