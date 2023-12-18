import express from "express";
import paypal_payment_payloadsdata, { addpaypalpayment, deletepaypalpayment, getpaypalpaymentbyObId, paypal_payment_payloadsPatch, paypal_payment_payloadsSortable } from "../controller/paypalpaymentController.js";
const router = express.Router();

export default router;

router.get("/list",paypal_payment_payloadsdata);
router.get("/filter",paypal_payment_payloadsSortable);
router.patch("/patch/:_id",paypal_payment_payloadsPatch);
router.post("/post",addpaypalpayment);
router.get("/list/:_id",getpaypalpaymentbyObId);
router.delete("/delete/:_id",deletepaypalpayment  );
  