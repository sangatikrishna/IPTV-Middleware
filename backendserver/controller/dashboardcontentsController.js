import dashboard_contents from "../models/dashboard_contents.js";
import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";

//GET
const dashboardcontentsdata = async (req, res) => {
  try {
    const data = await dashboard_contents.find();

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
export default dashboardcontentsdata;

// //GET by _id
const dashboardcontentsbyObId = async (req, res) => {
  try {
    const data = await dashboard_contents.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { dashboardcontentsbyObId };

// //POST API
const addDashboardcontents = async (req, res) => {
  const { id, title, status, position, category_id, stream_url, image, created, updated } = req.body;
  try {
    const newData = new dashboard_contents({
      id,
      title,
      status,
      position,
      category_id,
      stream_url,
      image,   
      created,
      updated,
    });
    await newData.save();
    // const videodata = await dashboard_contents.find();
    return res.json(await dashboard_contents.find());

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
export { addDashboardcontents };


//PATCH API
const dashboardcontentsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await dashboard_contents.findOneAndUpdate(
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
export { dashboardcontentsPatch };


//DELETE API
const deletedashboardcontents = async (req, res) => {
  try {
    const deletedDashboardcontents =
      await dashboard_contents.findByIdAndDelete(req.params._id);
    if (!deletedDashboardcontents) res.status(404).send("No item found");

    // return
    const dashboardcontentsdata = await dashboard_contents.find();

    res.status(200).json({
      status: "success",
      length: dashboardcontentsdata.length,
      data: {
        dashboardcontentsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletedashboardcontents };

