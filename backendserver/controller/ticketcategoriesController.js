import ticket_categories from "../models/ticket_categories.js";
// import dateNow from "date-now";
// // import date from "date-and-time";
// import fs from "fs";

//GET
const ticketcategoriesdata = async (req, res) => {
  try {
    const data = await ticket_categories.find();

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
export default ticketcategoriesdata;

//GET by _id
const ticketcategoriesbyObId = async (req, res) => {
  try {
    const data = await ticket_categories.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { ticketcategoriesbyObId };

//POST API
const addticketcategories = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new ticket_categories({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await ticket_categories.find();
    return res.json(await ticket_categories.find());

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
export { addticketcategories };

//DELETE API
const deleteticketcategories = async (req, res) => {
  try {
    const deletedticketcategories = await ticket_categories.findByIdAndDelete(
      req.params._id
    );
    if (!deletedticketcategories) res.status(404).send("No item found");

    // return
    const ticketcategoriesdata = await ticket_categories.find();

    res.status(200).json({
      status: "success",
      length: ticketcategoriesdata.length,
      data: {
        ticketcategoriesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteticketcategories };

//PATCH API
const ticketcategoriesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await ticket_categories.findOneAndUpdate(
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

export { ticketcategoriesPatch };
