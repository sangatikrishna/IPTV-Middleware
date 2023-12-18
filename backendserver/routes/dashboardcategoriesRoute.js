import express from "express";
const router = express.Router();
import dashboard_categories from "../models/dashboard_categories.js";
import { dashboardcategoriesbyObId } from "../controller/dashboardcategoriesController.js";
import dashboardcategoriesdata from "../controller/dashboardcategoriesController.js";
import { addDashboardcategories } from "../controller/dashboardcategoriesController.js";
import { deletedashboardcategories } from "../controller/dashboardcategoriesController.js";
import { dashboardcategoriesPatch } from "../controller/dashboardcategoriesController.js";
export default router;

router.get("/find",dashboardcategoriesdata);
router.get("/:_id",dashboardcategoriesbyObId)
router.post("/post",addDashboardcategories)
router.delete("/delete/:_id",deletedashboardcategories)
router.patch("/patch/:_id",dashboardcategoriesPatch);
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
