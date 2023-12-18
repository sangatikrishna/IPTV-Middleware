import express from "express";
const router = express.Router();

import customer_saz2 from "../models/customer_saz2.js";
import customer_saz2data, { addCustomer_saz2, deletecustomer_saz2 } from "../controller/customer_saz2Controller.js";
import { customer_saz2byObId } from "../controller/customer_saz2Controller.js";
import { customer_saz2Patch } from "../controller/customer_saz2Controller.js";
export default router;


router.get("/find",customer_saz2data);
router.get("/:_id",customer_saz2byObId);
router.post("/post",addCustomer_saz2);
router.delete("/delete/:_id",deletecustomer_saz2)
router.patch("/patch/:_id",customer_saz2Patch);
router.get("/", async (req, res) => {
  try {
    const customer_saz2data = await customer_saz2.find();
    res.status(200).json(customer_saz2data);

    // adminsdata.json();
    console.log(customer_saz2data);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});