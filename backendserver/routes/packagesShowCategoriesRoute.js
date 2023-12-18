import express from "express";
const router = express.Router();
import packages_showcategories from "../models/packages_showcategories.js"
import { packages_showcategoriesbyObId } from "../controller/packages_showcategoriesController.js";
import packages_showcategoriesdata from "../controller/packages_showcategoriesController.js";
import { addpackages_showcategories } from "../controller/packages_showcategoriesController.js";
import { deletepackages_showcategories} from "../controller/packages_showcategoriesController.js";
import { packages_showcategoriesPatch } from "../controller/packages_showcategoriesController.js";
export default router;

router.get("/find",packages_showcategoriesdata);
router.get("/:_id",packages_showcategoriesbyObId)
router.patch("/patch/:_id",packages_showcategoriesPatch);
router.post("/post",addpackages_showcategories)
router.delete("/delete/:_id",deletepackages_showcategories)
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