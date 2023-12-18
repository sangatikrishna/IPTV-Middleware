import song_categories from "../models/song_categories.js";
// import dateNow from "date-now";
// // import date from "date-and-time";
// import fs from "fs";

//GET
const songcategoriesdata = async (req, res) => {
  try {
    const data = await song_categories.find();

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
export default songcategoriesdata;

//GET by _id
const songcategoriesbyObId = async (req, res) => {
  try {
    const data = await song_categories.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { songcategoriesbyObId };

//POST API
const addsongcategories = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new song_categories({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await song_categories.find();
    return res.json(await song_categories.find());

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
export { addsongcategories };

//DELETE API
const deletesongcategories = async (req, res) => {
  try {
    const deletedsongcategories = await song_categories.findByIdAndDelete(
      req.params._id
    );
    if (!deletedsongcategories) res.status(404).send("No item found");

    // return
    const songcategoriesdata = await song_categories.find();

    res.status(200).json({
      status: "success",
      length: songcategoriesdata.length,
      data: {
        songcategoriesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletesongcategories };

//PATCH API
const songcategoriesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await song_categories.findOneAndUpdate(
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

export { songcategoriesPatch };
