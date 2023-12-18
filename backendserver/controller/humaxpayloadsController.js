import humax_payloads from "../models/humax_payloads.js";
import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";

//GET
const humaxpayloadsdata = async (req, res) => {
  try {
    const data = await humax_payloads.find();

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
export default humaxpayloadsdata;

// //GET by _id
const humaxpayloadsbyObId = async (req, res) => {
  try {
    const data = await humax_payloads.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { humaxpayloadsbyObId };

// //POST API
const addhumaxpayloads = async (req, res) => {
  const { id, user_id, old_data, new_data, updated_by, created} = req.body;
  try {
    const newData = new humax_payloads({
      id,
      user_id,
      old_data,   
      new_data,
      updated_by,
      created,
    });
    await newData.save();
    // const videodata = await dashboard_contents.find();
    return res.json(await humax_payloads.find());

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
export { addhumaxpayloads };


//PATCH API
const humaxpayloadsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await humax_payloads.findOneAndUpdate(
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
export { humaxpayloadsPatch };


//DELETE API
const deletehumaxpayloads = async (req, res) => {
  try {
    const deletedhumaxpayloads =
      await humax_payloads.findByIdAndDelete(req.params._id);
    if (!deletedhumaxpayloads) res.status(404).send("No item found");

    // return
    const humaxpayloadsdata = await humax_payloads.find();

    res.status(200).json({
      status: "success",
      length: humaxpayloadsdata.length,
      data: {
        humaxpayloadsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletehumaxpayloads };

