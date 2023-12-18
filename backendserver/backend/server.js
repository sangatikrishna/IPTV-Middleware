import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import getAllVideos from "./routes/videoRoute.js";
import livetvCatRoute from "./routes/livetvCategoriesRoute.js";
import adminRoute from "./routes/adminRoute.js";
// import videoRoute from "./routes/videoRoute.js"
//import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/authRouter.js";
// import movieRouter from "./routes/moviesRoute.js"
// import resellersRoute from "./routes/resell"

// import resellersRoutes from "./routes/rese"
import moviesRoute from "./routes/moviesRoute.js";
import commonExpiryRoute from "./routes/commonExpiryRoute.js";
import commonLoginRoute from "./routes/commonLoginRoute.js";
import countriesRoute from "./routes/countriesRoute.js";
import dashboardbannerRoute from "./routes/dashboardbannerRoute.js";
import paymenttypesRoute from "./routes/paymenttypesRoute.js";
import paypalpaymentRoute from "./routes/paypalpaymentRoute.js";
import prioritytypesRoute from "./routes/prioritytypesRoutes.js";
import productassignmentRoute from "./routes/productassignmentRoute.js";
import productsRoute from "./routes/productsRoute.js";
import profilesRoute from "./routes/profilesRoute.js";
import programsRoute from "./routes/programsRoute.js";
import resellerboxRoute from "./routes/resellerboxRoute.js";
import serversRoute from "./routes/serversRoute.js";
import Saz2_Main_URLRoute from "./routes/Saz2_Main_URLRoute.js";

import audiocategoriesRoute from "./routes/audiocategoriesRoute.js";
import billingRoute from "./routes/billingRoute.js";
import billingTypesRoute from "./routes/billingTypesRoute.js";
import catchupProgramsRoute from "./routes/catchupProgramsRoute.js";
import multiuserprofilesRoute from "./routes/multiuserprofilesRoute.js";
import multi_usersRoute from "./routes/multiusersRoute.js";
import multi_ver_app_updatesRoute from "./routes/multiverappupdatesRoute.js";
import new_user_livetv_favoritesRoute from "./routes/newuserlivetvfavoritesRoute.js";
import new_user_product_assignmentsRoute from "./routes/newuserproductassignmentsRoute.js";
import new_user_profilesRoute from "./routes/newuserprofilesRoute.js";
import new_usersRoute from "./routes/newusersRoute.js";
import packagesRoute from "./routes/packagesRoute.js";
// import playlist_saz2 from "./routes/playlist_saz2.js";
// import playlist_saz2Route from "./routes/Play_listsaz2Route.js";
import playlist_saz2Route from "./routes/playlistsaz2Route.js";

// import humax_user_logins from "./routes/humax_user_logins.js";
// import humaxusermessagesRoutes from "./routes/humaxusermessagesRoutes.js";
// import humaxuserproductassignmentsRoutes from "./routes/humaxuserproductassignmentsRoutes.js";
// import humaxuserprofilesRoutes from "./routes/humaxuserprofilesRoutes.js";
import shahidnewusermessagesRoutes from "./routes/shahidnewusermessagesRoutes.js";
import shahidnewuserproductassignmentsRoutes from "./routes/shahidnewuserproductassignmentsRoutes.js";
import shahidnewuserprofilesRoutes from "./routes/shahidnewuserprofilesRoutes.js";
import shahidnewusersRoutes from "./routes/shahidnewusersRoutes.js";
import shahidpaymentlogsRoutes from "./routes/shahidpaymentlogsRoutes.js";
// import shahidusermessagesRoutes from "./routes/shahidusermessagesRoutes.js";
//  import shahiduserproductassignmentsRoutes from "./routes/shahiduserproductassignmentsRoutes.js";
// import shahiduserprofilesRoutes from "./routes/shahiduserprofilesRoutes.js";
// import shahidusersRoutes from "./routes/shahidusersRoutes.js";
import Saz1_Main_URLRoutes from "./routes/Saz1_Main_URLRoutes.js";

