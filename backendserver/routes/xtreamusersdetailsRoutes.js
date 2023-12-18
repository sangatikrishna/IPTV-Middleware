import express from "express";
import { XtreamusersdetailsIdPatch, addXtreamusersdetails, deleteXtreamusersdetails, getXtreamusersdetails, getXtreamusersdetailsbyObId } from "../controller/xtreamusersdetailsController.js";

const router = express.Router();

export default router;
router.get("/get", getXtreamusersdetails)
router.get("/get/:_id", getXtreamusersdetailsbyObId)
router.post("/post", addXtreamusersdetails)
router.patch("/patch/:_id", XtreamusersdetailsIdPatch)
router.delete("/delete/:_id", deleteXtreamusersdetails)
