import express from "express";
import Livetvaudiosdatas from "../controller/livetvaudioController.js";
import { LivetvaudiosbyId } from "../controller/livetvaudioController.js";
import { addLivetvaudios } from "../controller/livetvaudioController.js";
import { deletelivetvaudios } from "../controller/livetvaudioController.js";
import { LivetvaduioPatch } from "../controller/livetvaudioController.js";

const router = express.Router();

export default router;


router.get("/find",Livetvaudiosdatas);
router.get("/:_id",LivetvaudiosbyId);
router.post("/post",addLivetvaudios);
router.delete("/delete/:_id",deletelivetvaudios);
router.patch("/patch/:_id",LivetvaduioPatch);



