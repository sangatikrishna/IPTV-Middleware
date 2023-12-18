import express from "express";
import masaoffermessagesdata from "../controller/masaoffermessagesController.js";
import { masaOfferMessagesbyObId,addMasaOfferMessages,deletemasaoffermessages,masaoffermessagesPatch } from "../controller/masaoffermessagesController.js";
const router = express.Router();
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const masaoffermessagesdata = await masa_offer_messages.find();
//     res.status(200).json(masaoffermessagesdata);

//     // adminsdata.json();
//     console.log(masaoffermessagesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/find",masaoffermessagesdata);
router.get("/:_id",masaOfferMessagesbyObId);
router.post("/post",addMasaOfferMessages);
router.delete("/delete/:_id",deletemasaoffermessages);
router.patch("/patch/:_id",masaoffermessagesPatch);