import adons_packagesRoute from "./routes/adons_packagesRoute.js";
import adons_packages_categoriesRoute from "./routes/adons_packages_categoriesRoute.js";
import arosRoute from "./routes/arosRoute.js";
import aros_acosRoute from "./routes/aros_acosRoute.js";
import masa_plus_usersRoute from "./routes/masa_plus_usersRoute.js";
import masa_renewal_activation_codesRoute from "./routes/masa_renewal_activation_codesRoute.js";
import messagesRoute from "./routes/messagesRoute.js";
import mod_categoriesRoute from "./routes/mod_categoriesRoute.js";
import modsRoute from "./routes/modsRoute.js";
import module_resource_providersRoute from "./routes/module_resource_providersRoute.js";
import multi_renewal_activation_codesRoute from "./routes/multi_renewal_activation_codesRoute.js";
import multi_user_loginsRoute from "./routes/multi_user_loginsRoute.js";
import multi_user_messagesRoute from "./routes/multi_user_messagesRoute.js";
import multi_user_product_assignmentsRoute from "./routes/multi_user_product_assignmentsRoute.js";
import customer_saz2Route from "./routes/customer_saz2Route.js";

// import humaxusersRoutes from "./routes/humaxusersRoutes.js";
import liveuserproductassignmentsRoutes from "./routes/liveuserproductassignmentsRoutes.js";
import liveuserprofilesRoutes from "./routes/liveuserprofilesRoutes.js";
import liveusersRoutes from "./routes/liveusersRoutes.js";
import showcategoriesRoutes from "./routes/showcategoriesRoutes.js";
import showsubcategoriesRoutes from "./routes/showsubcategoriesRoutes.js";
import showsRoutes from "./routes/showsRoutes.js";
import songcategoriesRoutes from "./routes/songcategoriesRoutes.js";
import songsRoutes from "./routes/songsRoutes.js";
import statesRoutes from "./routes/statesRoutes.js";
import swedenresellerboxpaymentmappingRoutes from "./routes/swedenresellerboxpaymentmappingRoutes.js";
import ticketcategoriesRoutes from "./routes/ticketcategoriesRoutes.js";
import ticketelementsRoutes from "./routes/ticketelementsRoutes.js";
import ticketnotificationsRoutes from "./routes/ticketnotificationsRoutes.js";
import playlistsaz1Routes from "./routes/Playlistsaz1Route.js";

// import adonsBillingTypesRoute from "./routes/adonsBillingTypesRoutes.js";
// import CustomError from "./utils/CustomError.js";
import ticket_repliesRoute from "./routes/ticket_repliesRoute.js";

import loginnotificationsRoute from "./routes/loginnotificationsRoute.js";
import masanewusermessagesRoutes from "./routes/masanewusermessagesRoutes.js";
import masanewuserproductassignmentsRoutes from "./routes/masanewuserproductassignmentsRoutes.js";
import masanewuserprofilesRoutes from "./routes/masanewuserprofilesRoutes.js";
import videoslivesRoutes from "./routes/videolivesRoutes.js";
import xtreamappupdateRoutes from "./routes/xtreamappupdateRoutes.js";
import xtreammessageRoutes from "./routes/xtreammessageRoutes.js";
import xtreamresellersRoutes from "./routes/xtreamresellersRoutes.js";
import xtreamusersdetailsRoutes from "./routes/xtreamusersdetailsRoutes.js";
import AMusermessagesRoutes from "./routes/AMusermessagesRoutes.js";
import AMuserprofilesRoutes from "./routes/AMuserprofilesRoutes.js";
import AMusersRoutes from "./routes/AMusersRoutes.js";
import videosRoutes from "./routes/videosRoutes.js";
import saz3mainurlRoutes from "./routes/saz3mainurlRoutes.js";
import customersaz3Routes from "./routes/customersaz3Routes.js";

import livetvRoutes from "./routes/livetvRoutes.js";
import livetvaudioRoute from "./routes/livetvaudioRoute.js";
import livetvfavroutes from "./routes/livetvfavoritesRoute.js";
import tokensRoute from "./routes/tokensRoute.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import user_notificationsRoute from "./routes/user_notificationsRoutes.js";
import userinfosRoute from "./routes/userinfosRoute.js";
import usersRoute from "./routes/usersRoute.js";
import vejo_contact_usRoute from "./routes/vejo_contact_usRoute.js";
import video_categoriesRoute from "./routes/video_categoriesRoute.js";
import video_live_categoriesRoute from "./routes/video_live_categoriesRoute.js";
import userloginRoute from "./routes/userloginRoute.js";

