import express from "express";
import video_live_categoriesdata from "../controller/video_live_categoriesController.js";
import { video_live_categoriesdatabyId } from "../controller/video_live_categoriesController.js";
import { addvideo_live_categories } from "../controller/video_live_categoriesController.js";
import { deletevideo_live_categories } from "../controller/video_live_categoriesController.js";
import { video_live_categoriespatch } from "../controller/video_live_categoriesController.js";
const router = express.Router();

export default router;



router.get("/find",video_live_categoriesdata);
router.get("/:_id",video_live_categoriesdatabyId);
router.post("/post",addvideo_live_categories);
router.delete("/delete/:_id",deletevideo_live_categories);
router.patch("/patch/:_id",video_live_categoriespatch);




// router.get("/", async (req, res) => {
//   try {
//     const video_live_categoriesdata = await video_live_categories.find();
//     res.status(200).json(video_live_categoriesdata);

//     // adminsdata.json();
//     console.log(video_live_categoriesdata);
//   } catch (error) {
//     // res.status(500).json(error);
//     throw error;
//   }
// });
