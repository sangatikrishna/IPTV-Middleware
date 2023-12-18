import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import demo_saz_playlist_3 from "../models/demo_saz_playlist_3.js";
import demo_saz_playlist_3data from "../controller/demo_saz_playlist_3Controller.js"
import {demo_saz_playlist_3byObId,addDemo_saz_playlist_3, deletedemo_saz_playlist_3,demo_saz_playlist_3Patch } from "../controller/demo_saz_playlist_3Controller.js";

// import { addAdonspackagescategories } from "../controller/adons_packages_categoriesController.js";
export default router;


router.get("/find",demo_saz_playlist_3data);
router.get("/:_id",demo_saz_playlist_3byObId);
router.post("/post",addDemo_saz_playlist_3);
router.delete("/delete/:_id",deletedemo_saz_playlist_3)
router.patch("/patch/:_id",demo_saz_playlist_3Patch);
// router.get("/", async (req, res) => {
//   try {
//     const adons_packages_categories_data = await adons_packages_categories.find();
//     res.status(200).json(adons_packages_categories_data);

//     // adminsdata.json();
//     console.log(adons_packages_categories_data);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });