import express from "express";
import { vejo_contact_uspatch } from "../controller/vejocontactusController.js";
import { deletevejo_contact_us } from "../controller/vejocontactusController.js";
import { addvejo_contact_us } from "../controller/vejocontactusController.js";
import { vejo_contact_usbyId } from "../controller/vejocontactusController.js";
import vejo_contact_usdata from "../controller/vejocontactusController.js";

const router = express.Router()
export default router;




router.get("/find",vejo_contact_usdata);
router.get("/:_id",vejo_contact_usbyId);
router.post("/post",addvejo_contact_us);
router.delete("/delete/:_id",deletevejo_contact_us);
router.patch("/patch/:_id",vejo_contact_uspatch);


// router.get("/", async (req, res) => {
//   try {
//     const vejo_contact_usdata = await vejo_contact_us.find();
//     res.status(200).json(vejo_contact_usdata);

//     // adminsdata.json();
//     console.log(vejo_contact_usdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