// import movieRouter from "./routes/moviesRoute.js"
import moviesRouter from "./routes/moviesRoute.js";
import globalErrorHandler from "./Controller/errorController.js";


// import moviesSortableRoute from "./routes/moviesSortableRoute.js"

import cors from "cors";
import PlayListSaz3Route from "./routes/PlayListSaz3Route.js";

// import shahiduserprouductassignmentsRoutes from "./routes/shahiduserprouductassignmentsRoutes.js";

import adonsBillingTypesRoute from "./routes/adonsBillingTypesRoutes.js";
import CustomError from "./utils/CustomError.js";

// import playlist_saz2 from "./models/playlist_saz2.js";


// import humax_user_profiles from "./models/humax_user_profiles.js";

import dashboardcategoriesRoute from "./routes/dashboardcategoriesRoute.js";
import dashboardcontentsRoute from "./routes/dashboardcontentsRoute.js";
import groupsRoute from "./routes/groupsRoute.js";
import humaxpayloadsRoute from "./routes/humaxpayloadsRoute.js";
import shahid_new_app_updatesRoute from "./routes/shahid_new_app_updatesRoute.js";
import Customer_Saz1Route from "./routes/Customer_Saz1Route.js";

import categoriesRoute from "./routes/categoriesRoute.js";
import citiesRoute from "./routes/citiesRoute.js";
import common_activationsRoute from "./routes/commonactivationsRoute.js";
import common_app_updatesRoute from "./routes/common_app_updatesRoute.js";
import packages_audiocategoriesRoute from "./routes/packageaudiocategoriesRoute.js";
import packagesmodcategoriesRoute from "./routes/packagesmodcategoriesRoute.js";
import packagesShowCategoriesRoute from "./routes/packagesShowCategoriesRoute.js";
import packagessongcategoriesRoute from "./routes/packagessongcategoriesRoute.js";
import packagesvideocategoriesRoute from "./routes/packagesvideocategoriesRoute.js";
import packagesvideolivecategoriesRoute from "./routes/packagesvideolivecategoriesRoute.js";
import packagesvodcategoriesRoute from "./routes/packagesvodcategoriesRoute.js";
import paymentsettingsRoute from "./routes/paymentsettingsRoute.js";


import adonsBillingTypesRouter from "./routes/adonsBillingTypesRoute.js";
import adonsBillingsRoute from "./routes/adonsBillingsRoute.js";
import adonsCategoriesRoutes from "./routes/adonsCategoriesRoute.js";
import acosRoute from "./routes/acosRoute.js";
import masaNewAppUpdatesRoutes from "./routes/masaNewAppUpdatesRoutes.js";
import masaNewUsersRoutes from "./routes/masaNewUsersRoutes.js";
import masaNewVerAppUpdates from "./routes/masaNewVerAppUpdates.js";
import masaOfferMessagesRoutes from "./routes/masaOfferMessagesRoutes.js";
// import resellers
// import masaPlusAppUpdates from "./routes/masaPlusAppUpdates.js";
// import masaPlusUserLoginsRoutes from "./routes/masaPlusUserLoginsRoutes.js";
// import masaPlusUserMessagesRoutes from "./routes/masaPlusUserMessagesRoutes.js";
// import MasaPlusUserProfilesRoutes from "./routes/MasaPlusUserProfilesRoutes.js";


// import song_categories from "./models/song_categories.js";

const app = express();
app.use(userRouter); //to use your router
app.use(moviesRoute);

app.use(commonExpiryRoute);
app.use(commonLoginRoute);
app.use(countriesRoute);
app.use(dashboardbannerRoute);
app.use(paymenttypesRoute);
app.use(paypalpaymentRoute);
app.use(prioritytypesRoute);
app.use(productassignmentRoute);
app.use(productsRoute);
app.use(profilesRoute);
app.use(programsRoute);
app.use(resellerboxRoute);
app.use(serversRoute);
app.use(Saz2_Main_URLRoute);

