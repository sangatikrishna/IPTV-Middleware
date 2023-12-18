import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

import Content from "screens/content";
import Sidebardc from "components/sidebardc";
import SidebarContent from "components/SidebarContent";
// import SidebarAllCategory from 'components/SidebarAllCategories';

// import Content from "screens/content";
// import SidebarContent from "components/SidebarContent";

import SidebarAllCategory from "components/SidebarAllCategories";
// import Sidebarpackages from 'components/Sidebarpackages';
// import SidebarPackages from "components/Sidebarmonitize";

// import SidebarAllCategory from 'components/SidebarAllCategories';

// import SidebarAllCategory from 'components/SidebarAllCategories';

// import SidebarAllCategory from "components/SidebarAllCategories";
import SidebarMonetize from "components/SidebarMonetize";
import SidebarReseller from "components/SidebarReseller";

// import Content from 'screens/content';
// import SidebarContent from 'components/SidebarContent';

// import SidebarAllCategory from 'components/SidebarAllCategories';

// import SidebarMonetize from 'components/SidebarMonetize';
// import SidebarReseller from 'components/SidebarResellers';

import { Dashboard } from "@mui/icons-material";

import SidebarAdmin from "components/SidebarAdmin";
// import SidebarMonetize from 'components/SidebarMonetize';

// import { Dashboard } from '@mui/icons-material';
import Sidebarmanage from "components/Sidebarmanage";

// import SidebarAdmin from 'components/SidebarAdmin';
// import SidebarMonetize from 'components/SidebarMonetize';

// import Monteiz from 'screens/Monetize';

// import SidebarMonetize from 'components/SidebarMonetize';
// import SidebarReseller from 'components/SidebarResellers';

// import SidebarMonetize from 'components/SidebarMonetize';
// import SidebarReseller from 'components/SidebarResellers';

// import SidebarAllCategory from 'components/SidebarAllCategories';

// import { Dashboard } from '@mui/icons-material';

// import Monteiz from 'screens/Monetize';

// import Monteiz from 'screens/Monetize';

// import { Dashboard } from '@mui/icons-material';
// import SidebarPackages from "components/SidebarMonetize";
// import SidebarMonetize from 'components/SidebarMonetize';
import SidebarCustomers from "components/SidebarCustomers";
// import Dashboard from "screens/dashboard";

// import SidebarAllCategory from 'components/SidebarAllCategories';

// import { Dashboard } from "@mui/icons-material";
// import Monteiz from "screens/Monetize";
const DashboardLayout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  //returns boolean depending on the min width
  //desktop=true mobile=false
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          sidebarText="dashboard"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Box flexGrow={1}>
        {/* <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}
        {/* <Content
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}

        <Outlet />
      </Box>
    </Box>
  );
};
// const Layout = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   //returns boolean depending on the min width
//   //desktop=true mobile=false
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
//       <Sidebar
//         isNonMobile={isNonMobile}
//         drawerWidth="250px"
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//       />

//       <Box flexGrow={1}>
//         <Navbar
//           isSidebarOpen={isSidebarOpen}
//           setIsSidebarOpen={setIsSidebarOpen}
//         />
//         {/* <Content
//           isSidebarOpen={isSidebarOpen}
//           setIsSidebarOpen={setIsSidebarOpen}
//         /> */}

//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// const Layout1 = () => {

