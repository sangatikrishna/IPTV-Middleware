import show_categories from "../models/show_categories.js";
// import dateNow from "date-now";
// import date from "date-and-time";
// import fs from "fs";

//GET
const showcategoriesdata = async (req, res) => {
  try {
    const data = await show_categories.find();

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
export default showcategoriesdata;

//GET by _id
const showcategoriesbyObId = async (req, res) => {
  try {
    const data = await show_categories.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { showcategoriesbyObId };

//POST API
const addshowcategories = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new show_categories({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await show_categories.find();
    return res.json(await show_categories.find());

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
export { addshowcategories };

//DELETE API
const deleteshowcategories = async (req, res) => {
  try {
    const deletedshowcategories = await show_categories.findByIdAndDelete(
      req.params._id
    );
    if (!deletedshowcategories) res.status(404).send("No item found");

    // return
    const showcategoriesdata = await show_categories.find();

    res.status(200).json({
      status: "success",
      length: showcategoriesdata.length,
      data: {
        showcategoriesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteshowcategories };

//PATCH API
const showcategoriesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await show_categories.findOneAndUpdate(
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

export { showcategoriesPatch };