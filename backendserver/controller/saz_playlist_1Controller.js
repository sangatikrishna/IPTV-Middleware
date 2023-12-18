import saz_playlist_1 from "../models/saz_playlist_1.js";
// import dateNow from "date-now";
// import date from "date-and-time";
// import fs from "fs";

//GET
const Playlistsaz1data = async (req, res) => {
  try {
    const data = await saz_playlist_1.find();

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
export default Playlistsaz1data;

//GET by _id
const Playlistsaz1byObId = async (req, res) => {
  try {
    const data = await saz_playlist_1.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { Playlistsaz1byObId };

//POST API
const addPlaylistsaz1 = async (req, res) => {
  const { id, name, url,description,created_date,status,expire_date } = req.body;
  try {
    const newData = new saz_playlist_1({
      id,
      name,
      url,
      description,
      created_date,
      status,
      expire_date,
    });
    await newData.save();
    const videodata = await saz_playlist_1.find();
    return res.json(await saz_playlist_1.find());

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
export { addPlaylistsaz1 };

//DELETE API
const deletePlaylistsaz1 = async (req, res) => {
  try {
    const deletedPlaylistsaz1 = await saz_playlist_1.findByIdAndDelete(
      req.params._id
    );
    if (!deletedPlaylistsaz1) res.status(404).send("No item found");

    // return
    const Playlistsaz1data = await saz_playlist_1.find();

    res.status(200).json({
      status: "success",
      length: Playlistsaz1data.length,
      data: {
        Playlistsaz1data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletePlaylistsaz1 };

//PATCH API
const Playlistsaz1Patch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await saz_playlist_1.findOneAndUpdate(
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

export { Playlistsaz1Patch };