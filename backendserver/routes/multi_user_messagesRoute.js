import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import multi_user_messages from "../models/multi_user_messages.js";
import multi_user_messagesdata, { multi_user_messagesPatch }  from "../controller/multi_user_messagesController.js";
import { multi_user_messagesbyObId } from "../controller/multi_user_messagesController.js";
import { addMulti_user_messages } from "../controller/multi_user_messagesController.js";
import { deletemulti_user_messages } from "../controller/multi_user_messagesController.js";

export default router;


router.get("/find",multi_user_messagesdata);
router.get("/:_id",multi_user_messagesbyObId);
router.post("/post",addMulti_user_messages);
router.delete("/delete/:_id",deletemulti_user_messages)
router.patch("/patch/:_id",multi_user_messagesPatch);
router.get("/", async (req, res) => {
  try {
    const multi_user_messagesdata = await multi_user_messages.find();
    res.status(200).json(multi_user_messagesdata);

    // adminsdata.json();
    console.log(multi_user_messagesdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});