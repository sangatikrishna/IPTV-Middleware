import express from "express";
import { XtreamappupdatesIdPatch, addXtreamappupdates, deleteXtreamappupdates, getXtreamappupdates, getXtreamappupdatesbyObId } from "../controller/xtreamappupdatesController.js";
const router = express.Router();

export default router;


router.post("/post", addXtreamappupdates)
router.get("/get",getXtreamappupdates)
router.get("/get/:_id",getXtreamappupdatesbyObId)
router.delete("/delete/:_id",deleteXtreamappupdates)
router.patch("/patch/:_id",XtreamappupdatesIdPatch);
