// import React, { useState } from 'react';

// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   ThemeProvider, useTheme,
// } from '@mui/material';
// import { PlaylistAddCircle, LiveTv, ListAlt, Inbox, Sort, Theaters, AddCircleSharp, AutoAwesomeMotionSharp, RadioTwoTone, FastRewind, TheatersTwoTone, MusicNote, PlaylistAdd, LibraryMusic, OndemandVideo, Layers,ChevronLeft, Menu as MenuIcon, SortByAlpha, InventorySharp, CreditCard, AttachMoney, AddCard, Category, Inventory2, PostAdd, Assignment, AssignmentTurnedIn } from '@mui/icons-material';
// import FlexBetween from './FlexBetween';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

// import { Link } from 'react-router-dom';
// import {
// List,
// ListItem,
// Drawer,
//   ListItemIcon,

//   ListItemText,

//   Collapse,

//   ThemeProvider, useTheme,

// } from '@mui/material';

// import { PlaylistAddCircle, LiveTv, ListAlt, Inbox, Sort, Theaters, AddCircleSharp, AutoAwesomeMotionSharp, RadioTwoTone, FastRewind, TheatersTwoTone, MusicNote, PlaylistAdd, LibraryMusic, OndemandVideo, Layers,ChevronLeft, Menu as MenuIcon, SortByAlpha, InventorySharp, CreditCard, AttachMoney, AddCard, Category, Inventory2, PostAdd, Assignment, AssignmentTurnedIn } from '@mui/icons-material';



// import ExpandLess from '@mui/icons-material/ExpandLess';

// import ExpandMore from '@mui/icons-material/ExpandMore';

// // import {    CreditCard, AttachMoney, AddCard, Category, Inventory2, PostAdd, Assignment, AssignmentTurnedIn } from '@mui/icons-material';
// // import FlexBetween from './FlexBetween';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import ExpandLess from '@mui/icons-material/ExpandLess';
// // import ExpandMore from '@mui/icons-material/ExpandMore';
// // import StarBorder from '@mui/icons-material/StarBorder';


// function SidebarMonetize() {
//   // Define state and click handlers for each dropdown
//   const [openDropdown1, setOpenDropdown1] = useState(false);




//   const [openDropdown3, setOpenDropdown3] = useState(false);

 

// //   const [openDropdown4, setOpenDropdown4] = useState(false);

 

// //   const [openDropdown5, setOpenDropdown5] = useState(false);

 

// //   const [openDropdown6, setOpenDropdown6] = useState(false);

 

// //   const [openDropdown7, setOpenDropdown7] = useState(false);

 

// //   const [openDropdown8, setOpenDropdown8] = useState(false);

 

// //   const [openDropdown9, setOpenDropdown9] = useState(false);

 

 

 

// const theme = useTheme();

 

//   // Define click handlers for each dropdown

 

//   const handleDropdown1Click = () => {

 

//     setOpenDropdown1(!openDropdown1);

 

//   };

 

//   const handleDropdown2Click = () => {

 

//     setOpenDropdown2(!openDropdown2);

 

//   };

 

//   const handleDropdown3Click = () => {

 

//     setOpenDropdown3(!openDropdown3);

 

//   }

 

 

 

//   return (

 

//     <ThemeProvider theme={theme}>

 

//     <Drawer anchor="left" variant="permanent" sx={{

 

 

 

// "& .MuiDrawer-paper": {

 

 

 

//   color: theme.palette.secondary[200],

 

 

 

 

 

 

 

//   backgroundColor: theme.palette.background.alt,

 

 

 

 

 

 

 

//   boxSizing: "border-box",

 

 

 

// },

 

 

 

// }}>

 

 

 

//   <h1><center>Monetize</center></h1>

 

//       <List>

 

//         {/* Dropdown 1 */}

 

//         <ListItem button onClick={handleDropdown1Click}>

 

//           <ListItemIcon>

 

//             <Inventory2 />

 

//           </ListItemIcon>

 

//           <ListItemText primary="Box Packages" />

 

//           {openDropdown1 ? <ExpandLess /> : <ExpandMore />}

 

//         </ListItem>

 

//         <Collapse in={openDropdown1} timeout="auto" unmountOnExit>

 

