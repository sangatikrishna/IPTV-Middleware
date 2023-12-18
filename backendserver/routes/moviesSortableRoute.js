import express from "express";
const router = express.Router();
import videos from "../models/video.js";
import authController from "../Controller/authController.js"
import {protect} from "../Controller/authController.js"
import videosdata, { moviesPatch } from "../Controller/moviesController.js"

import { movieSortable } from "../controller/moviesortableController.js"
export default router;




router.get("/",movieSortable);


