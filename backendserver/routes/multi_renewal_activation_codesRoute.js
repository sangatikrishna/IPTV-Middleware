import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import multi_renewal_activation_codes from "../models/multi_renewal_activation_codes.js";
import multi_renewal_activation_codesdata from "../controller/multi_renewal_activation_codesController.js";
import { multi_renewal_activation_codesbyObId } from "../controller/multi_renewal_activation_codesController.js";
import { addMulti_renewal_activation_codes } from "../controller/multi_renewal_activation_codesController.js";
import { deletemulti_renewal_activation_codes } from "../controller/multi_renewal_activation_codesController.js";
import { multi_renewal_activation_codesPatch } from "../controller/multi_renewal_activation_codesController.js";
export default router;


router.get("/find",multi_renewal_activation_codesdata);
router.get("/:_id",multi_renewal_activation_codesbyObId);
router.post("/post",addMulti_renewal_activation_codes);
router.delete("/delete/:_id",deletemulti_renewal_activation_codes)
router.patch("/patch/:_id",multi_renewal_activation_codesPatch);
router.get("/", async (req, res) => {
  try {
    const multi_renewal_activation_codesdata = await multi_renewal_activation_codes.find();
    res.status(200).json(multi_renewal_activation_codesdata);

    // adminsdata.json();
    console.log(multi_renewal_activation_codesdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});