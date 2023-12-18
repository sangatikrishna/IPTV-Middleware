import express from "express";
import { AMuserprofilesIdPatch, addAMuserprofiles, deleteAMuserprofiles, getAMuserprofiles, getAMuserprofilesbyObId } from "../controller/amuserprofilesController.js";

const router = express.Router();

export default router;
router.get("/get", getAMuserprofiles)
router.get("/get/:_id", getAMuserprofilesbyObId)
router.post("/post", addAMuserprofiles)
router.patch("/patch/:_id", AMuserprofilesIdPatch)
router.delete("/delete/:_id", deleteAMuserprofiles)
