import express from "express";
import acosdata from "../controller/acosController.js";
import { getAcosbyObId,addAcos,deleteacos ,acosPatch} from "../controller/acosController.js";
const router = express.Router();
export default router;
// module.exports= router;
// router.get("/", async (req, res) => {
//   try {
//     const acosdata = await acos.find();
//     res.status(200).json(acosdata);

//     // adminsdata.json();
//     console.log(acosdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });

router.get("/getacos",acosdata)
router.get("/getacos/:_id",getAcosbyObId);
router.post("/post" , addAcos)
router.delete("/delete/:_id",deleteacos)
router.patch("/patch/:_id",acosPatch);

