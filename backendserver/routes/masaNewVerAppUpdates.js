import express from "express";
import masanewverappupdatesdata from "../controller/masanewverappupdatesController.js";
import { masaNewVerAppUpdatesbyObId,addMasaNewVerAppUpdates,deletemasanewverappupdates,masanewverappupdatesPatch } from "../controller/masanewverappupdatesController.js";
const router = express.Router();
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const masanewverappupdatesdata = await masa_new_ver_app_updates.find();
//     res.status(200).json(masanewverappupdatesdata);

//     // adminsdata.json();
//     console.log(masanewverappupdatesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/find",masanewverappupdatesdata);
router.get("/:_id",masaNewVerAppUpdatesbyObId);
router.post("/post",addMasaNewVerAppUpdates);
router.delete("/delete/:_id",deletemasanewverappupdates);
router.patch("/patch/:_id",masanewverappupdatesPatch);

