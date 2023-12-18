import express from "express";
const router = express.Router();
// import Playlist_saz1 from "../models/Playlist_saz1.js";
import { Playlistsaz1byObId } from "../controller/saz_playlist_1Controller.js";
import playlistsaz1data from "../controller/saz_playlist_1Controller.js";
import { addPlaylistsaz1 } from "../controller/saz_playlist_1Controller.js";
import { deletePlaylistsaz1 } from "../controller/saz_playlist_1Controller.js";
import { Playlistsaz1Patch } from "../controller/saz_playlist_1Controller.js"
export default router;

router.get("/find",playlistsaz1data);
router.get("/:_id",Playlistsaz1byObId);
router.post("/post",addPlaylistsaz1);
router.delete("/delete/:_id",deletePlaylistsaz1);
router.patch("/patch/:_id",Playlistsaz1Patch)



// router.get("/", async (req, res) => {
//   try {
//     const Playlistsaz1data = await Playlist_saz1.find();
//     res.status(200).json(Playlistsaz1data);

//     // adminsdata.json();
//     console.log(Playlistsaz1data);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
