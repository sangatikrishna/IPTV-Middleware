import express from "express";
const router = express.Router();
import adonscategoriesdata from "../controller/adonscategoriesController.js";
import {adonsCategoriesbyObId, addAdonsCategories,deleteadonscategories,adonscategoriesPatch } from "../controller/adonscategoriesController.js";

export default router;
// router.get("/", async (req, res) => {
//   try {
//     const adonscategoriesdata = await adons_categories.find();
//     res.status(200).json(adonscategoriesdata);

//     // adminsdata.json();
//     console.log(adonscategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/find",adonscategoriesdata);
router.get("/:_id",adonsCategoriesbyObId)
router.post("/post",addAdonsCategories)
router.delete("/delete/:_id",deleteadonscategories)
router.patch("/patch/:_id",adonscategoriesPatch);
