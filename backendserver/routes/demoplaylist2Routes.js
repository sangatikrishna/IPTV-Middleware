import express from "express";
import { adddemoplaylist2, deletedemoplaylist2, demoplaylist2IdPatch, getdemoplaylist2, getdemoplaylist2byObId } from "../controller/demoplaylist2Controller";
const router = express.Router();

export default router;

router.get("/get", getdemoplaylist2)
router.get("/get/:_id", getdemoplaylist2byObId)
router.post("/post", adddemoplaylist2)
router.patch("/patch/:_id", demoplaylist2IdPatch)
router.delete("/delete/:_id", deletedemoplaylist2)