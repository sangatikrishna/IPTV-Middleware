import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { catchupprogramsPatch, catchupprogramsbyObId } from "../controller/catchupprogramsController.js";
import catchupprogramsdata from "../controller/catchupprogramsController.js";
import { addcatchupprograms } from "../controller/catchupprogramsController.js";
import { deletecatchupprograms } from "../controller/catchupprogramsController.js";
export default router;

router.get("/find",catchupprogramsdata);
router.get("/:_id",catchupprogramsbyObId)
router.post("/post",addcatchupprograms)
router.delete("/delete/:_id",deletecatchupprograms)
router.patch("/patch/:_id",catchupprogramsPatch);
// router.get("/", async (req, res) => {
//   try {
//     const catchupprogramsdata = await catchup_programs.find();
//     res.status(200).json(catchupprogramsdata);

//     // adminsdata.json();
//     console.log(catchupprogramsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
