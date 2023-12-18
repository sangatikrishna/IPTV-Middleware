import states from "../models/states.js";
// import dateNow from "date-now";
// // import date from "date-and-time";
// import fs from "fs";

//GET
const statesdata = async (req, res) => {
  try {
    const data = await states.find();

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
export default statesdata;

//GET by _id
const statesbyObId = async (req, res) => {
  try {
    const data = await states.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { statesbyObId };

//POST API
const addstates = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new states({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await states.find();
    return res.json(await states.find());

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
export { addstates };

//DELETE API
const deletestates = async (req, res) => {
  try {
    const deletedstates = await states.findByIdAndDelete(
      req.params._id
    );
    if (!deletedstates) res.status(404).send("No item found");

    // return
    const statesdata = await states.find();

    res.status(200).json({
      status: "success",
      length: statesdata.length,
      data: {
        statesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletestates };

//PATCH API
const statesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await states.findOneAndUpdate(
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

export { statesPatch };
