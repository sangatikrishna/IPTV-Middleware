import express from "express";
const router = express.Router();
import packages_vodcategories from "../models/packages_vodcategories.js"
import { packages_vodcategoriesbyObId } from "../controller/packages_vodcategoriesController.js";
import packages_vodcategoriesdata from "../controller/packages_vodcategoriesController.js";
import { addpackages_vodcategories } from "../controller/packages_vodcategoriesController.js";
import { deletepackages_vodcategories} from "../controller/packages_vodcategoriesController.js";
import { packages_vodcategoriesPatch } from "../controller/packages_vodcategoriesController.js";
export default router;

router.get("/find",packages_vodcategoriesdata);
router.get("/:_id",packages_vodcategoriesbyObId)
router.patch("/patch/:_id",packages_vodcategoriesPatch);
router.post("/post",addpackages_vodcategories)
router.delete("/delete/:_id",deletepackages_vodcategories)
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