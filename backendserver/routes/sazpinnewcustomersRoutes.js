import express from "express";
import { SazpinnewcustomersIdPatch, addSazpinnewcustomers, deleteSazpinnewcustomers, getSazpinnewcustomers, getSazpinnewcustomersbyObId } from "../controller/sazpinnewcustomerController.js";
const router = express.Router();

export default router;

router.get("/get", getSazpinnewcustomers)
router.get("/get/:_id", getSazpinnewcustomersbyObId)
router.post("/post", addSazpinnewcustomers)
router.patch("/patch/:_id", SazpinnewcustomersIdPatch)
router.delete("/delete/:_id", deleteSazpinnewcustomers)