import express from "express";
import transactionsdata from "../controller/transcationsController.js";
import { transactionsbyId } from "../controller/transcationsController.js";
import { addtransactions } from "../controller/transcationsController.js";
import { deletetransactions } from "../controller/transcationsController.js";
import { transactionspatch } from "../controller/transcationsController.js";
const router = express.Router();
export default router;



router.get("/find",transactionsdata);
router.get("/:_id",transactionsbyId);
router.post("/post",addtransactions);
router.delete("/delete/:_id",deletetransactions);
router.patch("/patch/:_id",transactionspatch);

// router.get("/", async (req, res) => {
//   try {
//     const transactionsdata = await transactions.find();
//     res.status(200).json(transactionsdata);

//     // adminsdata.json();
//     console.log(transactionsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
