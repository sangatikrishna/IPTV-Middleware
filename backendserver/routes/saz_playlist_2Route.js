import express from "express";
const router = express.Router();
import playlistsaz2data from "../controller/saz_playlist_2Controller.js";
import { playlistsaz2byObId, addplaylistsaz2, deleteplaylistsaz2, playlist_saz2Patch } from "../controller/saz_playlist_2Controller.js";
export default router;

router.get("/find",playlistsaz2data);
router.get("/:_id",playlistsaz2byObId);
router.post("/post",addplaylistsaz2);
router.delete("/delete/:_id",deleteplaylistsaz2);
router.patch("/patch/:_id",playlist_saz2Patch);



// router.get("/", async (req, res) => {
//   try {
//     const playlistsaz2data = await Playlist_saz1.find();
//     res.status(200).json(playlistsaz2data);

//     // adminsdata.json();
//     console.log(playlistsaz2data);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
