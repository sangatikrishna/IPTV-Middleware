import express from "express";
import commonlogindata, { addLogin, common_loginPatch, common_loginsortable, deletelogin, getLoginbyObId } from "../controller/commonloginController.js";
const router = express.Router();

export default router;

router.get("/list",commonlogindata);
router.get("/filter",common_loginsortable);
router.patch("/patch/:_id",common_loginPatch);
router.post("/post",addLogin)
router.get("/list/:_id",getLoginbyObId)
router.delete("/delete/:_id",deletelogin  )
