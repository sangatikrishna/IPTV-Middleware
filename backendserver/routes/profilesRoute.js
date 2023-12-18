import express from "express";
import profilesdata, { addprofile, deleteprofile, getprofilebyObId, profilesPatch, profilesSortable } from "../controller/profilesController.js";
const router = express.Router();

export default router;

router.get("/list",profilesdata);
router.get("/filter",profilesSortable);
router.patch("/patch/:_id",profilesPatch);
router.post("/post",addprofile);
router.get("/list/:_id",getprofilebyObId);
router.delete("/delete/:_id",deleteprofile );
  