import express from "express";
import { AMuserIdPatch, addAMuser, deleteAMuser, getAMuser, getAMuserbyObId } from "../controller/amusersController.js";

const router = express.Router();

export default router;
router.get("/get", getAMuser)
router.get("/get/:_id", getAMuserbyObId)
router.post("/post", addAMuser)
router.patch("/patch/:_id", AMuserIdPatch)
router.delete("/delete/:_id", deleteAMuser)