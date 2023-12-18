import express from "express";
import masanewusersdata from "../controller/masanewusersController.js";
import { masaNewUsersbyObId,addMasaNewUsers,deletemasanewusers,masanewusersPatch } from "../controller/masanewusersController.js";
const router = express.Router();
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const masanewusersdata = await masa_new_users.find();
//     res.status(200).json(masanewusersdata);

//     // adminsdata.json();
//     console.log(masanewusersdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });


router.get("/find",masanewusersdata);
router.get("/:_id",masaNewUsersbyObId)
router.post("/post",addMasaNewUsers)
router.delete("/delete/:_id",deletemasanewusers)
router.patch("/patch/:_id",masanewusersPatch);
