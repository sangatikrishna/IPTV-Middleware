import express from "express";
const router = express.Router();
// import states from "../models/states.js";
import { statesbyObId } from "../controller/statesController.js";
import statesdata from "../controller/statesController.js";
import { addstates } from "../controller/statesController.js";
import { deletestates } from "../controller/statesController.js";
import { statesPatch } from "../controller/statesController.js";
export default router;

router.get("/find",statesdata);
router.get("/get/:_id",statesbyObId);
router.post("/post",addstates);
router.delete("/delete/:_id",deletestates);
router.patch("/patch/:_id",statesPatch);




// router.get("/", async (req, res) => {
//   try {
//     const statesdata = await states.find();
//     res.status(200).json(statesdata);

//     // adminsdata.json();
//     console.log(statesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
