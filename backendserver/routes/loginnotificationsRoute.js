import express from "express";
import { LoginnotificationIdPatch, addLoginnotification, deleteLoginnotification, getLoginnotification, getLoginnotificationbyObId } from "../controller/loginnotificationController.js";
const router = express.Router();

export default router;


router.post("/post", addLoginnotification)
router.get("/get",getLoginnotification)
router.get("/get/:_id",getLoginnotificationbyObId)
router.delete("/delete/:_id",deleteLoginnotification)
router.patch("/patch/:_id",LoginnotificationIdPatch);
// router.get("/", async (req, res) => {
//   try {
//     const loginnotifdata = await login_notifications.find();
//     res.status(200).json(loginnotifdata);

//     // adminsdata.json();
//     console.log(loginnotifdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
