import express from "express";
import programsdata, { addprogram, deleteprogram, getprogrambyObId, programsPatch, programsSortable } from "../controller/programsController.js";
const router = express.Router();

export default router;

router.get("/list",programsdata);
router.get("/filter",programsSortable);
router.patch("/patch/:_id",programsPatch);
router.post("/post",addprogram);
router.get("/list/:_id",getprogrambyObId);
router.delete("/delete/:_id",deleteprogram );
  