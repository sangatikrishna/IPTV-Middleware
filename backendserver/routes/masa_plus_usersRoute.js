import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import masa_plus_users from "../models/masa_plus_users.js";
import masa_plus_usersdata from "../controller/masa_plus_usersController.js";
import { masa_plus_usersbyObId } from "../controller/masa_plus_usersController.js";
import { addMasa_plus_users } from "../controller/masa_plus_usersController.js";
import { deletemasa_plus_users } from "../controller/masa_plus_usersController.js";
import { masa_plus_usersPatch } from "../controller/masa_plus_usersController.js";
export default router;


router.get("/find",masa_plus_usersdata);
router.get("/:_id",masa_plus_usersbyObId);
router.post("/post",addMasa_plus_users);
router.delete("/delete/:_id",deletemasa_plus_users)
router.patch("/patch/:_id",masa_plus_usersPatch);
router.get("/", async (req, res) => {
  try {
    const masa_plus_usersdata = await masa_plus_users.find();
    res.status(200).json(masa_plus_usersdata);

    // adminsdata.json();
    console.log(masa_plus_usersdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});