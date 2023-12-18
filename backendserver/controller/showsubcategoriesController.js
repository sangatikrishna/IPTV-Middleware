import show_sub_categories from "../models/show_sub_categories.js";
// import dateNow from "date-now";
// // import date from "date-and-time";
// import fs from "fs";

//GET
const showsubcategoriesdata = async (req, res) => {
  try {
    const data = await show_sub_categories.find();

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
export default showsubcategoriesdata;

//GET by _id
const showsubcategoriesbyObId = async (req, res) => {
  try {
    const data = await show_sub_categories.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { showsubcategoriesbyObId };

//POST API
const addshowsubcategories = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new show_sub_categories({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await show_sub_categories.find();
    return res.json(await show_sub_categories.find());

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
export { addshowsubcategories };

//DELETE API
const deleteshowsubcategories = async (req, res) => {
  try {
    const deletedshowsubcategories = await show_sub_categories.findByIdAndDelete(
      req.params._id
    );
    if (!deletedshowsubcategories) res.status(404).send("No item found");

    // return
    const showsubcategoriesdata = await show_sub_categories.find();

    res.status(200).json({
      status: "success",
      length: showsubcategoriesdata.length,
      data: {
        showsubcategoriesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteshowsubcategories };

//PATCH API
const showsubcategoriesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await show_sub_categories.findOneAndUpdate(
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

export { showsubcategoriesPatch };
