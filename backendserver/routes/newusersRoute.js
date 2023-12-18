import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { newusersPatch, newusersbyObId } from "../controller/newusersController.js";
import newusersdata from "../controller/newusersController.js";
import { addnewusers } from "../controller/newusersController.js";
import { deletenewusers } from "../controller/newusersController.js";
export default router;

router.get("/find",newusersdata);
router.get("/:_id",newusersbyObId)
router.post("/post",addnewusers)
router.delete("/delete/:_id",deletenewusers)
router.patch("/patch/:_id",newusersPatch);

// router.get("/", async (req, res) => {
//   try {
//     const newusersdata = await catchup_programs.find();
//     res.status(200).json(newusersdata);

//     // adminsdata.json();
//     console.log(newusersdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
