import express from "express";
import adonsBillingTypesdata from "../controller/adonsbillingtypesController.js";
import { getAdonsBillingTypesbyObId,addAdonsBillingTypes,deleteAdonsBillingTypes,adonsbillingtypesPatch} from "../controller/adonsbillingtypesController.js";
const router = express.Router();
export default router;
// module.exports= router;
// router.get("/", async (req, res) => {
//   try {
//     const adonsdata = await adons_billing_types.find();
//     res.status(200).json(adonsdata);

//     // adminsdata.json();
//     console.log(adonsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/get",adonsBillingTypesdata)
router.get("/get/:_id",getAdonsBillingTypesbyObId);
router.post("/post" , addAdonsBillingTypes)
router.delete("/delete/:_id",deleteAdonsBillingTypes)
router.patch("/patch/:_id",adonsbillingtypesPatch);