app.use(audiocategoriesRoute);
app.use(billingRoute);
app.use(billingTypesRoute);
app.use(catchupProgramsRoute);
app.use(multiuserprofilesRoute);
app.use(multi_usersRoute);
app.use(multi_ver_app_updatesRoute);
app.use(new_user_livetv_favoritesRoute);
app.use(new_user_product_assignmentsRoute);
app.use(new_user_profilesRoute);
app.use(new_usersRoute);
app.use(packagesRoute);
app.use(playlist_saz2Route);

// app.use(humax_user_logins);
// app.use(humaxusermessagesRoutes);
// app.use(humaxuserproductassignmentsRoutes);
// app.use(humaxuserprofilesRoutes);
app.use(shahidnewusermessagesRoutes);
app.use(shahidnewuserproductassignmentsRoutes);
app.use(shahidnewuserprofilesRoutes);
app.use(shahidnewusersRoutes);
app.use(shahidpaymentlogsRoutes);
// app.use(shahidusermessagesRoutes);
// app.use(shahiduserprouductassignmentsRoutes);
// app.use(shahiduserprofilesRoutes);
// app.use(shahidusersRoutes);
app.use(Saz1_Main_URLRoutes);

// app.use(humaxuserproductassignmentRoutes);

app.use(dashboardcategoriesRoute);
app.use(dashboardcontentsRoute);
app.use(groupsRoute);
app.use(humaxpayloadsRoute);
app.use(shahid_new_app_updatesRoute);
app.use(Customer_Saz1Route);

app.use(loginnotificationsRoute);
app.use(masanewusermessagesRoutes);
app.use(masanewuserproductassignmentsRoutes);
app.use(masanewuserprofilesRoutes);
app.use(videoslivesRoutes);
app.use(xtreamappupdateRoutes);
app.use(xtreammessageRoutes);
app.use(xtreamresellersRoutes);
app.use(xtreamusersdetailsRoutes);
app.use(AMusermessagesRoutes);
app.use(AMuserprofilesRoutes);
app.use(AMusersRoutes);
app.use(videosRoutes);
app.use(saz3mainurlRoutes);
app.use(customersaz3Routes);

// app.use(humaxusersRoutes);
app.use(liveuserproductassignmentsRoutes);
app.use(liveuserprofilesRoutes);
app.use(liveusersRoutes);
app.use(showcategoriesRoutes);
app.use(showsubcategoriesRoutes);
app.use(showsRoutes);
app.use(songcategoriesRoutes);
app.use(songsRoutes);
app.use(statesRoutes);
app.use(swedenresellerboxpaymentmappingRoutes);
app.use(ticketcategoriesRoutes);
app.use(ticketelementsRoutes);
app.use(ticketnotificationsRoutes);
app.use(playlistsaz1Routes);
// app.use(resellersRoutes);
app.use(livetvRoutes);
app.use(livetvaudioRoute);
app.use(livetvfavroutes);
app.use(ticket_repliesRoute);
app.use(tokensRoute);
app.use(transactionsRoute);
app.use(user_notificationsRoute);
app.use(userinfosRoute);
app.use(usersRoute);
app.use(vejo_contact_usRoute);
app.use(video_categoriesRoute);
app.use(video_live_categoriesRoute);
app.use(PlayListSaz3Route);
app.use(userloginRoute);

// app.use(movieRouter);
app.use(adons_packagesRoute);
app.use(adons_packages_categoriesRoute);
app.use(arosRoute);
app.use(aros_acosRoute);
app.use(masa_plus_usersRoute);
app.use(masa_renewal_activation_codesRoute);
app.use(messagesRoute);
app.use(mod_categoriesRoute);
app.use(modsRoute);
app.use(module_resource_providersRoute);
app.use(multi_renewal_activation_codesRoute);
app.use(multi_user_loginsRoute);
app.use(multi_user_messagesRoute);
app.use(multi_user_product_assignmentsRoute);
app.use(customer_saz2Route);
app.use(categoriesRoute);
app.use(citiesRoute);
app.use(common_app_updatesRoute);
app.use(common_activationsRoute);
app.use(packages_audiocategoriesRoute);
app.use(packagesmodcategoriesRoute);
app.use(packagesShowCategoriesRoute);
app.use(packagessongcategoriesRoute);
app.use(packagesvideocategoriesRoute);
app.use(packagesvideolivecategoriesRoute);
app.use(packagesvodcategoriesRoute);
app.use(paymentsettingsRoute);

