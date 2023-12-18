import express from "express";
const router = express.Router();
// import Saz1_Main_URL from "../Routes/Saz1_Main_URL.js";
import Saz1MainURLdata from "../controller/saz1mainurlController.js";
import  { Saz1MainURLdatabyId } from "../controller/saz1mainurlController.js";
import { addshahidnewusers} from "../controller/shahidnewusersController.js";
import { deleteshahidnewusers } from "../controller/shahidnewusersController.js";
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const Saz1_Main_URLdata = await Saz1_Main_URL.find();
//     res.status(200).json(Saz1_Main_URLdata);

//     // adminsdata.json();
//     console.log(Saz1_Main_URLdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
router.get("/get",Saz1MainURLdata);
router.post("/post",Saz1MainURLdatabyId);
// router.delete("/delete/:_id",deleteshahidnewusers)