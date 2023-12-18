import express from "express";
import product_assignmentsdata, { addproductassign, deleteproductassign, getproductassignbyObId, product_assignmentsPatch, product_assignmentsSortable } from "../controller/productassignmentController.js";
const router = express.Router();

export default router;

router.get("/list",product_assignmentsdata);
router.get("/filter",product_assignmentsSortable);
router.patch("/patch/:_id",product_assignmentsPatch);
router.post("/post",addproductassign);
router.get("/list/:_id",getproductassignbyObId);
router.delete("/delete/:_id",deleteproductassign  );
  