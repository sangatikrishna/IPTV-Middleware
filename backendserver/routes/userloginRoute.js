import express from "express";
import userlogindata from "../controller/userloginController.js";
import { userloginbyId } from "../controller/userloginController.js";
import { adduserlogin } from "../controller/userloginController.js";
import { deleteuserlogin } from "../controller/userloginController.js";
import { userloginpatch } from "../controller/userloginController.js";
const router = express.Router();
export default router;



router.get("/find",userlogindata);
router.get("/:_id",userloginbyId);
router.post("/post",adduserlogin);
router.delete("/delete/:_id",deleteuserlogin);
router.patch("/patch/:_id",userloginpatch);



// router.get("/", async (req, res) => {
//   try {
//     const userlogindata = await userlogin.find();
//     res.status(200).json(userlogindata);

//     // adminsdata.json();
//     console.log(userlogindata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
