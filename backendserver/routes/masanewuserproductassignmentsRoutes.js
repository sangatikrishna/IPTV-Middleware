import express from "express";
// import masa_new_user_product_assignments from "../models/masa_new_user_product_assignments.js";
import { NewuserproductassignmentIdPatch, addNewuserproductassignment, deleteNewuserproductassignment, getNewuserproductassignment, getNewuserproductassignmentbyObId } from "../controller/masanewuserproductassignmentsController.js";

const router = express.Router();

export default router;

router.post("/post", addNewuserproductassignment)
router.get("/get", getNewuserproductassignment)
router.get("/get/:_id", getNewuserproductassignmentbyObId)
router.delete("/delete/:_id", deleteNewuserproductassignment)
router.patch("/patch/:_id", NewuserproductassignmentIdPatch);
// router.get("/", async (req, res) => {
//   try {
//     const masanewuserproducts = await masa_new_user_product_assignments.find();
//     res.status(200).json(masanewuserproducts);

//     // adminsdata.json();
//     console.log(masanewuserproducts);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
