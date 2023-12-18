import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import masa_renewal_activation_codes from "../models/masa_renewal_activation_codes.js";
import masa_renewal_activation_codesdata, { addMasa_renewal_activation_codes } from "../controller/masa_renewal_activation_codesController.js";
import { masa_renewal_activation_codesbyObId } from "../controller/masa_renewal_activation_codesController.js";
import { deletemasa_renewal_activation_codes } from "../controller/masa_renewal_activation_codesController.js";
import { masa_renewal_activation_codesPatch } from "../controller/masa_renewal_activation_codesController.js";
export default router;


router.get("/find",masa_renewal_activation_codesdata);
router.get("/:_id",masa_renewal_activation_codesbyObId);
router.post("/post",addMasa_renewal_activation_codes);
router.delete("/delete/:_id",deletemasa_renewal_activation_codes)
router.patch("/patch/:_id",masa_renewal_activation_codesPatch);
router.get("/", async (req, res) => {
  try {
    const masa_renewal_activation_codesdata = await masa_renewal_activation_codes.find();
    res.status(200).json(masa_renewal_activation_codesdata);

    // adminsdata.json();
    console.log(masa_renewal_activation_codesdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});