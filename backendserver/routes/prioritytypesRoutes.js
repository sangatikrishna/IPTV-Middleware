import express from "express";
import priority_typesdata, { addpriority, deletepriority, getprioritybyObId, priority_typesPatch, priority_typesSortable } from "../controller/prioritytypesController.js";
const router = express.Router();

export default router;

router.get("/list",priority_typesdata);
router.get("/filter",priority_typesSortable);
router.patch("/patch/:_id",priority_typesPatch);
router.post("/post",addpriority);
router.get("/list/:_id",getprioritybyObId);
router.delete("/delete/:_id",deletepriority  );
  