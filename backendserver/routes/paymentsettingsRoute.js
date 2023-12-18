import express from "express";
const router = express.Router();
import payment_settings from "../models/payment_settings.js"
import { payment_settingsbyObId } from "../controller/payment_settingsController.js";
import payment_settingsdata from "../controller/payment_settingsController.js";
import { addpayment_settings } from "../controller/payment_settingsController.js";
import { deletepayment_settings} from "../controller/payment_settingsController.js";
import { payment_settingsPatch } from "../controller/payment_settingsController.js";
export default router;

router.get("/find",payment_settingsdata);
router.get("/:_id",payment_settingsbyObId)
router.patch("/patch/:_id",payment_settingsPatch);
router.post("/post",addpayment_settings)
router.delete("/delete/:_id",deletepayment_settings)
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