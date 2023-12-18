import express from "express";
const router = express.Router();
import packages_livetvs from "../models/packages_livetvs.js"
import packages_livetvsdata from "../controller/packages_livetvsController.js";
import { packages_livetvsbyObId,packages_livetvsPatch,addpackages_livetvs,deletepackages_livetvs } from "../controller/packages_livetvsController.js";
export default router;
router.get("/find",packages_livetvsdata);
router.get("/:_id",packages_livetvsbyObId)
router.patch("/patch/:_id",packages_livetvsPatch);
router.post("/post",addpackages_livetvs)
router.delete("/delete/:_id",deletepackages_livetvs)
// router.get("/", async (req, res) => {
//   try {
//     const dashboardcategoriesdata = await dashboard_categories.find();
//     res.status(200).json(dashboardcategoriesdata);

//     // adminsdata.json();
//     console.log(dashboardcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   } 
// });