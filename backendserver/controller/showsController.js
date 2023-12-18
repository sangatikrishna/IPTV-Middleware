import shows from "../models/shows.js";
// import dateNow from "date-now";
// import date from "date-and-time";
// import fs from "fs";

//GET
const showsdata = async (req, res) => {
  try {
    const data = await shows.find();

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
export default showsdata;

//GET by _id
const showsbyObId = async (req, res) => {
  try {
    const data = await shows.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { showsbyObId };

//POST API
const addshows = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new shows({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await shows.find();
    return res.json(await shows.find());

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
export { addshows };

//DELETE API
const deleteshows = async (req, res) => {
  try {
    const deletedshows = await shows.findByIdAndDelete(
      req.params._id
    );
    if (!deletedshows) res.status(404).send("No item found");

    // return
    const showsdata = await shows.find();

    res.status(200).json({
      status: "success",
      length: showsdata.length,
      data: {
        showsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteshows };

//PATCH API
const showsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await shows.findOneAndUpdate(
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

export { showsPatch };