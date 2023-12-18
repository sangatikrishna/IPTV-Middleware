import live_user_profiles from "../models/live_user_profiles.js";
// import dateNow from "date-now";
// import date from "date-and-time";
// import fs from "fs";

//GET
const liveuserprofilesdata = async (req, res) => {
  try {
    const data = await live_user_profiles.find();

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
export default liveuserprofilesdata;

//GET by _id
const liveuserprofilesbyObId = async (req, res) => {
  try {
    const data = await live_user_profiles.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { liveuserprofilesbyObId };

//POST API
const addliveuserprofiles = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new live_user_profiles({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await live_user_profiles.find();
    return res.json(await live_user_profiles.find());

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
export { addliveuserprofiles };

//DELETE API
const deleteliveuserprofiles = async (req, res) => {
  try {
    const deletedliveuserprofiles = await live_user_profiles.findByIdAndDelete(
      req.params._id
    );
    if (!deletedliveuserprofiles) res.status(404).send("No item found");

    // return
    const liveuserprofilesdata = await live_user_profiles.find();

    res.status(200).json({
      status: "success",
      length: liveuserprofilesdata.length,
      data: {
        liveuserprofilesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteliveuserprofiles};

//PATCH API
const liveuserprofilesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await live_user_profiles.findOneAndUpdate(
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

export { liveuserprofilesPatch };