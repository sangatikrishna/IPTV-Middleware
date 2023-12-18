import React, {useEffect, useState} from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import CustomColumnMenu from "components/DataGridCustomColumnMenu"

 

import {

  DownloadOutlined,

  Email,

  PointOfSale,

  PersonAdd,

  Traffic,
  Update,

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

import Navbar from "components/Navbar";

 

const Allmessage3 = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");

  // const { data, isLoading } = useGetDashboardQuery();

 

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
  
        headerName: "Repeat interval",
  
        flex: 1,
  
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  
      },

      {

        field: "status",
  
        headerName: "Status",
  
        flex: 1,
  
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  
      },

    {

        field: "action",

        headerName: "Action",

        flex: 1,

        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

      },

     

  ];

  const [shahidusermessage, setshahidusermessage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/shahidusermessagesRoutes")
      .then((response) => response.json())
      .then((json) => setshahidusermessage(json));
  }, []);
  console.log(shahidusermessage);

  return (

 

    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"}>

      <FlexBetween>

        {/* <Header title="ALL USERS LIST" /> */}

      </FlexBetween>

      {/* <Navbar/> */}

 

      <Box

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

          title="APP MESSAGE"

 

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

               <DataGrid   
          sx={{ mt: isSmallScreen ? "30px" : "60px" }}

         

            rows={shahidusermessage}

            columns={columns}

          />

      </Box>
      <CustomColumnMenu/>

    </Box>

  );

};

 

export default Allmessage3;