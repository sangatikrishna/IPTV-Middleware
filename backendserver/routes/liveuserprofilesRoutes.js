import express from "express";
const router = express.Router();
// import live_user_profiles from "../models/live_user_profiles.js";
import { liveuserprofilesbyObId } from "../controller/liveuserprofilesController.js";
import liveuserprofilesdata from "../controller/liveuserprofilesController.js";
import { addliveuserprofiles } from "../controller/liveuserprofilesController.js";
import { deleteliveuserprofiles } from "../controller/liveuserprofilesController.js";
import { liveuserprofilesPatch } from "../controller/liveuserprofilesController.js"
export default router;

router.get("/find",liveuserprofilesdata);
router.get("/get/:_id",liveuserprofilesbyObId);
router.post("/post",addliveuserprofiles);
router.delete("/delete/:_id",deleteliveuserprofiles);
router.patch("/patch/:_id",liveuserprofilesPatch);





// router.get("/", async (req, res) => {
//   try {
//     const liveuserprofilesdata = await live_user_profiles.find();
//     res.status(200).json(liveuserprofilesdata);

//     // adminsdata.json();
//     console.log(liveuserprofilesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
