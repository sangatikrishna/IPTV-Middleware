import express from "express";
const router = express.Router();
// import show_categories from "../models/show_categories.js";
import { showcategoriesbyObId } from "../controller/showcategoriesController.js";
import showcategoriesdata from "../controller/showcategoriesController.js";
import { addshowcategories } from "../controller/showcategoriesController.js";
import { deleteshowcategories } from "../controller/showcategoriesController.js";
import { showcategoriesPatch } from "../controller/showcategoriesController.js";
export default router;

router.get("/find",showcategoriesdata);
router.get("/get/:_id",showcategoriesbyObId);
router.post("/post",addshowcategories);
router.delete("/delete/:_id",deleteshowcategories);
router.patch("/patch/:_id",showcategoriesPatch);


// router.get("/", async (req, res) => {
//   try {
//     const showcategoriesdata = await show_categories.find();
//     res.status(200).json(showcategoriesdata);

//     // adminsdata.json();
//     console.log(showcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
