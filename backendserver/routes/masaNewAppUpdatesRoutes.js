import express from "express";
import masanewappupdatesdata from "../controller/masanewappupdatesController.js";
import { masaNewAppUpdatesbyObId,addMasaNewAppUpdates,deletemasanewappupdates,masanewappupdatesPatch } from "../controller/masanewappupdatesController.js";
const router = express.Router();
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const masaNewAppUpdatesdata = await masa_new_app_updates.find();
//     res.status(200).json(masaNewAppUpdatesdata);

//     // adminsdata.json();
//     console.log(masaNewAppUpdatesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/find",masanewappupdatesdata);
router.get("/:_id",masaNewAppUpdatesbyObId)
router.post("/post",addMasaNewAppUpdates)
router.delete("/delete/:_id",deletemasanewappupdates)
router.patch("/patch/:_id",masanewappupdatesPatch);


