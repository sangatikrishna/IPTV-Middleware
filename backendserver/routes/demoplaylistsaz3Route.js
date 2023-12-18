import express from "express";
import { adddemoplaylistsaz3, deletedemoplaylistsaz3, demoplaylistsaz3IdPatch, getdemoplaylistsaz3, getdemoplaylistsaz3byObId } from "../controller/demoplaylistsaz3Controller";
const router = express.Router();

export default router;

router.get("/get", getdemoplaylistsaz3)
router.get("/get/:_id", getdemoplaylistsaz3byObId)
router.post("/post", adddemoplaylistsaz3)
router.patch("/patch/:_id", demoplaylistsaz3IdPatch)
router.delete("/delete/:_id", deletedemoplaylistsaz3)