//           <List component="div" disablePadding>

 

//             <ListItem button component={Link} to="/allpackages">

 

//               <ListItemIcon>

 

//                 <InventorySharp />

 

//               </ListItemIcon>

 

//               <ListItemText primary="All Packages" />

 

//             </ListItem>

 

//             <ListItem button component={Link} to="/addpackages">

 

//               <ListItemIcon>

 

//                 <PostAdd />

 

//               </ListItemIcon>

 

//               <ListItemText primary="Add Packages" />

 

//             </ListItem>

 

//           </List>

 

//         </Collapse>

 

 

 

//         {/* Dropdown 2 */}

 

//         <ListItem button onClick={handleDropdown2Click}>

 

//           <ListItemIcon>

 

//             <AttachMoney />

 

//           </ListItemIcon>

 

//           <ListItemText primary="Billing" />

 

//           {openDropdown2 ? <ExpandLess /> : <ExpandMore />}

 

//         </ListItem>

 

//         <Collapse in={openDropdown2} timeout="auto" unmountOnExit>

 

//           <List component="div" disablePadding>

 

//             <ListItem button component={Link} to="/billingtypes">

 

//               <ListItemIcon>

 

//                 <CreditCard />

 

//               </ListItemIcon>

 

//               <ListItemText primary="Billing Types" />

 

//             </ListItem>

 

//             <ListItem button component={Link} to="/addbillingtype">

 

//               <ListItemIcon>

 

//                 <AddCard />

 

//               </ListItemIcon>

 

//               <ListItemText primary="Add Billing Type" />

 

//             </ListItem>

 

//           </List>

 

//         </Collapse>    

 

 

 

 

 

// {/* Dropdown 3 */}

 

//         <ListItem button onClick={handleDropdown3Click}>

 

//           <ListItemIcon>

 

//             <Category />

 

//           </ListItemIcon>

 

//           <ListItemText primary="Products" />

 

//           {openDropdown3 ? <ExpandLess /> : <ExpandMore />}

 

//         </ListItem>

 

//         <Collapse in={openDropdown3} timeout="auto" unmountOnExit>

 

//           <List component="div" disablePadding>

 

//             <ListItem button component={Link} to="/allproducts">

 

//               <ListItemIcon>

 

//                 <Inventory2 />

 

//               </ListItemIcon>

 

//               <ListItemText primary="All products" />

 

//             </ListItem>

 

//             <ListItem button component={Link} to="/addproducts">

 

//               <ListItemIcon>

 

//                 <PostAdd />

 

//               </ListItemIcon>

 

//               <ListItemText primary="Add Products" />

 

//             </ListItem>

 

//             <ListItem button component={Link} to="/assiginproducts">

 

//               <ListItemIcon>

 

//                 <Assignment />

 

//               </ListItemIcon>

 

//               <ListItemText primary="Assigin Products" />

 

//             </ListItem>

 

//             <ListItem button component={Link} to="/assiginedproducts">

 

//               <ListItemIcon>

 

//                 <AssignmentTurnedIn />

 

//               </ListItemIcon>

 

//               <ListItemText primary="Assigined Products" />

 

//             </ListItem>

 

//           </List>

 

//         </Collapse>    

 

//       </List>

 

//     </Drawer>

 

//     </ThemeProvider>

 

//   );

 

// }

 

 

 

// export default SidebarMonetize;

//   const [openDropdown3, setOpenDropdown3] = useState(false);
// //   const [openDropdown4, setOpenDropdown4] = useState(false);
// //   const [openDropdown5, setOpenDropdown5] = useState(false);
// //   const [openDropdown6, setOpenDropdown6] = useState(false);
// //   const [openDropdown7, setOpenDropdown7] = useState(false);
// //   const [openDropdown8, setOpenDropdown8] = useState(false);
// //   const [openDropdown9, setOpenDropdown9] = useState(false);

// const theme = useTheme();
//   // Define click handlers for each dropdown
//   const handleDropdown1Click = () => {
//     setOpenDropdown1(!openDropdown1);
//   };
//   const handleDropdown2Click = () => {
//     setOpenDropdown2(!openDropdown2);
//   };
//   const handleDropdown3Click = () => {
//     setOpenDropdown3(!openDropdown3);
//   }

