import express from "express";
const router = express.Router();
import cities from "../models/cities.js"
import { citiesbyObId } from "../controller/citiesController.js";
import citiesdata from "../controller/citiesController.js";
import { addcities } from "../controller/citiesController.js";
import { deletecities} from "../controller/citiesController.js";
import { citiesPatch } from "../controller/citiesController.js";
export default router;
router.get("/find",citiesdata);
router.get("/:_id",citiesbyObId)
router.patch("/patch/:_id",citiesPatch);
router.post("/post",addcities)
router.delete("/delete/:_id",deletecities)
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