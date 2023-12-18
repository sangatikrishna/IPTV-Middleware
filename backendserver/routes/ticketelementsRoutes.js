import express from "express";
const router = express.Router();
// import ticket_elements from "../models/ticket_elements.js";
import { ticketelementsbyObId } from "../controller/ticketelementsController.js";
import ticketelementsdata from "../controller/ticketelementsController.js";
import { addticketelements } from "../controller/ticketelementsController.js";
import { deleteticketelements } from "../controller/ticketelementsController.js";
import { ticketelementsPatch } from "../controller/ticketelementsController.js";
export default router;

router.get("/find",ticketelementsdata);
router.get("/:_id",ticketelementsbyObId);
router.post("/post",addticketelements);
router.delete("/delete/:_id",deleteticketelements);
router.patch("/patch/:_id",ticketelementsPatch);



// router.get("/", async (req, res) => {
//   try {
//     const ticketelementsdata = await ticket_elements.find();
//     res.status(200).json(ticketelementsdata);

//     // adminsdata.json();
//     console.log(ticketelementsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
