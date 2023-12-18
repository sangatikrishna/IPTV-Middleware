import express from "express";
const router = express.Router();
// import shahid_new_user_product_assignments from "../controller/shahidnewuserproductassignmentsController.js";
import shahidnewuserproductdata, { Shahidnewuser } from "../controller/shahidnewuserproductassignmentsController.js";
import { shahidnewuserproductdatabyId } from "../controller/shahidnewuserproductassignmentsController.js";
import { addshahidnewuserproduct } from "../controller/shahidnewuserproductassignmentsController.js";
import { deleteshahidnewuserproduct } from "../controller/shahidnewuserproductassignmentsController.js";
export default router;
// router.get("/", async (req, res) => {
//   try {
//     const shahidnewuserproductassignments = await shahid_new_user_product_assignments.find();
//     res.status(200).json(shahidnewuserproductassignments);

//     // adminsdata.json();
//     console.log(shahidnewuserproductassignments);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
router.get("/get",shahidnewuserproductdata);
router.get("/:_id",shahidnewuserproductdatabyId);
router.post("/post",addshahidnewuserproduct);
router.delete("/delete/:_id",deleteshahidnewuserproduct);
router.patch("/patch/:_id",Shahidnewuser);