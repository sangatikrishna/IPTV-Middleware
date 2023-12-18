import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import multi_user_logins from "../models/multi_user_logins.js";
import multi_user_loginsdata from "../controller/multi_user_loginsController.js";
import { multi_user_loginsbyObId } from "../controller/multi_user_loginsController.js";
import { addMulti_user_logins } from "../controller/multi_user_loginsController.js";
import { deletemulti_user_logins } from "../controller/multi_user_loginsController.js";
import { multi_user_loginsPatch } from "../controller/multi_user_loginsController.js";
export default router;

router.get("/find",multi_user_loginsdata);
router.get("/:_id",multi_user_loginsbyObId);
router.post("/post",addMulti_user_logins);
router.delete("/delete/:_id",deletemulti_user_logins)
router.patch("/patch/:_id",multi_user_loginsPatch);
router.get("/", async (req, res) => {
  try {
    const multi_user_loginsdata = await multi_user_logins.find();
    res.status(200).json(multi_user_loginsdata);

    // adminsdata.json();
    console.log(multi_user_loginsdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});