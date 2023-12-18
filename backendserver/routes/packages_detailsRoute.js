import express from "express";
const router = express.Router();
import packages_details from "../models/packages_details.js"
import { packages_detailsbyObId } from "../controller/packages_detailsController.js";
import packages_detailsdata from "../controller/packages_detailsController.js";
import { addpackages_details } from "../controller/packages_detailsController.js";
import { deletepackages_details} from "../controller/packages_detailsController.js";
import { packages_detailsPatch } from "../controller/packages_detailsController.js";
export default router;
router.get("/find",packages_detailsdata);
router.get("/:_id",packages_detailsbyObId)
router.patch("/patch/:_id",packages_detailsPatch);
router.post("/post",addpackages_details)
router.delete("/delete/:_id",deletepackages_details)
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