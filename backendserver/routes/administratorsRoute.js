import express from "express";
// import countriesdata, { addCountry, countriesPatch, countriesSortable, deletecountry, getCountrybyObId } from "../controller/countriesController.js";
import administratorsdata, {administratorsPatch, getAdministratorsbyObId, addAdministrators, deleteadministrators,administratorsFilter} from "../controller/administratorsController.js";
const router = express.Router();

export default router;

router.get("/find",administratorsdata);
router.get("/:_id",getAdministratorsbyObId)
router.post("/post",addAdministrators)
router.patch("/patch/:_id",administratorsPatch);
router.delete("/delete/:_id",deleteadministrators)
  