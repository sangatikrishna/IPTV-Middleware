import express from "express";
import ticketrepliesdata from "../controller/ticketrepliesController.js";
import { ticketrepliesbyId } from "../controller/ticketrepliesController.js";
import { addticketreplies } from "../controller/ticketrepliesController.js";
import { deleteticketreplies } from "../controller/ticketrepliesController.js";
import { ticketrepliesPatch } from "../controller/ticketrepliesController.js";
const router = express.Router();
export default router;



router.get("/find",ticketrepliesdata);
router.get("/:_id",ticketrepliesbyId);
router.post("/post",addticketreplies);
router.delete("/delete/:_id",deleteticketreplies);
router.patch("/patch/:_id",ticketrepliesPatch);



// router.get("/", async (req, res) => {
//   try {
//     const ticketrepliesdata = await ticket_replies.find();
//     res.status(200).json(ticketrepliesdata);

//     // adminsdata.json();
//     console.log(ticketrepliesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
