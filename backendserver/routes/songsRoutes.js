import express from "express";
const router = express.Router();
// import songs from "../models/songs.js";
import { songsbyObId } from "../controller/songsController.js";
import songsdata from "../controller/songsController.js";
import { addsongs } from "../controller/songsController.js";
import { deletesongs } from "../controller/songsController.js";
import { songsPatch } from "../controller/songsController.js";
export default router;

router.get("/find",songsdata);
router.get("/get/:_id",songsbyObId);
router.post("/post",addsongs);
router.delete("/delete/:_id",deletesongs);
router.patch("/patch/:_id",songsPatch);





// router.get("/", async (req, res) => {
//   try {
//     const songsdata = await songs.find();
//     res.status(200).json(songsdata);

//     // adminsdata.json();
//     console.log(songsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
