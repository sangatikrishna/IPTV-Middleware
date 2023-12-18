import express from "express";
import saz2mainurldata, { Saz2_Main_URLPatch, Saz2_Main_URLsortable, addsaz2, deletesaz2, getsaz2byObId } from "../controller/saz2mainurlController.js";
const router = express.Router();

export default router;

router.get("/list",saz2mainurldata);
router.get("/filter",Saz2_Main_URLsortable);
router.patch("/patch/:_id",Saz2_Main_URLPatch);
router.post("/post",addsaz2)
router.get("/list/:_id",getsaz2byObId)
router.delete("/delete/:_id",deletesaz2  )
