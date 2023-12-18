import express from "express";
const router = express.Router();
// import shahid_payment_logs from "../models/shahidpaymentlogs.js";
import shahidpaymentlogs, { Shahidpayment } from "../controller/shahidpaymentlogsController.js";
import { shahidpaymentlogsbyId } from "../controller/shahidpaymentlogsController.js";
import addshahidpaymentlogs from "../controller/shahidpaymentlogsController.js";
import { deleteshahidpaymentlogs } from "../controller/shahidpaymentlogsController.js";
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const shahidpaymentlogs = await shahid_payment_logs.find();
//     res.status(200).json(shahidpaymentlogs);

//     // adminsdata.json();
//     console.log(shahidpaymentlogs);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
router.get("/get",shahidpaymentlogs);
router.get("/:_id",shahidpaymentlogsbyId);
router.post("/post",addshahidpaymentlogs);
router.delete("/delete/:_id",deleteshahidpaymentlogs)
router.patch("/patch/:_id",Shahidpayment);