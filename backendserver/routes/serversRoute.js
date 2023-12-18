import express from "express";
import serversdata, { addserver, deleteserver, getserverbyObId, serversPatch, serversSortable } from "../controller/serversController.js";
const router = express.Router();

export default router;

router.get("/list",serversdata);
router.get("/filter",serversSortable);
router.patch("/patch/:_id",serversPatch);
router.post("/post",addserver);
router.get("/list/:_id",getserverbyObId);
router.delete("/delete/:_id",deleteserver );
  