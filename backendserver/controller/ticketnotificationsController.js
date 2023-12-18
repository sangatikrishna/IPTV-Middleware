import ticket_notifications from "../models/ticket_notifications.js";
// import dateNow from "date-now";
// // import date from "date-and-time";
// import fs from "fs";

//GET
const ticketnotificationsdata = async (req, res) => {
  try {
    const data = await ticket_notifications.find();

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
export default ticketnotificationsdata;

//GET by _id
const ticketnotificationsbyObId = async (req, res) => {
  try {
    const data = await ticket_notifications.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { ticketnotificationsbyObId };

//POST API
const addticketnotifications = async (req, res) => {
  const { id, title, status, image, position, created, updated } = req.body;
  try {
    const newData = new ticket_notifications({
      id,
      title,
      status,
      image,
      position,
      created,
      updated,
    });
    await newData.save();
    const videodata = await ticket_notifications.find();
    return res.json(await ticket_notifications.find());

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
export { addticketnotifications };

//DELETE API
const deleteticketnotifications = async (req, res) => {
  try {
    const deletedticketnotifications = await ticket_notifications.findByIdAndDelete(
      req.params._id
    );
    if (!deletedticketnotifications) res.status(404).send("No item found");

    // return
    const ticketnotificationsdata = await ticket_notifications.find();

    res.status(200).json({
      status: "success",
      length: ticketnotificationsdata.length,
      data: {
        ticketnotificationsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteticketnotifications };

//PATCH API
const ticketnotificationsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await ticket_notifications.findOneAndUpdate(
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

export { ticketnotificationsPatch };
