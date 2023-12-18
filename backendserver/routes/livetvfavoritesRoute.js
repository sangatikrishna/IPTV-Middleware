import express from "express";
const router = express.Router();
import Livetvfavroutiesdata from "../controller/livetvfavroutiesController.js";
import { LivetvfavroutiesbyId } from "../controller/livetvfavroutiesController.js";
import { addLivetvfavrouties } from "../controller/livetvfavroutiesController.js";
import { deleteLivetvfavrouties } from "../controller/livetvfavroutiesController.js";
import { LivetvfavroutiesPatch } from "../controller/livetvfavroutiesController.js";

export default router;

// 652690ad9e7b10a2a388c873

router.get("/find",Livetvfavroutiesdata);
router.get("/:_id",LivetvfavroutiesbyId);
router.post("/post",addLivetvfavrouties);
router.delete("/delete/:_id",deleteLivetvfavrouties);
router.patch("/patch/:_id",LivetvfavroutiesPatch);


// router.get("/", async (req, res) => {
//   try {
    
//     const livetvfavoritesdata = await livetv_favorites.find();
//     res.status(200).json(livetvfavoritesdata);

//     // adminsdata.json();
//     console.log(livetvfavoritesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
