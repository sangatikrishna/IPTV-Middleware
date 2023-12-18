import dashboard_categories from "../models/dashboard_categories.js";
import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";

//GET
const dashboardcategoriesdata = async (req, res) => {
  try {
    const data = await dashboard_categories.find();

    res.status(200).json({
      // status:"success",
      // length:videodata.length,

      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
export default dashboardcategoriesdata;

//GET by _id
const dashboardcategoriesbyObId = async (req, res) => {
  try {
    const data = await dashboard_categories.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { dashboardcategoriesbyObId };

//POST API
const addDashboardcategories = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new dashboard_categories({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await dashboard_categories.find();
    return res.json(await dashboard_categories.find());

    // res.status(201).json({

    //       status:"success",
    //       length:newData.length,
    //       data:{
    //         newData
    //         }
    //       });
  } catch (err) {
    console.log(err.message);
  }
};
export { addDashboardcategories };

//DELETE API
const deletedashboardcategories = async (req, res) => {
  try {
    const deletedDashboardcategories =
      await dashboard_categories.findByIdAndDelete(req.params._id);
    if (!deletedDashboardcategories) res.status(404).send("No item found");

    // return
    const dashboardcategoriesdata = await dashboard_categories.find();

    res.status(200).json({
      status: "success",
      length: dashboardcategoriesdata.length,
      data: {
        dashboardcategoriesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletedashboardcategories };

//PATCH API
const dashboardcategoriesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await dashboard_categories.findOneAndUpdate(
      { _id: patchId },
      req.body,
      { new: true }
    );

    console.log(updated);
    res.json({ updated });
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
};
export { dashboardcategoriesPatch };
