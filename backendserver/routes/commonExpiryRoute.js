import express from "express";
const router = express.Router();

import commonexpirydata, { addExpiry, common_expiryPatch, common_expirysortable, deleteexpiry, getExpirybyObId } from "../controller/commonexpiryController.js";
export default router;

router.get("/list",commonexpirydata);
router.get("/filter",common_expirysortable);
router.patch("/patch/:_id",common_expiryPatch);
router.post("/post",addExpiry)
router.get("/list/:_id",getExpirybyObId)
router.delete("/delete/:_id",deleteexpiry)
