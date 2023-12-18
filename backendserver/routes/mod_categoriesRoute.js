import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import mod_categories from "../models/mod_categories.js";
import mod_categoriesdata, { addMod_categories } from "../controller/mod_categoriesController.js";
import { mod_categoriesbyObId } from "../controller/mod_categoriesController.js";
import { deletemod_categories } from "../controller/mod_categoriesController.js";
import { mod_categoriesPatch } from "../controller/mod_categoriesController.js";
export default router;


router.get("/find",mod_categoriesdata);
router.get("/:_id",mod_categoriesbyObId);
router.post("/post",addMod_categories);
router.delete("/delete/:_id",deletemod_categories);
router.patch("/patch/:_id",mod_categoriesPatch);
router.get("/", async (req, res) => {
  try {
    const mod_categoriesdata = await mod_categories.find();
    res.status(200).json(mod_categoriesdata);

    // adminsdata.json();
    console.log(mod_categoriesdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});