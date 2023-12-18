import express from "express";
import payment_typesdata, { addPayment, deletepayment, getPaymentbyObId, payment_typesPatch, payment_typesSortable } from "../controller/paymenttypesController.js";
const router = express.Router();

export default router;

router.get("/list",payment_typesdata);
router.get("/filter",payment_typesSortable);
router.patch("/patch/:_id",payment_typesPatch);
router.post("/post",addPayment);
router.get("/list/:_id",getPaymentbyObId);
router.delete("/delete/:_id",deletepayment  );
  