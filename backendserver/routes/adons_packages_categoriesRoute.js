import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import adons_packages_categories from "../models/adons_packages_categories.js";
import adons_packages_categoriesdata, { addAdonspackagescategories } from "../controller/adons_packages_categoriesController.js";
import { adons_packages_categoriesbyObId } from "../controller/adons_packages_categoriesController.js";
import { deleteadonspackagescategories } from "../controller/adons_packages_categoriesController.js";
import { adonspackagescategoriesPatch } from "../controller/adons_packages_categoriesController.js";
// import { addAdonspackagescategories } from "../controller/adons_packages_categoriesController.js";
export default router;


router.get("/find",adons_packages_categoriesdata);
router.get("/:_id",adons_packages_categoriesbyObId);
router.post("/post",addAdonspackagescategories);
router.delete("/delete/:_id",deleteadonspackagescategories)
router.patch("/patch/:_id",adonspackagescategoriesPatch);
router.get("/", async (req, res) => {
  try {
    const adons_packages_categories_data = await adons_packages_categories.find();
    res.status(200).json(adons_packages_categories_data);

    // adminsdata.json();
    console.log(adons_packages_categories_data);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});