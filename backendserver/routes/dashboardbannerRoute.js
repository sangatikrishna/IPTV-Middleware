import express from "express";
import dashboard_bannersdata, { addBanner, dashboard_bannersPatch, dashboard_bannersSortable, deltebanner, getBannerbyObId } from "../controller/dashboardbannercontroller.js";
const router = express.Router();

export default router;

router.get("/list",dashboard_bannersdata);
router.get("/filter",dashboard_bannersSortable);
router.patch("/patch/:_id",dashboard_bannersPatch);
router.post("/post",addBanner);
router.get("/list/:_id",getBannerbyObId);
router.delete("/delete/:_id",deltebanner  );
  