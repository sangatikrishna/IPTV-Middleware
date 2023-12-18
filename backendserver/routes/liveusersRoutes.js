import express from "express";
const router = express.Router();
// import live_users from "../models/live_users.js";
import { liveusersbyObId } from "../controller/liveusersController.js";
import liveusersdata from "../controller/liveusersController.js";
import { addliveusers } from "../controller/liveusersController.js";
import { deleteliveusers } from "../controller/liveusersController.js";
import { liveusersPatch } from "../controller/liveusersController.js";
export default router;

router.get("/find",liveusersdata);
router.get("/get/:_id",liveusersbyObId);
router.post("/post",addliveusers);
router.delete("/delete/:_id",deleteliveusers);
router.patch("/patch/:_id",liveusersPatch);




// router.get("/", async (req, res) => {
//   try {
//     const liveusersdata = await live_users.find();
//     res.status(200).json(liveusersdata);

//     // adminsdata.json();
//     console.log(liveusersdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
