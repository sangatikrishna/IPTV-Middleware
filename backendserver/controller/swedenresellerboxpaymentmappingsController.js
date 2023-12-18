// import dateNow from "date-now";
// // import date from "date-and-time";
// import fs from "fs";

import sweden_reseller_box_payment_mapping from "../models/sweden_reseller_box_payment_mapping.js";

//GET
const swedenresellerboxpaymentmappingsdata = async (req, res) => {
  try {
    const data = await sweden_reseller_box_payment_mapping.find();

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
export default swedenresellerboxpaymentmappingsdata;

//GET by _id
const swedenresellerboxpaymentmappingsbyObId = async (req, res) => {
  try {
    const data = await sweden_reseller_box_payment_mappings.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { swedenresellerboxpaymentmappingsbyObId };

//POST API
const addswedenresellerboxpaymentmappings = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new sweden_reseller_box_payment_mappings({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await sweden_reseller_box_payment_mappings.find();
    return res.json(await sweden_reseller_box_payment_mappings.find());

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
export { addswedenresellerboxpaymentmappings };

//DELETE API
const deleteswedenresellerboxpaymentmappings = async (req, res) => {
  try {
    const deletedswedenresellerboxpaymentmappings = await sweden_reseller_box_payment_mappings.findByIdAndDelete(
      req.params._id
    );
    if (!deletedswedenresellerboxpaymentmappings) res.status(404).send("No item found");

    // return
    const swedenresellerboxpaymentmappingsdata = await sweden_reseller_box_payment_mappings.find();

    res.status(200).json({
      status: "success",
      length: swedenresellerboxpaymentmappingsdata.length,
      data: {
        swedenresellerboxpaymentmappingsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteswedenresellerboxpaymentmappings };

//PATCH API
const swedenresellerboxpaymentmappingsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await sweden_reseller_box_payment_mapping.findOneAndUpdate(
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

export { swedenresellerboxpaymentmappingsPatch };
