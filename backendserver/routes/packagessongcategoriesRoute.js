import express from "express";
const router = express.Router();
import packages_songcategories from "../models/packages_songcategories.js"
import { packages_songcategoriesbyObId } from "../controller/packages_songcategoriesController.js";
import packages_songcategoriesdata from "../controller/packages_songcategoriesController.js";
import { addpackages_songcategories } from "../controller/packages_songcategoriesController.js";
import { deletepackages_songcategories} from "../controller/packages_songcategoriesController.js";
import { packages_songcategoriesPatch } from "../controller/packages_songcategoriesController.js";
export default router;

router.get("/find",packages_songcategoriesdata);
router.get("/:_id",packages_songcategoriesbyObId)
router.patch("/patch/:_id",packages_songcategoriesPatch);
router.post("/post",addpackages_songcategories)
router.delete("/delete/:_id",deletepackages_songcategories)
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