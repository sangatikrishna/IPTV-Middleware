import express from "express";
import { XtreamresellersIdPatch, addXtreamresellers, deleteXtreamresellers, getXtreamresellers, getXtreamresellersbyObId } from "../controller/xtreamresellersController.js";

const router = express.Router();

export default router;
router.get("/get", getXtreamresellers)
router.get("/get/:_id", getXtreamresellersbyObId)
router.post("/post", addXtreamresellers)
router.patch("/patch/:_id", XtreamresellersIdPatch)
router.delete("/delete/:_id", deleteXtreamresellers)
