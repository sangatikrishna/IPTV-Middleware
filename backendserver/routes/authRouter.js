 import express from "express";
import {signup} from "../controller/authController.js";
import {getuser } from "../controller/authController.js"
import login from "../controller/authController.js"
import authController from "../controller/authController.js"
 const router=express.Router()
 router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/getuser").get(getuser);
// router.route("/signin").post(signin);


export default router;
