import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import aros from "../models/aros.js";
import arosdata from "../controller/arosController.js";
import { arosbyObId } from "../controller/arosController.js";
import { addAros } from "../controller/arosController.js";
import { deletearos } from "../controller/arosController.js";
import { arosPatch } from "../controller/arosController.js";
export default router;
router.get("/find",arosdata);
router.get("/:_id",arosbyObId);
router.post("/post",addAros);
router.delete("/delete/:_id",deletearos)
router.patch("/patch/:_id",arosPatch);
router.get("/", async (req, res) => {
  try {
    const arosdata = await aros.find();
    res.status(200).json(arosdata);

    // adminsdata.json();
    console.log(arosdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});