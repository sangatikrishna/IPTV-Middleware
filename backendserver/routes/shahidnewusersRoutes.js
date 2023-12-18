import express from "express";
const router = express.Router();
// import shahid_new_users from "../models/shahidnewusers.js";
export default router;
import shahidnewusers, { Shahidnewusers } from "../controller/shahidnewusersController.js";
import  { shahidnewusersbyId } from "../controller/shahidnewusersController.js";
import { addshahidnewusers} from "../controller/shahidnewusersController.js";
import { deleteshahidnewusers } from "../controller/shahidnewusersController.js";
// router.get("/", async (req, res) => {
//   try {
//     const shahidnewusers = await shahid_new_users.find();
//     res.status(200).json(shahidnewusers);

//     // adminsdata.json();
//     console.log(shahidnewusers);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
router.get("/get",shahidnewusers);
router.get("/:_id",shahidnewusersbyId);
router.post("/post",addshahidnewusers);
router.delete("/delete/:_id",deleteshahidnewusers);
router.patch("/patch/:_id",Shahidnewusers);