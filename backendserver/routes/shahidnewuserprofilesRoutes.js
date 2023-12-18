import express from "express";
const router = express.Router();
// import shahid_new_user_profiles from "../models/shahidnewusers.js";
export default router;
import shahidnewuserprofiles, { Shahidnewuser } from "../controller/shahidnewuserprofilesController.js";
import  { shahidnewuserprofilesbyId } from "../controller/shahidnewuserprofilesController.js";
import { addshahidnewuserprofiles} from "../controller/shahidnewuserprofilesController.js";
import { deleteshahidnewuserprofiles } from "../controller/shahidnewuserprofilesController.js";
// router.get("/", async (req, res) => {
//   try {
//     const shahidnewuserprofiles = await shahid_new_user_profiles.find();
//     res.status(200).json(shahidnewuserprofiles);

//     // adminsdata.json();
//     console.log(shahidnewuserprofiles);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
router.get("/get",shahidnewuserprofiles);
router.get("/:_id",shahidnewuserprofilesbyId);
router.post("/post",addshahidnewuserprofiles);
router.delete("/delete/:_id",deleteshahidnewuserprofiles);
router.patch("/patch/:_id",Shahidnewuser);