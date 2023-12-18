import shahid_new_app_updates from "../models/shahid_new_app_updates.js";
import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";

//GET
const shahid_new_app_updatesdata = async (req, res) => {
  try {
    const data = await shahid_new_app_updates.find();

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
export default shahid_new_app_updatesdata;

// //GET by _id
const shahid_new_app_updatesbyObId = async (req, res) => {
  try {
    const data = await shahid_new_app_updates.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { shahid_new_app_updatesbyObId };

// //POST API
const addshahid_new_app_updates = async (req, res) => {
  const { id, version, url, description, products_id, created_date} = req.body;
  try {
    const newData = new shahid_new_app_updates({
      id,
      version,
      url,   
      description,
      products_id,
      created_date,
    });
    await newData.save();
    // const videodata = await dashboard_contents.find();
    return res.json(await shahid_new_app_updates.find());

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
export { addshahid_new_app_updates };


//PATCH API
const shahid_new_app_updatesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await shahid_new_app_updates.findOneAndUpdate(
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
export { shahid_new_app_updatesPatch };


//DELETE API
const deleteshahid_new_app_updates = async (req, res) => {
  try {
    const deletedshahid_new_app_updates =
      await shahid_new_app_updates.findByIdAndDelete(req.params._id);
    if (!deletedshahid_new_app_updates) res.status(404).send("No item found");

    // return
    const shahid_new_app_updatesdata = await shahid_new_app_updates.find();

    res.status(200).json({
      status: "success",
      length: shahid_new_app_updatesdata.length,
      data: {
        shahid_new_app_updatesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteshahid_new_app_updates };

