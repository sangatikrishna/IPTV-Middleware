import express from "express";
const router = express.Router();
import packages_modcategories from "../models/packages_modcategories.js"
import { packages_modcategoriesbyObId } from "../controller/packages_modcategoriesController.js";
import packages_modcategoriesdata from "../controller/packages_modcategoriesController.js";
import { addpackages_modcategories } from "../controller/packages_modcategoriesController.js";
import { deletepackages_modcategories} from "../controller/packages_modcategoriesController.js";
import { packages_modcategoriesPatch } from "../controller/packages_modcategoriesController.js";
export default router;

router.get("/find",packages_modcategoriesdata);
router.get("/:_id",packages_modcategoriesbyObId)
router.patch("/patch/:_id",packages_modcategoriesPatch);
router.post("/post",addpackages_modcategories)
router.delete("/delete/:_id",deletepackages_modcategories)
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