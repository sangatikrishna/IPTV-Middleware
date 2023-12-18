import express from "express";
const router = express.Router();
import demo_saz_playlist_1 from "../models/demo_saz_playlist_1.js";
import { demo_saz_playlist_1Patch, demo_saz_playlist_1byObId, addDemo_saz_playlist_1, deletedemo_saz_playlist_1 } from "../controller/demo_saz_playlist_1Controller.js";
import demo_saz_playlist_1data from "../controller/demo_saz_playlist_1Controller.js";
export default router;


router.get("/find",demo_saz_playlist_1data);
router.get("/:_id",demo_saz_playlist_1byObId);
router.post("/post",addDemo_saz_playlist_1);
router.delete("/delete/:_id",deletedemo_saz_playlist_1)
router.patch("/patch/:_id",demo_saz_playlist_1Patch);