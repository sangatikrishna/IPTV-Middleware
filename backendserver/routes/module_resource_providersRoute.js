import express from "express";
const router = express.Router();
// import videos from "../models/adons_packages"
import module_resource_providers from "../models/module_resource_providers.js";
import moduleresourceprovidersdata from "../controller/module_resource_providersController.js";
import { module_resource_providersbyObId } from "../controller/module_resource_providersController.js";
import { addmodule_resource_providers } from "../controller/module_resource_providersController.js";
import { deletemodule_resource_providers } from "../controller/module_resource_providersController.js";
import { module_resource_providersPatch } from "../controller/module_resource_providersController.js";
export default router;

router.get("/find",moduleresourceprovidersdata);
router.get("/:_id",module_resource_providersbyObId);
router.post("/post",addmodule_resource_providers);
router.delete("/delete/:_id",deletemodule_resource_providers)
router.patch("/patch/:_id",module_resource_providersPatch);
router.get("/", async (req, res) => {
  try {
    const module_resource_providersdata = await module_resource_providers.find();
    res.status(200).json(module_resource_providersdata);

    // adminsdata.json();
    console.log(module_resource_providersdata);
  } catch (error) {
    // res.status(500).json(error);
    throw error;
  }
});