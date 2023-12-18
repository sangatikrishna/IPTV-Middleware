import express from "express";
import reseller_box_payment_mappingdata, { addresellerboxpayment, deleteresellerboxpayment, getresellerboxpaymentbyObId, reseller_box_payment_mappingPatch, reseller_box_payment_mappingSortable } from "../controller/resellerboxpaymentController.js";
const router = express.Router();

export default router;

router.get("/list",reseller_box_payment_mappingdata);
router.get("/filter",reseller_box_payment_mappingSortable);
router.patch("/patch/:_id",reseller_box_payment_mappingPatch);
router.post("/post",addresellerboxpayment);
router.get("/list/:_id",getresellerboxpaymentbyObId);
router.delete("/delete/:_id",deleteresellerboxpayment );
  