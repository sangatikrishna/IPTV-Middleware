import express from "express";
const router = express.Router();
import groupsdata, { addGroups, deletegroups, groupsPatch, groupsbyObId } from "../controller/groupsController.js";
export default router;

router.get("/find",groupsdata);
router.get("/:_id",groupsbyObId)
router.post("/post",addGroups)
router.patch("/patch/:_id",groupsPatch);
router.delete("/delete/:_id",deletegroups)

// router.get("/", async (req, res) => {
//   try {
//     const groupsdata = await groups.find();
//     res.status(200).json(groupsdata);

//     // adminsdata.json();
//     console.log(groupsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
