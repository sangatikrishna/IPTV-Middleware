import songs from "../models/songs.js";
// import dateNow from "date-now";
// // import date from "date-and-time";
// import fs from "fs";

//GET
const songsdata = async (req, res) => {
  try {
    const data = await songs.find();

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
export default songsdata;

//GET by _id
const songsbyObId = async (req, res) => {
  try {
    const data = await songs.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { songsbyObId };

//POST API
const addsongs = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new songs({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await songs.find();
    return res.json(await songs.find());

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
export { addsongs };

//DELETE API
const deletesongs = async (req, res) => {
  try {
    const deletedsongs = await songs.findByIdAndDelete(
      req.params._id
    );
    if (!deletedsongs) res.status(404).send("No item found");

    // return
    const songsdata = await songs.find();

    res.status(200).json({
      status: "success",
      length: songsdata.length,
      data: {
        songsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletesongs };

//PATCH API
const songsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await songs.findOneAndUpdate(
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

export { songsPatch };
