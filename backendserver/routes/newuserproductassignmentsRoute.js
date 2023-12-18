import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { newuserproductassignmentsPatch, newuserproductassignmentsbyObId } from "../controller/newuserproductassignmentsController.js";
import newuserproductassignmentsdata from "../controller/newuserproductassignmentsController.js";
import { addnewuserproductassignments } from "../controller/newuserproductassignmentsController.js";
import { deletenewuserproductassignments } from "../controller/newuserproductassignmentsController.js";
export default router;

router.get("/find",newuserproductassignmentsdata);
router.get("/:_id",newuserproductassignmentsbyObId)
router.post("/post",addnewuserproductassignments)
router.delete("/delete/:_id",deletenewuserproductassignments)
router.patch("/patch/:_id",newuserproductassignmentsPatch);

// router.get("/", async (req, res) => {
//   try {
//     const newuserproductassignmentsdata = await catchup_programs.find();
//     res.status(200).json(newuserproductassignmentsdata);

//     // adminsdata.json();
//     console.log(newuserproductassignmentsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
