import express from "express";
import userinfosdata, { deleteuserinfos } from "../controller/userinfosController.js";
import { userinfosbyId } from "../controller/userinfosController.js";
import { adduserinfos } from "../controller/userinfosController.js";
import { userinfospatch } from "../controller/userinfosController.js";
const router = express.Router();
export default router;




router.get("/find",userinfosdata);
router.get("/:_id",userinfosbyId);
router.post("/post",adduserinfos);
router.delete("/delete/:_id",deleteuserinfos);
router.patch("/patch/:_id",userinfospatch);


// router.get("/", async (req, res) => {
//   try {
//     const userinfosdata = await userinfos.find();
//     res.status(200).json(userinfosdata);

//     // adminsdata.json();
//     console.log(userinfosdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
