import express from "express";
import productsdata, { addproduct, deleteproduct, getproductbyObId, productsPatch, productsSortable } from "../controller/productsController.js";
const router = express.Router();

export default router;

router.get("/list",productsdata);
router.get("/filter",productsSortable);
router.patch("/patch/:_id",productsPatch);
router.post("/post",addproduct);
router.get("/list/:_id",getproductbyObId);
router.delete("/delete/:_id",deleteproduct  );
  