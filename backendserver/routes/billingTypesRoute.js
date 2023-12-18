import express from "express";
const router = express.Router();
import billingtypesdata, { billingtypesPatch } from "../controller/billingtypesController.js";
import { billingtypesbyObId } from "../controller/billingtypesController.js";
import { addbillingtypes } from "../controller/billingtypesController.js";
import { deletebillingtypes } from "../controller/billingtypesController.js";
export default router;

router.get("/find",billingtypesdata);
router.get("/:_id",billingtypesbyObId)
router.post("/post",addbillingtypes)
router.delete("/delete/:_id",deletebillingtypes)
router.patch("/patch/:_id",billingtypesPatch);
// router.get("/", async (req, res) => {
//   try {
//     const billingtypesdata = await billingtypes_categories.find();
//     res.status(200).json(billingtypesdata);

//     // adminsdata.json();
//     console.log(billingtypesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