//   return (
//     <ThemeProvider theme={theme}>
//     <Drawer anchor="left" variant="permanent" sx={{

// "& .MuiDrawer-paper": {

//   color: theme.palette.secondary[200],



//   backgroundColor: theme.palette.background.alt,



//   boxSizing: "border-box",

// },

// }}>

//   <h1><center>Monetize</center></h1>
//       <List>
//         {/* Dropdown 1 */}
//         <ListItem button onClick={handleDropdown1Click}>
//           <ListItemIcon>
//             <Inventory2 />
//           </ListItemIcon>
//           <ListItemText primary="Box Packages" />
//           {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button component={Link} to="/allpackages">
//               <ListItemIcon>
//                 <InventorySharp />
//               </ListItemIcon>
//               <ListItemText primary="All Packages" />
//             </ListItem>
//             <ListItem button component={Link} to="/addpackages">
//               <ListItemIcon>
//                 <PostAdd />
//               </ListItemIcon>
//               <ListItemText primary="Add Packages" />
//             </ListItem>
//           </List>
//         </Collapse>

//         {/* Dropdown 2 */}
//         <ListItem button onClick={handleDropdown2Click}>
//           <ListItemIcon>
//             <AttachMoney />
//           </ListItemIcon>
//           <ListItemText primary="Billing" />
//           {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button component={Link} to="/billingtypes">
//               <ListItemIcon>
//                 <CreditCard />
//               </ListItemIcon>
//               <ListItemText primary="Billing Types" />
//             </ListItem>
//             <ListItem button component={Link} to="/addbillingtype">
//               <ListItemIcon>
//                 <AddCard />
//               </ListItemIcon>
//               <ListItemText primary="Add Billing Type" />
//             </ListItem>
//           </List>
//         </Collapse>    


// {/* Dropdown 3 */}
//         <ListItem button onClick={handleDropdown3Click}>
//           <ListItemIcon>
//             <Category />
//           </ListItemIcon>
//           <ListItemText primary="Products" />
//           {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>

        
//         <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button component={Link} to="/allproducts">
//               <ListItemIcon>
//                 <Inventory2 />
//               </ListItemIcon>
//               <ListItemText primary="All products" />
//             </ListItem>
//             <ListItem button component={Link} to="/addproducts">
//               <ListItemIcon>
//                 <PostAdd />
//               </ListItemIcon>
//               <ListItemText primary="Add Products" />
//             </ListItem>
//             <ListItem button component={Link} to="/assiginproducts">
//               <ListItemIcon>
//                 <Assignment />
//               </ListItemIcon>
//               <ListItemText primary="Assigin Products" />
//             </ListItem>
//             <ListItem button component={Link} to="/assiginedproducts">
//               <ListItemIcon>
//                 <AssignmentTurnedIn />
//               </ListItemIcon>
//               <ListItemText primary="Assigined Products" />
//             </ListItem>
//           </List>
//         </Collapse>    
//       </List>
//     </Drawer>
//     </ThemeProvider>
//   );
// }

// // export default SidebarMonetize;


// // import { Link } from 'react-router-dom';



 

// // function SidebarMonetize() {

// //   // Define state and click handlers for each dropdown

// //   const [openDropdown1, setOpenDropdown1] = useState(false);

// //   const [openDropdown2, setOpenDropdown2] = useState(false);

// //   const [openDropdown3, setOpenDropdown3] = useState(false);

// // //   const [openDropdown4, setOpenDropdown4] = useState(false);

// // //   const [openDropdown5, setOpenDropdown5] = useState(false);

// // //   const [openDropdown6, setOpenDropdown6] = useState(false);

// // //   const [openDropdown7, setOpenDropdown7] = useState(false);

// // //   const [openDropdown8, setOpenDropdown8] = useState(false);

// // //   const [openDropdown9, setOpenDropdown9] = useState(false);

 

// // const theme = useTheme();

// //   // Define click handlers for each dropdown

// //   const handleDropdown1Click = () => {

// //     setOpenDropdown1(!openDropdown1);

// //   };

// //   const handleDropdown2Click = () => {

// //     setOpenDropdown2(!openDropdown2);