const Layout1 = () => {
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //returns boolean depending on the min width
  //desktop=true mobile=false

  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(false);
  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
        sidebarText="content"
          isSidebarContentOpen={isSidebarContentOpen}
          setIsSidebarContentOpen={setIsSidebarContentOpen}
        />
      {/* <SidebarAllCategory    isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarAllCategoriesOpen={ isSidebarAllCategoriesOpen}
        setIsSidebarAllCategoriesOpen={ setIsSidebarAllCategoriesOpen}/> */}

      {/* <SidebarAllCategory    isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarAllCategoriesOpen={ isSidebarAllCategoriesOpen}
        setIsSidebarAllCategoriesOpen={ setIsSidebarAllCategoriesOpen}/> */}

      {/* <SidebarAllCategory    isNonMobile1={isNonMobile1}*/}

<SidebarContent    isNonMobile1={isNonMobile1}

        drawerWidth="250px"
        isSidebarContentOpen={ isSidebarContentOpen}
        setIsSidebarContentOpen={ setIsSidebarContentOpen}/> 

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

const Layout2 = () => {
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //returns boolean depending on the min width
  //desktop=true mobile=false

  const [isSidebarAllCategoriesOpen, setIsSidebarAllCategoriesOpen] = useState(true);
  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          isSidebarOpen={isSidebarAllCategoriesOpen}
          setIsSidebarOpen={setIsSidebarAllCategoriesOpen}
        />
      <SidebarAllCategory
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarAllCategoriesOpen={isSidebarAllCategoriesOpen}
        setIsSidebarAllCategoriesOpen={setIsSidebarAllCategoriesOpen}
      />

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

// const Layoutpackages = () => {
//   const isNonMobile1 = useMediaQuery("(min-width:600px)");
//   //returns boolean depending on the min width
//   //desktop=true mobile=false
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isSidebarMonetizeOpen, setIsSidebarMonetizeOpen] = useState(true);
//   return (
//     <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
//       <SidebarMonetize
//         isNonMobile1={isNonMobile1}
//         drawerWidth="250px"
//         isSidebarMonetizeOpen={isSidebarMonetizeOpen}
//         setIsSidebarMonetizeOpen={setIsSidebarMonetizeOpen}
//       />

//       {/* <Monteiz/> */}

//       <Box flexGrow={1}>
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// const LayoutResellerlist = () => {
//   const isnonmobile1 = useMediaQuery("(min-width:600px)");

// {/*
//     <SidebarAllCategory    isNonMobile1={isNonMobile1}
//         drawerWidth="250px"
//         isSidebarAllCategoriesOpen={ isSidebarAllCategoriesOpen}
//         setIsSidebarAllCategoriesOpen={ setIsSidebarAllCategoriesOpen}/>  */}

// {/* <SidebarAllCategory    isNonMobile1={isNonMobile1}
//         drawerWidth="250px"
//         isSidebarAllCategoriesOpen={ isSidebarAllCategoriesOpen}
//         setIsSidebarAllCategoriesOpen={ setIsSidebarAllCategoriesOpen}/> */}

//   const [isSidebarResellersOpen, setIsSidebarResellersOpen] = useState(true);

//   return (
//     <Box display={isnonmobile1 ? "flex" : "block"} width="100%" height="100%">
//       <SidebarReseller
//         isNonMobile1={isnonmobile1}
//         drawerWidth="250px"
//         isSidebarResellersOpen={isSidebarResellersOpen}
//         setIsSidebarResellersOpen={setIsSidebarResellersOpen}
//       />

//       <Box flexGrow={1}>
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

const LayoutResellerlist = () => {
  const isnonmobile1 = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isSidebarResellersOpen, setIsSidebarResellersOpen] = useState(true);

  return (
    <Box display={isnonmobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          isSidebarOpen={isSidebarResellersOpen}
          setIsSidebarOpen={setIsSidebarResellersOpen}
        />
      <SidebarReseller
        // isNonMobile1={isnonmobile1}
        // drawerWidth="250px"
        // isSidebarResellersOpen={isSidebarResellersOpen}
        // setIsSidebarResellersOpen={setIsSidebarResellersOpen}
      />

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

// const  Layout1 = () => {

const LayoutMonteize = () => {
  // const [isSidebarAllCategoriesOpen, setIsSidebarAllCategoriesOpen] = useState(true);

    
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  //returns boolean depending on the min width
  //desktop=true mobile=false
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMonetizeOpen, setIsSidebarMonetizeOpen] = useState(true);
  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          sidebarText="monetize"
          isSidebarMonetizeOpen={isSidebarMonetizeOpen}
          setIsSidebarMonetizeOpen={setIsSidebarMonetizeOpen}
        />
      {/* /* const  Layout2 = () => { */}
      {/* const isNonMobile1 = useMediaQuery("(min-width:600px)"); */}
      {/* //returns boolean depending on the min width   //desktop=true mobile=false */}

      {/* <SidebarContent
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarAllCategoriesOpen={isSidebarAllCategoriesOpen}
        setIsSidebarAllCategoriesOpen={setIsSidebarAllCategoriesOpen}
      /> */}
  {/* <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}
      <SidebarMonetize
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarMonetizeOpen={isSidebarMonetizeOpen}
        setIsSidebarMonetizeOpen={setIsSidebarMonetizeOpen}
      />

      {/* <Monteiz/> */}

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

// const Layout3 = () => {
//   const isNonMobile1 = useMediaQuery("(min-width:600px)");
//   //returns boolean depending on the min width
//   //desktop=true mobile=false
//   // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isSidebarMonetizeOpen, setIsSidebarMonetizeOpen] = useState(true);
//   return (
//     <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
//         <Navbar
//           isSidebarOpen={isSidebarMonetizeOpen}
//           setIsSidebarOpen={isSidebarMonetizeOpen}
//         />
//       <SidebarMonetize
//         isNonMobile1={isNonMobile1}
//         drawerWidth="250px"
//         isSidebarMonetizeOpen={isSidebarMonetizeOpen}
//         setIsSidebarMonetizeOpen={setIsSidebarMonetizeOpen}
//       />

//       {/* <Monteiz/> */}

//       <Box flexGrow={1}>
//         {/* <Navbar /> */}
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

{
  /* const LayoutResellerlist = ()=>{

 

//   const isnonmobile1 = useMediaQuery("(min-width:600px)");

//   const[isSidebarResellersOpen, setIsSidebarResellersOpen] = useState(true);

 


//   return (


// <SidebarContent    isNonMobile1={isNonMobile1}

//     <Box display={isnonmobile1? "flex" : "block"} width="100%" height="100%">

 

// <SidebarReseller  isNonMobile1={isnonmobile1}


//         drawerWidth="250px"


// <Box flexGrow={1}>

//         <Outlet />

//         isSidebarResellersOpen={ isSidebarResellersOpen}

//         setIsSidebarResellersOpen={ setIsSidebarResellersOpen}/>

 

// <Box flexGrow={1}>

// <Navbar/>

//       <Outlet/>

//       </Box>

//     </Box>

//   );

// };
// const  Layout2 = () => {

// const  Layoutmonetize = () => {

// // const  Layout3 = () => {

// //   const isNonMobile1 = useMediaQuery("(min-width:600px)");
// //   //returns boolean depending on the min width 
// //   //desktop=true mobile=false

// //   const [isSidebarPackagesOpen, setIsSidebarPackageOpen] = useState(true);
// //   return (
// //     <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">



// // <SidebarMonetize    isNonMobile1={isNonMobile1}
// //         drawerWidth="250px"
// //         isSidebarPackagesOpen={ isSidebarPackagesOpen}
// //         setIsSidebarPackageOpen={ setIsSidebarPackageOpen}/>


// // <Box flexGrow={1}>
    
    


// //         <Outlet />
      
// //       </Box>


//       </Box>

const  Layout1 = () => {

// //     </Box>

// //   );
// // };




const  LayoutMonetize = () => {


  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  //returns boolean depending on the min width 
  //desktop=true mobile=false
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMonetizeOpen, setIsSidebarMonetizeOpen] = useState(true);
  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">



<SidebarMonetize    isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarMonetizeOpen={ isSidebarMonetizeOpen}
        setIsSidebarMonetizeOpen={ setIsSidebarMonetizeOpen}/>

{/* <Monteiz/> */
}

{
  /* <Box flexGrow={1}>
    <Outlet/>
      
    
    </Box>
  );
}; */
}

const LayoutAdmin = () => {
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //returns boolean depending on the min width

  //desktop=true mobile=false

  const [isSidebarAdminOpen, setIsSidebarAdminOpen] = useState(true);

  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          isSidebarOpen={isSidebarAdminOpen}
          setIsSidebarOpen={setIsSidebarAdminOpen}
        />
      <SidebarAdmin
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarAdminOpen={isSidebarAdminOpen}
        setIsSidebarAdminOpen={setIsSidebarAdminOpen}
      />

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

const LayoutPackage = () => {
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //returns boolean depending on the min width

  //desktop=true mobile=false

  const [isSidebarPackageOpen, setIsSidebarPackageOpen] = useState(true);

  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          isSidebarOpen={isSidebarPackageOpen}
          setIsSidebarOpen={setIsSidebarPackageOpen}
        />
      <SidebarMonetize
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarAdminOpen={isSidebarPackageOpen}
        setIsSidebarAdminOpen={setIsSidebarPackageOpen}
      />

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

// const  Layoutpackages = () => {

//   const isNonMobile1 = useMediaQuery("(min-width:600px)");
//   //returns boolean depending on the min width
//   //desktop=true mobile=false

//   const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);
//   return (
//     <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">

// <SidebarPackages isNonMobile1={isNonMobile1}
//         drawerWidth="250px"
//         isSidebarContentOpen={ isSidebarContentOpen}
//         setIsSidebarContentOpen={ setIsSidebarContentOpen}/>

// <Box flexGrow={1}>

//         <Outlet />

//       </Box>

//     </Box>

//   );
// };
const Layoutdc = () => {
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //returns boolean depending on the min width

  //desktop=true mobile=false

  const [isSidebardc, setISidebardc] = useState(true);

  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          isSidebarDcOpen={isSidebardc}
          setIsSidebarDcOpen={setISidebardc}
        />
      <Sidebardc
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarDcOpen={isSidebardc}
        setIsSidebarDcOpen={setISidebardc}
      />

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

const Layoutmanage = () => {
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //returns boolean depending on the min width
  //desktop=true mobile=false

  const [isSidebarManageOpen, setIsSidebarManageOpen] = useState(true);
  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          isSidebarOpen={isSidebarManageOpen}
          setIsSidebarOpen={setIsSidebarManageOpen}
        />
      <Sidebarmanage
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarManageOpen={isSidebarManageOpen}
        setIsSidebarManageOpen={setIsSidebarManageOpen}
      />

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};
const LayoutCustomers = () => {
  const isNonMobile1 = useMediaQuery("(min-width:600px)");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //returns boolean depending on the min width

  //desktop=true mobile=false

  const [isSidebarCustomersOpen, setIsSidebarCustomersOpen] = useState(true);

  return (
    <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">
        <Navbar
          isSidebarOpen={isSidebarCustomersOpen}
          setIsSidebarOpen={setIsSidebarCustomersOpen}
        />
      <SidebarCustomers
        isNonMobile1={isNonMobile1}
        drawerWidth="250px"
        isSidebarCustomersOpen={isSidebarCustomersOpen}
        setIsSidebarCustomersOpen={setIsSidebarCustomersOpen}
      />

      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};
{
  /* 
//   const isNonMobile1 = useMediaQuery("(min-width:600px)");
//   //returns boolean depending on the min width
//   //desktop=true mobile=false
//   // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isSidebarMonetizeOpen, setIsSidebarMonetizeOpen] = useState(true);
//   return (
//     <Box display={isNonMobile1 ? "flex" : "block"} width="100%" height="100%">

// <SidebarMonetize    isNonMobile1={isNonMobile1} */
}
//         drawerWidth="250px"
//         isSidebarMonetizeOpen={ isSidebarMonetizeOpen}
//         setIsSidebarMonetizeOpen={ setIsSidebarMonetizeOpen}/>

// export default Layout;

// export { Layout1, Layout2 };

// export { DashboardLayout };

// const LayoutResellerlist = ()=>{

//   const isnonmobile1 = useMediaQuery("(min-width:600px)");
//   const[isSidebarResellersOpen, setIsSidebarResellersOpen] = useState(true);

//   return (
//     <Box display={isnonmobile1? "flex" : "block"} width="100%" height="100%">

// <SidebarReseller  isNonMobile1={isnonmobile1}
//         drawerWidth="250px"
//         isSidebarResellersOpen={ isSidebarResellersOpen}
//         setIsSidebarResellersOpen={ setIsSidebarResellersOpen}/>

// <Box flexGrow={1}>

//       <Outlet/>
//       </Box>
//     </Box>
//   );
// };

// const isNonMobile1 = useMediaQuery("(min-width:600px)");

//returns boolean depending on the min width

//desktop=true mobile=false

// export default Layout;
export default DashboardLayout;
export { Layout1, Layout2, LayoutMonteize, LayoutResellerlist, LayoutPackage };

export { LayoutCustomers };

// export { DashboardLayout}
// export {LayoutResellerlist}
// export { Layout3 };

// export { Layout3 }

export { LayoutAdmin };

export { Layoutmanage };

export { Layoutdc };

// export { LayoutResellerlist };
