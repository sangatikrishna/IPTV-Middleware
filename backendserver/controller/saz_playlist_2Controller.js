import saz_playlist_2 from "../models/saz_playlist_2.js";
// import dateNow from "date-now";
// import date from "date-and-time";
// import fs from "fs";

//GET
const playlistsaz2data = async (req, res) => {
  try {
    const data = await saz_playlist_2.find();

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
export default playlistsaz2data;

//GET by _id
const playlistsaz2byObId = async (req, res) => {
  try {
    const data = await saz_playlist_2.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { playlistsaz2byObId };

//POST API
const addplaylistsaz2 = async (req, res) => {
  const { id, name, url, description, created_date, status, expire_date } =
    req.body;
  try {
    const newData = new saz_playlist_2({
      id,
      name,
      url,
      description,
      created_date,
      status,
      expire_date,
    });
    await newData.save();
    const videodata = await saz_playlist_2.find();
    return res.json(await saz_playlist_2.find());

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
export { addplaylistsaz2 };

//DELETE API
const deleteplaylistsaz2 = async (req, res) => {
  try {
    const deletedplaylistsaz2 = await saz_playlist_2.findByIdAndDelete(
      req.params._id
    );
    if (!deletedplaylistsaz2) res.status(404).send("No item found");

    // return
    const playlistsaz2data = await saz_playlist_2.find();

    res.status(200).json({
      status: "success",
      length: playlistsaz2data.length,
      data: {
        playlistsaz2data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteplaylistsaz2 };

const playlist_saz2Patch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await saz_playlist_2.findOneAndUpdate(
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

export { playlist_saz2Patch };
