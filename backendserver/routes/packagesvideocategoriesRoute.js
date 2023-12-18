import express from "express";
const router = express.Router();
import packages_videocategories from "../models/packages_videocategories.js"
import { packages_videocategoriesbyObId } from "../controller/packages_videocategoriesController.js";
import packages_videocategoriesdata from "../controller/packages_videocategoriesController.js";
import { addpackages_videocategories } from "../controller/packages_videocategoriesController.js";
import { deletepackages_videocategories} from "../controller/packages_videocategoriesController.js";
import { packages_videocategoriesPatch } from "../controller/packages_videocategoriesController.js";
export default router;

router.get("/find",packages_videocategoriesdata);
router.get("/:_id",packages_videocategoriesbyObId)
router.patch("/patch/:_id",packages_videocategoriesPatch);
router.post("/post",addpackages_videocategories)
router.delete("/delete/:_id",deletepackages_videocategories)
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