import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import multi_user_product_assignments from "../models/multi_user_product_assignments.js";
import multi_user_product_assignmentsdata from "../controller/multi_user_product_assignmentsController.js";
import { multi_user_product_assignmentsbyObId } from "../controller/multi_user_product_assignmentsController.js";
import { addMulti_user_product_assignments } from "../controller/multi_user_product_assignmentsController.js";
import { deletemulti_user_product_assignments } from "../controller/multi_user_product_assignmentsController.js";
import { multi_user_product_assignmentsPatch } from "../controller/multi_user_product_assignmentsController.js";
export default router;


router.get("/find",multi_user_product_assignmentsdata);
router.get("/:_id",multi_user_product_assignmentsbyObId);
router.post("/post",addMulti_user_product_assignments);
router.delete("/delete/:_id",deletemulti_user_product_assignments)
router.patch("/patch/:_id",multi_user_product_assignmentsPatch);
router.get("/", async (req, res) => {
  try {
    const multi_user_product_assignmentsdata = await multi_user_product_assignments.find();
    res.status(200).json(multi_user_product_assignmentsdata);

    // adminsdata.json();
    console.log(multi_user_product_assignmentsdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});