app.use(acosRoute);
app.use(adonsBillingTypesRouter);
app.use(adonsBillingsRoute);
app.use(adonsCategoriesRoutes);
app.use(masaNewAppUpdatesRoutes);
app.use(masaNewUsersRoutes);
app.use(masaNewVerAppUpdates);
app.use(masaOfferMessagesRoutes);
app.use(resellersRoutes)
// app.use(masaPlusAppUpdates);
// app.use(masaPlusUserLoginsRoutes);
// app.use(masaPlusUserMessagesRoutes);
// app.use(MasaPlusUserProfilesRoutes);


app.use("/api/categories",categoriesRoute);
app.use("/api/cities",citiesRoute);
app.use("/api/common_activations",common_activationsRoute);
app.use("/api/common_app_updates",common_app_updatesRoute);
app.use("/api/package_audiocategories",packages_audiocategoriesRoute);
app.use("/api/packages_modcategories",packagesmodcategoriesRoute);
app.use("/api/packages_showcategories", packagesShowCategoriesRoute);
app.use("/api/packages_songcategories", packagessongcategoriesRoute);
app.use("/api/packages_videocategories", packagesvideocategoriesRoute);
app.use("/api/packages_videolivecategories", packagesvideolivecategoriesRoute);
app.use("/api/packages_vodcategories", packagesvodcategoriesRoute);
app.use("/api/payment_settings", paymentsettingsRoute)

app.use("/api/acos", acosRoute);
app.use("/api/admin_settings", adminRoute);
app.use("/api/adons_billing_types", adonsBillingTypesRouter);
app.use("/api/adons_billings", adonsBillingsRoute);
app.use("/api/adons_categories" , adonsCategoriesRoutes);
app.use("/api/masa_new_app_updates" , masaNewAppUpdatesRoutes);
app.use("/api/masa_new_users" , masaNewUsersRoutes);
app.use("/api/masa_new_ver_app_updates" , masaNewVerAppUpdates);
app.use("/api/masa_offer_messages" , masaOfferMessagesRoutes);
// app.use("/api/masa_plus_app_updates" , masaPlusAppUpdates);
// app.use("/api/masa_plus_user_logins" , masaPlusUserLoginsRoutes);
// app.use("/api/masa_plus_user_messages" , masaPlusUserMessagesRoutes);
// app.use("/api/masa_plus_user_profiles" , MasaPlusUserProfilesRoutes);
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: "http://localhost:3000" }));

import { movieSortable, moviesPatch } from "./Controller/moviesController.js";

app.use(userRouter); //to use your router
app.use(moviesRouter);

app.use(express.urlencoded({ extended: false }));

app.use(express.json());



app.use((req, res, next) => {
  console.log("HTTP method-" + req.method + ",URL-" + req.url);
  next();
});
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL =
  "mongodb://sazpinhyd:FlKXIamPtqvgh8Nq@ac-ufb5bpw-shard-00-00.aiduhsr.mongodb.net:27017,ac-ufb5bpw-shard-00-01.aiduhsr.mongodb.net:27017,ac-ufb5bpw-shard-00-02.aiduhsr.mongodb.net:27017/sazpinmiddleware?ssl=true&replicaSet=atlas-gbn4no-shard-0&authSource=admin&retryWrites=true&w=majority";
//global error handling

app.use("/api/user", userRouter);

// app.use("/api/movies", movieRouter);

app.use("/api/videos", moviesRoute);

