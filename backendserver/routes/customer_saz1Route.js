import express from "express";
import customer_saz1data, { addcustomer_saz1, customer_saz1Patch, customer_saz1byObId, deletecustomer_saz1 } from "../controller/customer_saz1Controller.js";
const router = express.Router();
export default router;

router.get("/find",customer_saz1data);
router.get("/:_id",customer_saz1byObId)
router.post("/post",addcustomer_saz1)
router.patch("/patch/:_id",customer_saz1Patch);
router.delete("/delete/:_id",deletecustomer_saz1)

// router.get("/", async (req, res) => {
//   try {
//     const customer_saz1data = await customer_saz1.find();
//     res.status(200).json(customer_saz1data);

//     // adminsdata.json();
//     console.log(customer_saz1data);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
