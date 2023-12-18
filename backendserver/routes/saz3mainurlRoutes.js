import express from "express";
import { Saz3MainURLPatch, addsaz3MainURL, deletesaz3MainURL, getsaz3MainURL, getsaz3MainURLObId } from "../controller/saz3mainurlController.js";

const router = express.Router();

export default router;


router.post("/post", addsaz3MainURL)
router.get("/get",getsaz3MainURL)
router.get("/get/:_id",getsaz3MainURLObId)
router.delete("/delete/:_id",deletesaz3MainURL)
router.patch("/patch/:_id",Saz3MainURLPatch);