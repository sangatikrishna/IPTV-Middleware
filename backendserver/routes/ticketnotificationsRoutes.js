import express from "express";
const router = express.Router();
// import ticket_notifications from "../models/ticket_notifications.js";
import { ticketnotificationsbyObId } from "../controller/ticketnotificationsController.js";
import ticketnotificationsdata from "../controller/ticketnotificationsController.js";
import { addticketnotifications } from "../controller/ticketnotificationsController.js";
import { deleteticketnotifications } from "../controller/ticketnotificationsController.js";
import { ticketnotificationsPatch } from "../controller/ticketnotificationsController.js";
export default router;

router.get("/find",ticketnotificationsdata);
router.get("/:_id",ticketnotificationsbyObId);
router.post("/post",addticketnotifications);
router.delete("/delete/:_id",deleteticketnotifications);
router.patch("/patch/:_id",ticketnotificationsPatch);




// router.get("/", async (req, res) => {
//   try {
//     const ticketnotificationsdata = await ticket_notifications.find();
//     res.status(200).json(ticketnotificationsdata);

//     // adminsdata.json();
//     console.log(ticketnotificationsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
