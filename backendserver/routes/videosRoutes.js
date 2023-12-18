import express from "express";
import video from "../models/videos.js";
import { VideoIdPatch, addvideo, deleteVideo, getvideo, getvideobyObId } from "../controller/videosController.js";

const router = express.Router();

export default router;
router.post("/post", addvideo)
router.get("/get", getvideo)
router.get("/get/:_id", getvideobyObId)
router.delete("/delete/:_id", deleteVideo)
router.patch("/patch/:_id", VideoIdPatch)
