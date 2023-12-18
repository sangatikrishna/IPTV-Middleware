import express from "express";
const router = express.Router();
// import ticket_categories from "../models/ticket_categories.js";
import { ticketcategoriesbyObId } from "../controller/ticketcategoriesController.js";
import ticketcategoriesdata from "../controller/ticketcategoriesController.js";
import { addticketcategories } from "../controller/ticketcategoriesController.js";
import { deleteticketcategories } from "../controller/ticketcategoriesController.js";
import { ticketcategoriesPatch } from "../controller/ticketcategoriesController.js";
export default router;

router.get("/find",ticketcategoriesdata);
router.get("/:_id",ticketcategoriesbyObId);
router.post("/post",addticketcategories);
router.delete("/delete/:_id",deleteticketcategories);
router.patch("/patch/:_id",ticketcategoriesPatch);



// router.get("/", async (req, res) => {
//   try {
//     const ticketcategoriesdata = await ticket_categories.find();
//     res.status(200).json(ticketcategoriesdata);

//     // adminsdata.json();
//     console.log(ticketcategoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
