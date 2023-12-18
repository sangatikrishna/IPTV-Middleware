import express from "express";
const router = express.Router();
import adonsbillingsdata from "../controller/adonsbillingsController.js";
import {addAdonsBillings,deleteadonsbillings,adonsBillingsbyObId,adonsbillingsPatch} from './../controller/adonsbillingsController.js';
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const adonsbillingsdata = await adons_billings.find();
//     res.status(200).json(adonsbillingsdata);

//     // adminsdata.json();
//     console.log(adonsbillingsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/find",adonsbillingsdata);
router.get("/:_id",adonsBillingsbyObId)
router.post("/post",addAdonsBillings)
router.delete("/delete/:_id",deleteadonsbillings)
router.patch("/patch/:_id",adonsbillingsPatch);
