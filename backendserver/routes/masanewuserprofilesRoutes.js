import express from "express";

import { MasanewuserprofileIdPatch, addMasanewuserprofile, deleteMasanewuserprofile, getMasanewuserprofile, getMasanewuserprofilebyObId } from "../controller/masanewuserprofileController.js";

const router = express.Router();

export default router;

router.post("/post", addMasanewuserprofile)
router.get("/get", getMasanewuserprofile)
router.get("/get/:_id", getMasanewuserprofilebyObId)
router.delete("/delete/:_id", deleteMasanewuserprofile)
router.patch("/patch/:_id", MasanewuserprofileIdPatch);

// router.get("/", async (req, res) => {
//   try {
//     const masanewuserprofiles = await masa_new_user_profiles.find();
//     res.status(200).json(masanewuserprofiles);

//     // adminsdata.json();
//     console.log(masanewuserprofiles);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
