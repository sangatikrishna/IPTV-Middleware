import express from "express";
const router = express.Router();
import shahid_new_app_updatesdata, { addshahid_new_app_updates, deleteshahid_new_app_updates, shahid_new_app_updatesPatch, shahid_new_app_updatesbyObId } from "../controller/shahid_new_app_updatesController.js";
export default router;

router.get("/find",shahid_new_app_updatesdata);
router.get("/:_id",shahid_new_app_updatesbyObId)
router.post("/post",addshahid_new_app_updates)
router.patch("/patch/:_id",shahid_new_app_updatesPatch);
router.delete("/delete/:_id",deleteshahid_new_app_updates)

// router.get("/", async (req, res) => {
//   try {
//     const shahid_new_app_updatesdata = await shahid_new_app_updates.find();
//     res.status(200).json(shahid_new_app_updatesdata);

//     // adminsdata.json();
//     console.log(shahid_new_app_updatesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });