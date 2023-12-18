import express from "express";
import countriesdata, { addCountry, countriesPatch, countriesSortable, deletecountry, getCountrybyObId } from "../controller/countriesController.js";
const router = express.Router();

export default router;

router.get("/list",countriesdata);
router.get("/filter",countriesSortable);
router.patch("/patch/:_id",countriesPatch);
router.post("/post",addCountry);
router.get("/list/:_id",getCountrybyObId);
router.delete("/delete/:_id",deletecountry  );
  