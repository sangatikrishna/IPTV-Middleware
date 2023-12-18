import express from "express";
const router = express.Router();
import humaxpayloadsdata, { addhumaxpayloads, deletehumaxpayloads, humaxpayloadsPatch, humaxpayloadsbyObId } from "../controller/humaxpayloadsController.js";
export default router;

router.get("/find",humaxpayloadsdata);
router.get("/:_id",humaxpayloadsbyObId)
router.post("/post",addhumaxpayloads)
router.patch("/patch/:_id",humaxpayloadsPatch);
router.delete("/delete/:_id",deletehumaxpayloads)
// router.get("/", async (req, res) => {
//   try {
//     const humaxpayloadsdata = await humax_payloads.find();
//     res.status(200).json(humaxpayloadsdata);

//     // adminsdata.json();
//     console.log(humaxpayloadsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
