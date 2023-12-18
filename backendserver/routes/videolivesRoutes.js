import express from "express";
import { VideolivesIdPatch, addvideolives, deleteVideolives, getvideolives, getvideolivesbyObId } from "../controller/videolivesController.js";

const router = express.Router();

export default router;
router.post("/post", addvideolives)
router.get("/get", getvideolives)
router.get("/get/:_id", getvideolivesbyObId)
router.delete("/delete/:_id", deleteVideolives)
router.patch("/patch/:_id", VideolivesIdPatch);
