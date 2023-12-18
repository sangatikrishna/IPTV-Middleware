import express from "express";
const router = express.Router();
import common_app_updates from "../models/common_app_updates.js"
import { common_app_updatesbyObId } from "../controller/common_app_updatesController.js";
import common_app_updatesdata from "../controller/common_app_updatesController.js";
import { addcommon_app_updates } from "../controller/common_app_updatesController.js";
import { deletecommon_app_updates} from "../controller/common_app_updatesController.js";
import { common_app_updatesPatch } from "../controller/common_app_updatesController.js";
export default router;

router.get("/find",common_app_updatesdata);
router.get("/:_id",common_app_updatesbyObId)
router.patch("/patch/:_id",common_app_updatesPatch);
router.post("/post",addcommon_app_updates)
router.delete("/delete/:_id",deletecommon_app_updates)
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