app.use("/api/commonexpiry", commonExpiryRoute);
app.use("/api/admin_settings", adminRoute);
app.use("/api/livetvcat", livetvCatRoute);
app.use("/api/adons_billing_types", adonsBillingTypesRoute);
app.use("/api/commonlogin", commonLoginRoute);
app.use("/api/countries", countriesRoute);
app.use("/api/dashboard_banners", dashboardbannerRoute);
app.use("/api/payment_types", paymenttypesRoute);
app.use("/api/paypal_payment_payloads", paypalpaymentRoute);
app.use("/api/priority_types", prioritytypesRoute);
app.use("/api/product_assignments", productassignmentRoute);
app.use("/api/products", productsRoute);
app.use("/api/profiles", profilesRoute);
app.use("/api/programs", programsRoute);
app.use("/api/reseller_box_payment_mapping", resellerboxRoute);
app.use("/api/servers", serversRoute);
app.use("/api/Saz2_Main_Url", Saz2_Main_URLRoute);

app.use("/api/audio_categories", audiocategoriesRoute);
app.use("/api/billings", billingRoute);
app.use("/api/billing_types", billingTypesRoute);
app.use("/api/catchup_programs", catchupProgramsRoute);
app.use("/api/multi_user_profiles", multiuserprofilesRoute);
app.use("/api/multi_users", multi_usersRoute);
app.use("/api/multi_ver_app_updates", multi_ver_app_updatesRoute);
app.use("/api/new_user_livetv_favorites", new_user_livetv_favoritesRoute);
app.use("/api/new_user_product_assignments", new_user_product_assignmentsRoute);
app.use("/api/new_user_profiles", new_user_profilesRoute);
app.use("/api/new_users", new_usersRoute);
app.use("/api/packages", packagesRoute);
app.use("/api/playlist_saz2", playlist_saz2Route);

app.use("/api/livetvs", livetvRoutes);
app.use("/api/livetv_audios", livetvaudioRoute);

app.use("/api/videos", moviesRouter);

app.use("/api/admin_settings", adminRoute);
app.use("/api/livetvcat", livetvCatRoute);
app.use("/api/adons_billing_types", adonsBillingTypesRoute);
// app.use("/api/humaxuserlogins", humax_user_logins);
// app.use("/api/humaxusermessagesRoutes", humaxusermessagesRoutes);
// app.use("/api/humaxuserproductassignmentRoutes", humaxuserproductassignmentsRoutes);
// app.use("/api/humaxuserprofiles", humaxuserprofilesRoutes);
app.use("/api/shahidnewusermessagesRoutes", shahidnewusermessagesRoutes);
app.use(
  "/api/shahidnewuserproductassignmentsRoutes",
  shahidnewuserproductassignmentsRoutes
);
app.use("/api/shahidnewuserprofilesRoutes", shahidnewuserprofilesRoutes);
app.use("/api/shahidnewusersRoutes", shahidnewusersRoutes);
app.use("/api/shahidpaymentlogsRoutes", shahidpaymentlogsRoutes);
// app.use("/api/shahidusermessagesRoutes", shahidusermessagesRoutes);
// app.use("/api/shahiduserproductassignmentsRoutes", shahiduserprouductassignmentsRoutes);
// app.use("/api/shahiduserprofilesRoutes", shahiduserprofilesRoutes);
// app.use("/api/shahidusersRoutes", shahidusersRoutes);
app.use("/api/Saz1MainURLRoutes", Saz1_Main_URLRoutes);

app.use("/api/adons_packages", adons_packagesRoute);
app.use("/api/adons_packages_categories", adons_packages_categoriesRoute);
app.use("/api/aros", arosRoute);
app.use("/api/aros_acos", aros_acosRoute);
app.use("/api/masa_plus_users", masa_plus_usersRoute);
app.use(
  "/api/masa_renewal_activation_codes",
  masa_renewal_activation_codesRoute
);
app.use("/api/messages", messagesRoute);
app.use("/api/mod_categories", mod_categoriesRoute);
app.use("/api/mods", modsRoute);
app.use("/api/module_resource_providers", module_resource_providersRoute);
app.use(
  "/api/multi_renewal_activation_codes",
  multi_renewal_activation_codesRoute
);
app.use("/api/multi_user_logins", multi_user_loginsRoute);
app.use("/api/multi_user_messages", multi_user_messagesRoute);
app.use(
  "/api/multi_user_product_assignments",
  multi_user_product_assignmentsRoute
);
app.use("/api/customer_saz2", customer_saz2Route);

