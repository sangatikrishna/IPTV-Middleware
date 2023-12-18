import express from "express";
const router = express.Router();
import adminsettingsdata from "../controller/adminsettingsController.js";
import { adminsettingsbyObId,addAdminSettings,deleteadminsettings ,adminsettingsPatch} from "../controller/adminsettingsController.js"
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const adminsdata = await admin_settings.find();
//     res.status(200).json(adminsdata);

//     // adminsdata.json();
//     console.log(adminsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/find",adminsettingsdata);
router.get("/:_id",adminsettingsbyObId);
router.post("/post",addAdminSettings);
router.delete("/delete/:_id",deleteadminsettings);
router.patch("/patch/:_id",adminsettingsPatch);
