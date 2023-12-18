import express from "express";
import { CustomerSaz3IdPatch, addCustomerSaz3, deleteCustomerSaz3, getCustomerSaz3, getCustomerSaz3byObId } from "../controller/customersaz3Controller.js";
const router = express.Router();

export default router;


router.post("/post", addCustomerSaz3)
router.get("/get",getCustomerSaz3)
router.get("/:_id",getCustomerSaz3byObId)
router.delete("/delete/:_id",deleteCustomerSaz3)
router.patch("/patch/:_id",CustomerSaz3IdPatch);