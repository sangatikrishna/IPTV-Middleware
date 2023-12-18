import express from "express";
const router = express.Router();
import packages_videolivecategories from "../models/packages_videolivecategories.js"
import { packages_videolivecategoriesbyObId } from "../controller/packages_videolivecategoriesController.js";
import packages_videolivecategoriesdata from "../controller/packages_videolivecategoriesController.js";
import { addpackages_videolivecategories } from "../controller/packages_videolivecategoriesController.js";
import { deletepackages_videolivecategories} from "../controller/packages_videolivecategoriesController.js";
import { packages_videolivecategoriesPatch } from "../controller/packages_videolivecategoriesController.js";
export default router;

router.get("/find",packages_videolivecategoriesdata);
router.get("/:_id",packages_videolivecategoriesbyObId)
router.patch("/patch/:_id",packages_videolivecategoriesPatch);
router.post("/post",addpackages_videolivecategories)
router.delete("/delete/:_id",deletepackages_videolivecategories)
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