// //   };

// //   const handleDropdown3Click = () => {

// //     setOpenDropdown3(!openDropdown3);

// //   }

 

// //   return (

// //     <ThemeProvider theme={theme}>

// //     <Drawer anchor="left" variant="permanent" sx={{

 

// // "& .MuiDrawer-paper": {

 

// //   color: theme.palette.secondary[200],

 

 

 

// //   backgroundColor: theme.palette.background.alt,

 

 

 

// //   boxSizing: "border-box",

 

// // },

 

// // }}>

 

// //   <h1><center>Monetize</center></h1>

// //       <List>

// //         {/* Dropdown 1 */}

// //         <ListItem button onClick={handleDropdown1Click}>

// //           <ListItemIcon>

// //             <Inventory2 />

// //           </ListItemIcon>

// //           <ListItemText primary="Box Packages" />

// //           {openDropdown1 ? <ExpandLess /> : <ExpandMore />}

// //         </ListItem>

// //         <Collapse in={openDropdown1} timeout="auto" unmountOnExit>

// //           <List component="div" disablePadding>

// //             <ListItem button component={Link} to="/allpackages">

// //               <ListItemIcon>

// //                 <InventorySharp />

// //               </ListItemIcon>

// //               <ListItemText primary="All Packages" />

// //             </ListItem>

// //             <ListItem button component={Link} to="/addpackages">

// //               <ListItemIcon>

// //                 <PostAdd />

// //               </ListItemIcon>

// //               <ListItemText primary="Add Packages" />

// //             </ListItem>

// //           </List>

// //         </Collapse>

 

// //         {/* Dropdown 2 */}

// //         <ListItem button onClick={handleDropdown2Click}>

// //           <ListItemIcon>

// //             <AttachMoney />

// //           </ListItemIcon>

// //           <ListItemText primary="Billing" />

// //           {openDropdown2 ? <ExpandLess /> : <ExpandMore />}

// //         </ListItem>

// //         <Collapse in={openDropdown2} timeout="auto" unmountOnExit>

// //           <List component="div" disablePadding>

// //             <ListItem button component={Link} to="/billingtypes">

// //               <ListItemIcon>

// //                 <CreditCard />

// //               </ListItemIcon>

// //               <ListItemText primary="Billing Types" />

// //             </ListItem>

// //             <ListItem button component={Link} to="/addbillingtype">

// //               <ListItemIcon>

// //                 <AddCard />

// //               </ListItemIcon>

// //               <ListItemText primary="Add Billing Type" />

// //             </ListItem>

// //           </List>

// //         </Collapse>    

 

 

// // {/* Dropdown 3 */}

// //         <ListItem button onClick={handleDropdown3Click}>

// //           <ListItemIcon>

// //             <Category />

// //           </ListItemIcon>

// //           <ListItemText primary="Products" />

// //           {openDropdown3 ? <ExpandLess /> : <ExpandMore />}

// //         </ListItem>

// //         <Collapse in={openDropdown3} timeout="auto" unmountOnExit>

// //           <List component="div" disablePadding>

// //             <ListItem button component={Link} to="/allproducts">

// //               <ListItemIcon>

// //                 <Inventory2 />

// //               </ListItemIcon>

// //               <ListItemText primary="All products" />

// //             </ListItem>

// //             <ListItem button component={Link} to="/addproducts">

// //               <ListItemIcon>

// //                 <PostAdd />

// //               </ListItemIcon>

// //               <ListItemText primary="Add Products" />

// //             </ListItem>

// //             <ListItem button component={Link} to="/assiginproducts">

// //               <ListItemIcon>

// //                 <Assignment />

// //               </ListItemIcon>

// //               <ListItemText primary="Assigin Products" />

// //             </ListItem>

// //             <ListItem button component={Link} to="/assiginedproducts">

// //               <ListItemIcon>

// //                 <AssignmentTurnedIn />

// //               </ListItemIcon>

// //               <ListItemText primary="Assigined Products" />

// //             </ListItem>

// //           </List>

// //         </Collapse>    

// //       </List>

// //     </Drawer>

// //     </ThemeProvider>

// //   );

// // }

 

// export default SidebarMonetize;

