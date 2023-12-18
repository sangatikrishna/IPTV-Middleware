import express from "express";
const router = express.Router();
import dashboardcontentsdata, { addDashboardcontents, dashboardcontentsPatch, dashboardcontentsbyObId, deletedashboardcontents } from "../controller/dashboardcontentsController.js";
export default router;

router.get("/find",dashboardcontentsdata);
router.get("/:_id",dashboardcontentsbyObId)
router.post("/post",addDashboardcontents)
router.patch("/patch/:_id",dashboardcontentsPatch);
router.delete("/delete/:_id",deletedashboardcontents)


// router.get("/", async (req, res) => {
//   try {
//     const dashboardcontentsdata = await dashboard_contents.find();
//     res.status(200).json(dashboardcontentsdata);

//     // adminsdata.json();
//     console.log(dashboardcontentsdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
