import live_user_product_assignments from "../models/live_user_product_assignments.js";
// import dateNow from "date-now";
// import date from "date-and-time";
// import fs from "fs";

//GET
const liveuserproductassignmentsdata = async (req, res) => {
  try {
    const data = await live_user_product_assignments.find();

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
export default liveuserproductassignmentsdata;

//GET by _id
const liveuserproductassignmentsbyObId = async (req, res) => {
  try {
    const data = await live_user_product_assignments.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { liveuserproductassignmentsbyObId };

//POST API
const addliveuserproductassignments = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new live_user_product_assignments({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await live_user_product_assignments.find();
    return res.json(await live_user_product_assignments.find());

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
export { addliveuserproductassignments };

//DELETE API
const deleteliveuserproductassignments = async (req, res) => {
  try {
    const deletedliveuserproductassignments = await live_user_product_assignments.findByIdAndDelete(
      req.params._id
    );
    if (!deletedliveuserproductassignments) res.status(404).send("No item found");

    // return
    const liveuserproductassignmentsdata = await live_user_product_assignments.find();

    res.status(200).json({
      status: "success",
      length: liveuserproductassignmentsdata.length,
      data: {
        liveuserproductassignmentsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteliveuserproductassignments};

//PATCH API
const liveuserproductassignmentsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await live_user_product_assignments.findOneAndUpdate(
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

export { liveuserproductassignmentsPatch };