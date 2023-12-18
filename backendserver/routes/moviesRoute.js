import express from "express";
const router = express.Router();
import videos from "../models/video.js";
import authController from "../Controller/authController.js"
import {protect} from "../Controller/authController.js"
import videosdata, { deletemovie, getMoviebyObId, moviesPatch } from "../controller/moviesController.js"
import {addMovie} from "../controller/moviesController.js"

import { movieSortable } from "../controller/moviesController.js";

export default router;

router.get("/video",videosdata);
router.get("/filter",movieSortable);
router.patch("/patch/:_id",moviesPatch);
router.post("/post",addMovie)
router.get("/video/:_id",getMoviebyObId)
router.delete("/delete/:_id",deletemovie)




