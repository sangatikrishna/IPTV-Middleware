import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import adons_packages from "../models/adons_packages.js";
import { adons_packagesbyObId } from "../controller/adons_packagesController.js";
import { addAdonspackages } from "../controller/adons_packagesController.js";
import { deleteadonspackages } from "../controller/adons_packagesController.js";
import { adonspackagesPatch } from "../controller/adons_packagesController.js";
import adons_packagesdata from "../controller/adons_packagesController.js";
export default router;


router.get("/find",adons_packagesdata);
router.get("/:_id",adons_packagesbyObId);
router.post("/post",addAdonspackages);
router.delete("/delete/:_id",deleteadonspackages)
router.patch("/patch/:_id",adonspackagesPatch);
router.get("/", async (req, res) => {
  try {
    const adons_packagesdata = await adons_packages.find();
    res.status(200).json(adons_packagesdata);

    // adminsdata.json();
    console.log(adons_packagesdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});