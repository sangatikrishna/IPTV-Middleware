import React, { useEffect, useState } from "react";

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



const Update3 = () => {

  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");

  // const { data, isLoading } = useGetDashboardQuery();

  const [updates, setUpdates]= useState([]);
  // useEffect(()=>
  //   {
  //     fetch("http://localhost:5001/api/shahid_app_updates/list")
  //     .then(res=>res.json())
  //     .then(res=>{console.log(res)
  //     setUpdates(res.data)});
  //   },[])


  const columns = [

    {

      field: "version",

      headerName: "Version",

      flex: 1,

    },

    {

      field: "url",

      headerName: "url",

      flex: 1,

    },

    {

      field: "description",

      headerName: "description",

      flex: 1,

    },

    {

      field: "products_id",

      headerName: "products_id",

      flex: 1,

      // renderCell: (params) => params.value.length,

    },

    {

      field: "created_date",

      headerName: "created_date",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    },

    // {

    //     field: "action",

    //     headerName: "Action",

    //     flex: 1,

    //     // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    //   },



  ];



  return (



    <Box m="1.5rem 3.5rem" ml="400px">

      <FlexBetween>

        {/* <Header title="ALL USERS LIST" /> */}

      </FlexBetween>

      {/* <Navbar/> */}



      <Box

        mt="50px"

        display="grid"

        gridTemplateColumns="repeat(12, 1fr)"

        gridAutoRows="160px"

        gap="10px"

        sx={{

          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },

        }}

      >

        {/* ROW 1 */}

        <StatBox

          title="APP UPDATES"



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

               <DataGrid   sx={{mt:"-60px"}}



            // rows={updates}
            rows={[]}

            columns={columns}

          />

      </Box>
      <CustomColumnMenu/>

    </Box>

  );

};



export default Update3;