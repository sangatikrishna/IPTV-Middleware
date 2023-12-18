import Saz1_Main_URL from "../models/saz1_main_url.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const Saz1MainURLdata = async (req, res) => {
  try {
    const data = await Saz1_Main_URL.find();

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
export default Saz1MainURLdata;

//GET by _id
const Saz1MainURLdatabyId = async (req, res) => {
  try {
    const data = await Saz1_Main_URL.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { Saz1MainURLdatabyId };

//POST API
const addSaz1MainURL = async (req, res) => {
  const {
    id,
    title,
    description,
    user_ids,
    start_date,
    repeat_interval,
    is_active,
    created,
    modified,
  } = req.body;
  try {
    const newData = new Saz1_Main_URL({
      id,
      title,
      description,
      user_ids,
      start_date,
      repeat_interval,
      is_active,
      created,
      modified,
    });
    await newData.save();
    const shahiddata = await Saz1_Main_URL.find();
    return res.json(await Saz1_Main_URL.find());

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
export { addSaz1MainURL };

// //DELETE API
const deleteSaz1MainURL = async (req, res) => {
  try {
    const deleteSaz1MainURL = await Saz1_Main_URL.findByIdAndDelete(
      req.params._id
    );
    if (!deleteSaz1MainURL) res.status(404).send("No item found");

    // return
    const Saz1MainURLdata = await Saz1_Main_URL.find();

    res.status(200).json({
      status: "success",
      length: Saz1MainURLdata.length,
      data: {
        Saz1MainURLdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteSaz1MainURL };

// patch
const Saz1MainURL = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await Saz1_Main_URL.findOneAndUpdate(
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
export { Saz1MainURL };
