import express from "express";
const router = express.Router();
// import live_user_product_assignments from "../models/live_user_product_assignments.js";
import { liveuserproductassignmentsbyObId } from "../controller/liveuserproductassignmentController.js";
import liveuserproductassignmentsdata from "../controller/liveuserproductassignmentController.js";
import { addliveuserproductassignments } from "../controller/liveuserproductassignmentController.js";
import { deleteliveuserproductassignments } from "../controller/liveuserproductassignmentController.js";
import { liveuserproductassignmentsPatch } from "../controller/liveuserproductassignmentController.js"
export default router;

router.get("/find",liveuserproductassignmentsdata);
router.get("/get/:_id",liveuserproductassignmentsbyObId);
router.post("/post",addliveuserproductassignments);
router.delete("/delete/:_id",deleteliveuserproductassignments);
router.patch("/patch/:_id",liveuserproductassignmentsPatch);



// router.get("/", async (req, res) => {
//   try {
//     const liveuserproductassignmentsdata = await live_user_product_assignments.find();
//     res.status(200).json(liveuserproductassignmentsdata);

//     // adminsdata.json();
//     console.log(liveuserproductassignmentsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
