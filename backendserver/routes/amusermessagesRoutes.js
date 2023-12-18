import express from "express";
import { AMusermessagesIdPatch, addAMusermessages, deleteAMusermessages, getAMusermessages, getAMusermessagesbyObId } from "../controller/amusermessagesController.js";
const router = express.Router();

export default router;

router.get("/get", getAMusermessages)
router.get("/get/:_id", getAMusermessagesbyObId)
router.post("/post", addAMusermessages)
router.patch("/patch/:_id", AMusermessagesIdPatch)
router.delete("/delete/:_id", deleteAMusermessages)