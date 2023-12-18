import live_users from "../models/live_users.js";
// import dateNow from "date-now";
// import date from "date-and-time";
// import fs from "fs";

//GET
const liveusersdata = async (req, res) => {
  try {
    const data = await live_users.find();

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
export default liveusersdata;

//GET by _id
const liveusersbyObId = async (req, res) => {
  try {
    const data = await live_users.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { liveusersbyObId };

//POST API
const addliveusers = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new live_users({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await live_users.find();
    return res.json(await live_users.find());

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
export { addliveusers };

//DELETE API
const deleteliveusers = async (req, res) => {
  try {
    const deletedliveusers = await live_users.findByIdAndDelete(
      req.params._id
    );
    if (!deletedliveusers) res.status(404).send("No item found");

    // return
    const liveusersdata = await live_users.find();

    res.status(200).json({
      status: "success",
      length: liveusersdata.length,
      data: {
        liveusersdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteliveusers};

//PATCH API
const liveusersPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await live_users.findOneAndUpdate(
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

export { liveusersPatch };