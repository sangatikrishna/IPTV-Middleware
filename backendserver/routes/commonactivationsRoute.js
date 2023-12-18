
import express from "express";
const router = express.Router();
import common_activations from "../models/common_activations.js"
import { common_activationsbyObId } from "../controller/common_activationsController.js";
import common_activationsdata from "../controller/common_activationsController.js";
import { addcommon_activations } from "../controller/common_activationsController.js";
import { deletecommon_activations} from "../controller/common_activationsController.js";
import { common_activationsPatch } from "../controller/common_activationsController.js";
export default router;

router.get("/find",common_activationsdata);
router.get("/:_id",common_activationsbyObId)
router.patch("/patch/:_id",common_activationsPatch);
router.post("/post",addcommon_activations)
router.delete("/delete/:_id",deletecommon_activations)
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