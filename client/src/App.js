import React, { lazy, Suspense } from "react";

import { CssBaseline, Switch, ThemeProvider, useMediaQuery } from "@mui/material";

import { createTheme } from "@mui/material/styles";

import { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { themeSettings } from "themes";
// import useMediaQuery from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";

import UserContext from "utils/UserContext";

// import Dashboard from "screens/dashboard";

import Content from "screens/content";
import DcList from "screens/dc elements/dc";
import FormBox from "screens/dc elements/Addcategory";
import ContentSortable from "screens/dc elements/contentsortable";

import Sortable from "screens/dc elements/categorysortable";

import {
  Layout1,
  Layout2,
  // Layout3,
  Layoutmanage,
  LayoutMonetize,
  LayoutResellerlist,
} from "screens/layout";

import Allproducts from "screens/MonetizeElements/Products/Allproducts";

import { LayoutMonteize } from "screens/layout";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./utils/firebase";

import { addUser, removerUser, removerUSer } from "utils/userSlice";
import Addreseller from "screens/Resellers/AddReseller";

import Allreseller from "screens/Resellerelements/Allreseller";

import AllPackages from "screens/MonetizeElements/Packages/boxpackages/allpackages";
import Billingtype from "screens/MonetizeElements/Packages/billing/billingtype";
import AddBillingType from "screens/MonetizeElements/Packages/billing/addbillingtype";
import Addpackage from "screens/MonetizeElements/Packages/boxpackages/addpackages";
import SazpinNewCustomers from "screens/Customers/sazpinnewcustomers";
import Customer_Saz1 from "screens/Customers/Customer_Saz1";
import Addcustomer_saz1 from "screens/Customers/addCustomer_Saz1";
import Customer_Saz2 from "screens/Customers/Customer_Saz2";
import Customer_Saz3 from "screens/Customers/Customer_Saz3";
import Notifications from "screens/Customers/Notifications";
// import Playlist_Saz1 from "screens/administrator/Playlist_Saz1";
// import Playlist_Saz2 from "screens/administrator/Playlist_Saz2";
// import Playlist_Saz3 from "screens/administrator/Playlist_Saz3";

import { LayoutCustomers } from "screens/layout";

import { LayoutAdmin, LayoutPackage } from "screens/layout";

import Layout, { Layoutdc } from "screens/layout";

import MoviesList from "screens/allcategories/moviecategories/moviecategory";

import AddCategoryMovie from "screens/allcategories/moviecategories/addcategory";

import RadioCategory from "screens/allcategories/radiocategories/radiocategory";

import AddCategoryRadio from "screens/allcategories/radiocategories/addcategory";

import LiveTvCategory from "screens/allcategories/livetvcategories/livetvcategory";

import AddCategoryLiveTv from "screens/allcategories/livetvcategories/addcategory";

import TimeshiftTvCategory from "screens/allcategories/timeshifttvcategories/timeshiftvcategory";

import AddCategoryTimeShift from "screens/allcategories/timeshifttvcategories/addcategory";

import AddCategorySeries from "screens/allcategories/seriescategories/addseriesname";

import ShowsCategory from "screens/allcategories/showscategories/showscategory";

import AddCategoryShows from "screens/allcategories/showscategories/addcategory";

import ShowsNames from "screens/allcategories/showscategories/showsnames";

import AddShowsNames from "screens/allcategories/showscategories/addshowsnames";

import SongCategoryList from "screens/allcategories/songcategories/songcategorylist";

import AddCategorySong from "screens/allcategories/songcategories/addsongcategoryname";

import Addchannel from "screens/contentelements/livetv/Addchannel";

import Channellist from "screens/contentelements/livetv/ChannelList";

import Addmovie from "screens/contentelements/movies/AddMovie";

import Movielist from "screens/contentelements/movies/Movielist";

import AddSeries from "screens/contentelements/series/AddSeries";

import AddRadio from "screens/contentelements/radio/AddRadio";

import RadioList from "screens/contentelements/radio/RadioList";

import AddSong from "screens/contentelements/songs/AddSongs";

import Songslist from "screens/contentelements/songs/SongsList";

import ChannelListing from "screens/contentelements/Catchup/Allchannels";

import AddTimeShift from "screens/contentelements/Timeshift/Addtimeshift";

import AddTimeShiftTvChannel from "screens/contentelements/Timeshift/Timeshifttvchannel";

import AddShow from "screens/contentelements/Showepisodes/Addshowepisode";

import ShowEpisodeList from "screens/contentelements/Showepisodes/Showepisodelist";

//set up material UI

import DashboardLayout from "screens/layout";
import Register from "components/Register";
import Login from "components/Login";

import AllBanner from "screens/dc elements/Allbanner";
import AddContent from "screens/dc elements/Addcontent";
import AddBanner from "screens/dc elements/Addbanner";
import BannerSortable from "screens/dc elements/BannerSortable";
import AddCategory from "screens/dc elements/Addcategory";
import AllCategory from "screens/dc elements/Allcategory";
import Allcontent from "screens/dc elements/Allcontent";

import Update2 from "screens/Manage/SazpinDeviceupdates/update";
import Addupdate2 from "screens/Manage/SazpinDeviceupdates/addupdate";
import Update3 from "screens/Manage/ShahidDeviceupdates/update";
import AddUpdates3 from "screens/Manage/ShahidDeviceupdates/addupdate";

import Update6 from "screens/Manage/Sazpinplusdeviceupdates/updates";
import AddUpdates6 from "screens/Manage/Sazpinplusdeviceupdates/addupdate";
import Update7 from "screens/Manage/Sazpinnewdeviceupdates/update";
import AddUpdates7 from "screens/Manage/Sazpinnewdeviceupdates/addupdate";

import Update9 from "screens/Manage/_Deviceupdates/updates";
import AddUpdates9 from "screens/Manage/_Deviceupdates/addupdate";

import Allmessage1 from "screens/Manage/Messages/allmessage";
import AddMessage1 from "screens/Manage/Messages/addmessage";
import Allmessage2 from "screens/Manage/Franceusermessage/allmessage";
import AddMessage2 from "screens/Manage/Franceusermessage/addmessage";
import Allmessage3 from "screens/Manage/Shahidusermessage/allmessage";
import AddMessage3 from "screens/Manage/Shahidusermessage/addmessage";
import Allmessage4 from "screens/Manage/Multiusermessage/allmessage";
import AddMessage4 from "screens/Manage/Multiusermessage/addmessage";
import Allmessage5 from "screens/Manage/ShahidM5usermessage/allmessage";
import AddMessage5 from "screens/Manage/ShahidM5usermessage/addmessage";
import Allmessage6 from "screens/Manage/Zoomtakusermessage/allmessage";
import AddMessage6 from "screens/Manage/Zoomtakusermessage/addmessage";

import Allmessage11 from "screens/Manage/Livemessage/appmessage";
import Allmessage12 from "screens/Manage/Shahidnewmessage/allmessage";
import AddMessage12 from "screens/Manage/Shahidnewmessage/addmessage";
import All from "screens/Manage/Inventary/all";

import AllAdministrator from "screens/administrator/alladministrator";
import Addadminstrator from "screens/administrator/addadministrator";

import AssignProducts from "screens/MonetizeElements/Products/AssignProducts";
import Resellers from "screens/Resellers/ResellersAction";

import { LiveTv} from "@mui/icons-material";

//set up material UI

// import DashboardLayout from "screens/layout"

// import Register from "components/Register";

//set up material UI

// import Register from "components/Register";
// import Login from "components/Login";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import { addUser, removerUser, removerUSer } from "utils/userSlice";
import AssiginedProducts from "screens/MonetizeElements/Products/AssignedProducts";

import OnlineResellers from "screens/Resellers/OnlineResellers";

import AddProduct from "screens/MonetizeElements/Products/AddProducts";

import ResellersLogin from "screens/Resellers/ResellerLoginNotification";
import Addcustomer from "screens/Customers/addcustomer";
import Navbar from "components/Navbar";
import ResellersAction from "screens/Resellers/ResellersAction";
import Moviesortablelist from "screens/allcategories/moviecategories/moviesortablelist";
import Songcatsortlist from "screens/allcategories/songcategories/songcatsortablelist";
import Shownamesortablelist from "shownamesortablelist";
import Seriesnamesortablelist from "screens/allcategories/seriescategories/seriesnamesortablelist";
import Timeshiftsortablelist from "screens/allcategories/timeshifttvcategories/timeshiftsortablelist";
import Livetvsortablelist from "screens/allcategories/livetvcategories/livetvsortablelist";
import Radiosortablelist from "screens/allcategories/radiocategories/radiosortablelist";
import Showcategorysortablelist from "screens/allcategories/showscategories/showcategorysortablelist";
import SortableChannel from "screens/contentelements/livetv/SortableChannel";
import MovieSortableList from "screens/contentelements/movies/MovieSortableList";
import Timeshiftchannelsort from "screens/contentelements/Timeshift/Timeshiftchannelsort";
import RadioSortableList from "screens/contentelements/radio/RadioSortableList";
import ShowsEpisodeSort from "screens/contentelements/Showepisodes/ShowsEpisodeSort";
import SeriesEpisodesSortableList from "screens/contentelements/series/SeriesEpisodesSortableList";
import SongsSortableList from "screens/contentelements/songs/SongsSortableList";
import SeriesEpisodesList from "screens/contentelements/series/SeriesEpisodeList";
import Seriesnamelist from "screens/allcategories/seriescategories/seriesnamelist";
import Saz1_MainURL from "screens/administrator/Saz1_MainURL";
import Saz2_MainURL from "screens/administrator/Saz2_MainURL";
import Saz3_MainURL from "screens/administrator/Saz3_MainURL";
import Demoplaylist2 from "screens/administrator/Demo_saz_playlist_2/All_Playlist"
import Adddemoplaylist2 from "screens/administrator/Demo_saz_playlist_2/Add_Playlist"
import Demoplaylist1 from "screens/administrator/Demo_saz_playlist_1/All_Playlist"
import Adddemoplaylist1 from "screens/administrator/Demo_saz_playlist_1/Add_Playlist"
import Demoplaylist3 from "screens/administrator/Demo_saz_playlist_3/All_Playlist"
import Adddemoplaylist3 from "screens/administrator/Demo_saz_playlist_3/Add_Playlist"

import Addcustomer_saz2 from "screens/Customers/addCustomer_Saz2";
import Addcustomer_saz3 from "screens/Customers/addCustomer_Saz3";

import AllSaz_playlist_1 from "screens/administrator/Saz_playlist_1/allSaz_playlist_1";
import AddSaz_playlist_1 from "screens/administrator/Saz_playlist_1/addSaz_playlist_1";
import AllSaz_playlist_2 from "screens/administrator/Saz_playlist_2/allSaz_playlist_2";
import AddSaz_playlist_2 from "screens/administrator/Saz_playlist_2/addSaz_playlist_2";
import AllSaz_playlist_3 from "screens/administrator/Saz_playlist_3/allSaz_playlist_3";
import AddSaz_playlist_3 from "screens/administrator/Saz_playlist_3/addSaz_playlist_3";
// import Addcustomer_saz1 from "screens/Customers/addCustomer_Saz1";



// import { LayoutResellerlist } from "screens/layout";

const Dashboard = lazy(() => import("screens/dashboard"));

// const Layout1=lazy(()=>import ("screens/layout"))

//set up material UI

function App() {
  // const dispatch = useDispatch();

  //to dispacth an action

  const dispatch = useDispatch();

  // const navigate=useNavigate();

  //authentication

  // const [userName, setUserName] = useState();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties

  //       // https://firebase.google.com/docs/reference/js/auth.user

  //       const { uid, displayName, email } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //     } else {
  //       // User is signed out

  //       dispatch(removerUser());
  //     }
  //   });
  // }, []);

  //subscribing to the store using a Selector

  //gives access to store

  const mode = useSelector((state) => state.global.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isNotMediumScreen = useMediaQuery("(min-width:960px)");
  
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>
            <Route path="/" element={<Login />}></Route>

            <Route element={<DashboardLayout />}>
              <Route
                path="/dashboard"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Dashboard />
                  </Suspense>
                }
              />
            </Route>

            <Route element={<Layout1 />}>
              <Route path="/content" element={<Content />} />
              <Route path="/Addchannel" element={<Addchannel />} />
              <Route path="/Addchannel/:_id" element={<Addchannel />} />
              <Route path="/ListChannel" element={<Channellist />} />
              <Route path="/Dropdown2Option2" element={<MovieSortableList />} />
              <Route path="/AddMovie" element={<Addmovie />} />
              <Route path="/AddMovie/:_id" element={<Addmovie />} />
              <Route path="/MovieList" element={<Movielist />} />
              <Route path="/AddSeriesEpisodes" element={<AddSeries />} />
              <Route path="/AddSeriesEpisodes/:_id" element={<AddSeries />} />
              <Route path="/Addradio" element={<AddRadio />} />
              <Route path="/Addradio/:_id" element={<AddRadio />} />
              <Route path="/RadioList" element={<RadioList />} />
              <Route path="/AddSongs" element={<AddSong />} />
              <Route path="/AddSongs/:_id" element={<AddSong />} />
              <Route path="/SongsList" element={<Songslist />} />
              <Route path="/CatchupList" element={<ChannelListing />} />
              <Route path="/AddtimeshiftChannel" element={<AddTimeShift />} />
              <Route path="/AddtimeshiftChannel/:_id" element={<AddTimeShift />} />
              <Route path="/SeriesEpisodesList" element={<SeriesEpisodesList />} />
              <Route path="/SortableChannel" element={<SortableChannel />} />
              <Route path="/radioSort" element={<RadioSortableList />} />
              <Route
                path="/SeriesEpisodesSortableList"
                element={<SeriesEpisodesSortableList />}
              />
              <Route path="/ShowsEpisodeSort" element={<ShowsEpisodeSort />} />
              <Route path="/SongsSort" element={<SongsSortableList />} />
              <Route
                path="/TimeshiftChannelSort"
                element={<Timeshiftchannelsort />}
              />
              <Route
                path="/timeshiftChannelList"
                element={<AddTimeShiftTvChannel />}
              />
              <Route path="/AddShowEpisodes" element={<AddShow />} />
              <Route path="/AddShowEpisodes/:_id" element={<AddShow />} />
              <Route
                path="/ShowsEpisodeList"
                element={<ShowEpisodeList />}
              ></Route>
            </Route>

            <Route path="/live tv" element={<liveTv />} />

            <Route element={<Layout2 />}>
              <Route
                path="/AllCategories/MoviesCategory"
                element={<MoviesList />}
              />
              <Route path="/MoviesCategory" element={<MoviesList />} />
              <Route
                path="/MovieCategory/AddCategory"
                element={<AddCategoryMovie />}
              />
              <Route
                path="/MovieCategory/AddCategory/:_id"
                element={<AddCategoryMovie />}
              />
              <Route path="/MoviescatSort" element={<Moviesortablelist />} />

              <Route path="/RadioCategory" element={<RadioCategory />} />
              <Route
                path="/RadioCategory/AddCategory"
                element={<AddCategoryRadio />}
              />
              <Route
                path="/AddCategory/:_id"
                element={<AddCategoryRadio />}
              />
              <Route path="/SortRadiocat" element={<Radiosortablelist />} />
              <Route path="/LiveTvCategory" element={<LiveTvCategory />} />
              <Route
                path="/LiveCategory/AddCategory"
                element={<AddCategoryLiveTv />}
              />
              <Route
                path="/LiveCategory/AddCategory/:_id"
                element={<AddCategoryLiveTv />}
              />
              <Route
                path="/LiveTvcatSortableList"
                element={<Livetvsortablelist />}
              />
              <Route
                path="/TimeshiftTvCategory"
                element={<TimeshiftTvCategory />}
              />
              <Route
                path="/TimeshiftCategory/AddCategory"
                element={<AddCategoryTimeShift />}
              />
               
              <Route
                path="/TimeshiftCategory/AddCategory/:_id"
                element={<AddCategoryTimeShift />}
              />
              <Route
                path="/Timeshiftcatsort"
                element={<Timeshiftsortablelist />}
              />

              <Route path="/Seriesnamelist" element={<Seriesnamelist />} />
              <Route
                path="/SeriesCategory/AddseriesName"
                element={<AddCategorySeries />}
              />
              <Route
                path="/SeriesCategory/AddseriesName/:_id"
                element={<AddCategorySeries />}
              />
              <Route
                path="/seriesNameSortableList"
                element={<Seriesnamesortablelist />}
              />
              <Route path="/ShowsCategory" element={<ShowsCategory />} />
              <Route
                path="/ShowsCategory/ShowsAddCategory"
                element={<AddCategoryShows />}
              />
              <Route
                path="/ShowsCategory/ShowsAddCategory/:_id"
                element={<AddCategoryShows />}
              />
              <Route path="/ShowsNames" element={<ShowsNames />} />
              <Route
                path="/ShowsNames/AddShowsNames"
                element={<AddShowsNames />}
              />
               <Route
                path="/ShowsNames/AddShowsNames/:_id"
                element={<AddShowsNames />}
              />
              <Route
                path="/ShowsnamecatSort"
                element={<Shownamesortablelist />}
              />
              <Route
                path="/ShowscatSort"
                element={<Showcategorysortablelist />}
              />
              <Route path="/SongCategoryList" element={<SongCategoryList />} />
              {/* <Route path="/SongCategoryList/:_id" element={<SongCategoryList />} /> */}
              <Route
                path="/SongCategoryList/AddSongCategoryName"
                element={<AddCategorySong />}/>
                <Route
                path="/SongCategoryList/AddSongCategoryName/:_id"
                element={<AddCategorySong />}/>
              <Route path="/SongcatSort" element={<Songcatsortlist />}></Route>
            </Route>

           

            <Route element={<LayoutMonteize />}>
              <Route path="/monetize" element={<AllPackages />} />
              <Route path="/allproducts" element={<Allproducts />} />
              <Route path="/assignedproducts" element={<AssiginedProducts />} />
              <Route path="/addproducts" element={<AddProduct />} />
              <Route path="/addproducts/:_id" element={<AddProduct />} />
              <Route path="/AssignProducts" element={<AssignProducts />} />
              <Route path="/AssignProducts/:_id" element={<AssignProducts />} />
            </Route>

           
            <Route element={<Layoutdc />}>
              <Route path="/dc" element={<Allcontent />} />
              {/* <Route path="/allcontent" element={<DcList />} /> */}
              <Route path="/categorysortable" element={<Sortable />} />
              <Route path="/dc/addcategory" element={<AddCategory />} />
              <Route path="/dc/addcategory/:_id" element={<AddCategory />} />
              <Route path="/allbanner" element={<AllBanner />} />
              <Route path="/ContentSortable" element={<ContentSortable />} />
              <Route path="/addcontent" element={<AddContent />} />
              <Route path="/addbanner" element={<AddBanner />} />
              <Route path="/addbanner/:_id" element={<AddBanner />} />
              <Route path="/bannersortable" element={<BannerSortable />} />
              <Route path="/addcontent/:_id" element={<AddContent />} />
              <Route path="/addcontent" element={<AddContent />} />
              <Route path="/allcontent" element={<Allcontent />} />
              <Route path="/allcategory" element={<AllCategory />} />
              {/* <Route path="/Adddc" element = {<Adddc/>}/> */}
            </Route>

            {/* <Route element={<LayoutResellerlist />}>

<Route path="/monetize" element={<Navigate to ="monetize" replace/>}/>
            </Route>  */}

            <Route element={<LayoutCustomers />}>
              <Route path="/customers" element={<SazpinNewCustomers/>} />
              <Route
                path="/Customers/sazpinnewcustomers"
                element={<SazpinNewCustomers/>}
              ></Route>
              <Route
                path="/Customers/addcustomer"
                element={<Addcustomer/>}
              ></Route>
               <Route
                path="/Customers/addcustomer/:_id"
                element={<Addcustomer/>}
              ></Route>
              <Route path="/Customers/Customer_Saz1" element={<Customer_Saz1/>}/>

              <Route path="/Customers/addcustomer_saz1" element={<Addcustomer_saz1/>}/>
              <Route path="/Customers/addcustomer_saz1/:_id" element={<Addcustomer_saz1/>}/>
              <Route path="/Customers/Customer_Saz2" element={<Customer_Saz2/>}/>
              <Route path="/Customers/addcustomer_saz2" element={<Addcustomer_saz2/>}/>
              <Route path="/Customers/addcustomer_saz2/:_id" element={<Addcustomer_saz2/>}/>
              <Route path="/Customers/Customer_Saz3" element={<Customer_Saz3/>}/>
              <Route path="/Customers/addcustomer_saz3" element={<Addcustomer_saz3/>}/>
              <Route path="/Customers/addcustomer_saz3/:_id" element={<Addcustomer_saz3/>}/>

              {/* <Route path="/Customers/addcustomer_saz1" element={<Addcustomer_saz1/>}/> */}
              {/* <Route path="/Customers/addcustomer_saz1/:_id" element={<Addcustomer_saz1/>}/> */}
              <Route path="/Customers/Customer_Saz3" element={<Customer_Saz3/>}/>
              <Route path="/Customers/Notifications" element={<Notifications/>}/>

            </Route>

            <Route element={<LayoutPackage />}>
              <Route path="/monetize" element={<AllPackages />} />
              <Route path="/allpackages" element={<AllPackages />}></Route>
              <Route path="/billingtypes" element={<Billingtype />}></Route>

              <Route path="/addpackages" element={<Addpackage />} />
              <Route path="/addpackages/:_id" element={<Addpackage />} />

              <Route path="/addpackages/:_id" element={<Addpackage />} />

              <Route
                path="/addbillingtype"
                element={<AddBillingType />}
              ></Route>
              <Route
                path="/addbillingtype/:_id"
                element={<AddBillingType />}
              ></Route>
            </Route>
            <Route element={<LayoutResellerlist />}>
              <Route path="/resellers" element={<Allreseller />} />

              <Route path="/allresellers" element={<Allreseller />} />

              <Route path="/addresellers" element={<Addreseller />} />
              <Route path="/addresellers/:_id" element={<Addreseller />} />

              <Route path="/onlineresellers" element={<OnlineResellers />} />

              <Route
                path="/resellersloginnotfication"
                element={<ResellersLogin />}
              />

              <Route
                path="/resellersactionotification"
                element={<ResellersAction />}
              />

              <Route
                path="/resellersregistrationform"
                element={<Addreseller />}
              />
            </Route>

            <Route element={<Layoutmanage />}>
              <Route path="/manage" element={<Update2 />} />
              {/* <Route path="/DeviceUpdate/Update" element={<Update1 />} /> */}
              {/* <Route path="/DeviceUpdate/AddUpdate" element={<Addupdates1 />} /> */}
              <Route path="/SazpinUpdate/Update" element={<Update2 />} />
              <Route path="/SazpinUpdate/AddUpdate" element={<Addupdate2 />} />
             
              <Route path="/_DeviceUpdates/Update" element={<Update9 />} />
              <Route
                path="/_Deviceupdates/AddUpdate"
                element={<AddUpdates9 />}
              />
              
              <Route path="/Message/AllMessage" element={<Allmessage1 />} />
              <Route path="/Message/AddMessage" element={<AddMessage1 />} />
              <Route path="/Message/AddMessage/:_id" element={<AddMessage1 />} />
              <Route path="/France/AllMessage" element={<Allmessage2 />} />
              <Route path="/France/AddMessage" element={<AddMessage2 />} />
              <Route path="/Shahid/AllMessage" element={<Allmessage3 />} />
              <Route path="/Shahid/AddMessage" element={<AddMessage3 />} />
              <Route path="/Multi/AllMessage" element={<Allmessage4 />} />
              <Route path="/Multi/AddMessage" element={<AddMessage4 />} />
              <Route path="/Multi/AddMessage/:_id" element={<AddMessage4 />} />
             
              <Route
                path="/LiveMessage/AppMessage"
                element={<Allmessage11 />}
              />
              <Route path="/ShahidNew/AllMessage" element={<Allmessage12 />} />
              <Route path="/ShahidNew/AddMessage" element={<AddMessage12 />} />
              <Route path="/Inventory/All" element={<All />}></Route>
            </Route>

            <Route element={<LayoutAdmin />}>
              <Route path="/administrators" element={<AllAdministrator />} />
              <Route path="/alladministrator" element={<AllAdministrator />} />
              <Route
                path="/addadministrator"
                element={<Addadminstrator />}
              ></Route>
              <Route path="/addadministrator/:_id" element={<Addadminstrator />} />
              {/* <Route path="/Playlist_Saz2" element={<Playlist_Saz2/>}/> */}
              {/* <Route path="/Playlist_Saz3" element={<Playlist_Saz3/>}/> */}
              {/* <Route path="/Playlist_Saz1" element={<Playlist_Saz1/>}/> */}
              <Route path="/Saz1_MainURL" element={<Saz1_MainURL/>}/>
              <Route path="/Saz2_MainURL" element={<Saz2_MainURL/>}/>
              <Route path="/Saz3_MainURL" element={<Saz3_MainURL/>}/>
              <Route path="/Demo_saz_playlist_1/All_Playlist" element={<Demoplaylist1/>}/>
              <Route path="/Demo_saz_playlist_1/Add_Playlist" element={<Adddemoplaylist1/>}/>
              <Route path="/Demo_saz_playlist_1/Add_Playlist/:_id" element={<Adddemoplaylist1/>}/>
              <Route path="/Demo_saz_playlist_2/All_Playlist" element={<Demoplaylist2/>}/>
              <Route path="/Demo_saz_playlist_2/Add_Playlist" element={<Adddemoplaylist2/>}/>
              <Route path="/Demo_saz_playlist_2/Add_Playlist/:_id" element={<Adddemoplaylist2/>}/>
              <Route path="/Demo_saz_playlist_3/All_Playlist" element={<Demoplaylist3/>}/>
              <Route path="/Demo_saz_playlist_3/Add_Playlist" element={<Adddemoplaylist3/>}/>
              <Route path="/Demo_saz_playlist_3/Add_Playlist/:_id" element={<Adddemoplaylist3/>}/>

              <Route path="/Saz_playlist_1/All_Playlist" element={<AllSaz_playlist_1 />} />
              <Route path="/Saz_playlist_1/Add_Playlist" element={<AddSaz_playlist_1 />} />
              <Route path="/Saz_playlist_1/Add_Playlist/:_id" element={<AddSaz_playlist_1 />} />
              <Route path="/Saz_playlist_2/All_Playlist" element={<AllSaz_playlist_2 />} />
              <Route path="/Saz_playlist_2/Add_Playlist" element={<AddSaz_playlist_2 />} />
              <Route path="/Saz_playlist_2/Add_Playlist/:_id" element={<AddSaz_playlist_2 />} />
              <Route path="/Saz_playlist_3/All_Playlist" element={<AllSaz_playlist_3 />} />
              <Route path="/Saz_playlist_3/Add_Playlist" element={<AddSaz_playlist_3 />} />
              <Route path="/Saz_playlist_3/Add_Playlist/:_id" element={<AddSaz_playlist_3 />} />
           </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