app.use("/api/loginnotifdata", loginnotificationsRoute);
app.use("/api/usernotificationmessage", masanewusermessagesRoutes);
app.use("/api/userproductassignments", masanewuserproductassignmentsRoutes);
app.use("/api/newuserprofiles", masanewuserprofilesRoutes);
app.use("/api/videolives", videoslivesRoutes);
app.use("/api/xtream_app_update", xtreamappupdateRoutes);
app.use("/api/xtreammessage", xtreammessageRoutes);
app.use("/api/xtreamresellers", xtreamresellersRoutes);
app.use("/api/xuserdetails", xtreamusersdetailsRoutes);
app.use("/api/AMusermessages", AMusermessagesRoutes);
app.use("/api/AMuserprofiles", AMuserprofilesRoutes);
app.use("/api/AMusers", AMusersRoutes);
app.use("/api/video", videosRoutes);
app.use("/api/saz3mainurl", saz3mainurlRoutes);
app.use("/api/customersaz3", customersaz3Routes);

// app.use("/api/humax_users", humaxusersRoutes);
app.use("/api/live_user_product_assignments", liveuserproductassignmentsRoutes);
app.use("/api/live_user_profiles", liveuserprofilesRoutes);
app.use("/api/live_users", liveusersRoutes);
app.use("/api/show_categories", showcategoriesRoutes);
app.use("/api/show_sub_categories", showsubcategoriesRoutes);
app.use("/api/shows", showsRoutes);
app.use("/api/song_categories", songcategoriesRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/states", statesRoutes);
app.use(
  "/api/sweden_reseller_box_payment_mapping",
  swedenresellerboxpaymentmappingRoutes
);
app.use("/api/ticket_categories", ticketcategoriesRoutes);
app.use("/api/ticket_elements", ticketelementsRoutes);
app.use("/api/ticket_notifications", ticketnotificationsRoutes);
app.use("/api/Playlist_saz1", playlistsaz1Routes);

app.use("/api/livetv_favorites", livetvfavroutes);
app.use("/api/ticket_replies", ticket_repliesRoute);
app.use("/api/tokens", tokensRoute);
app.use("/api/transactions", transactionsRoute);
app.use("/api/user_notifications", user_notificationsRoute);
app.use("/api/userinfos", userinfosRoute);
app.use("/api/users", usersRoute);
app.use("/api/vejo_contact_us", vejo_contact_usRoute);
app.use("/api/video_categories", video_categoriesRoute);
app.use("/api/video_live_categories", video_live_categoriesRoute);
app.use("/api/Playlist_saz3", PlayListSaz3Route);
app.use("/api/userlogin", userloginRoute);

app.use("/api/dashboard_categories", dashboardcategoriesRoute);
app.use("/api/dashboard_contents", dashboardcontentsRoute);
app.use("/api/groups", groupsRoute);
app.use("/api/humax_payloads", humaxpayloadsRoute);
app.use("/api/shahid_new_app_updates", shahid_new_app_updatesRoute);
app.use("/api/customer_saz1", Customer_Saz1Route);
app.use("/api/resellers",resellersRoutes);
// const err= new Error("Error ");

//gloabl error handling middleware when no route defined is not present
app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: "fail",
  //   message: `Cant find ${req.originalUrl} on the server!`,

  // });
  //to create an error object
  // const err=new Error(`Cant find ${req.originalUrl} on the server!`);

  // err.status="fail";
  // err.statusCode=404;

  //   const err = new CustomError(
  //     `Please provide email ID and Password for logging In !`,
  //     404
  //   );
  //   next(err);
  // });

  const err = new CustomError(
    `Cant find ${req.originalUrl} on the server!`,
    404
  );

  next(err);
});
//Error handling middleware
app.use(globalErrorHandler);

try {
  mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDb connected!");
  });
} catch (error) {
  console.log("Db not connected!");
}
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(globalErrorHandler);
