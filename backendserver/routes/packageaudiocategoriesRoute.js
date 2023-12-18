import express from "express";
const router = express.Router();
import packages_audiocategories from "../models/packages_audiocategories.js"
import { packages_audiocategoriesbyObId } from "../controller/packages_audiocategoriesController.js";
import packages_audiocategoriesdata from "../controller/packages_audiocategoriesController.js";
import { addpackages_audiocategories } from "../controller/packages_audiocategoriesController.js";
import { deletepackages_audiocategories} from "../controller/packages_audiocategoriesController.js";
import { packages_audiocategoriesPatch } from "../controller/packages_audiocategoriesController.js";
export default router;

router.get("/find",packages_audiocategoriesdata);
router.get("/:_id",packages_audiocategoriesbyObId)
router.patch("/patch/:_id",packages_audiocategoriesPatch);
router.post("/post",addpackages_audiocategories)
router.delete("/delete/:_id",deletepackages_audiocategories)
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