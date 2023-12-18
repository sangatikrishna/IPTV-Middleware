import express from "express";
import { XtreammessagesIdPatch, addXtreammessages, deleteXtreammessages, getXtreammessages, getXtreammessagesbyObId } from "../controller/xtreammessagesController.js";
const router = express.Router();

export default router;


router.post("/post", addXtreammessages)
router.get("/get",getXtreammessages)
router.get("/get/:_id",getXtreammessagesbyObId)
router.delete("/delete/:_id",deleteXtreammessages)
router.patch("/patch/:_id",XtreammessagesIdPatch);
