import express from "express";
const router = express.Router();
// import catchup_programs from "../models/catchup_programs.js";
import { multiusersPatch, multiusersbyObId } from "../controller/multiusersController.js";
import multiusersdata from "../controller/multiusersController.js";
import { addmultiusers } from "../controller/multiusersController.js";
import { deletemultiusers } from "../controller/multiusersController.js";
export default router;

router.get("/find",multiusersdata);
router.get("/:_id",multiusersbyObId)
router.post("/post",addmultiusers)
router.delete("/delete/:_id",deletemultiusers)
router.patch("/patch/:_id",multiusersPatch);
// router.get("/", async (req, res) => {
//   try {
//     const multiusersdata = await catchup_programs.find();
//     res.status(200).json(multiusersdata);

//     // adminsdata.json();
//     console.log(multiusersdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
