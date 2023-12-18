import groups from "../models/groups.js";
import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";

//GET
const groupsdata = async (req, res) => {
  try {
    const data = await groups.find();

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
export default groupsdata;

// //GET by _id
const groupsbyObId = async (req, res) => {
  try {
    const data = await groups.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { groupsbyObId };

// //POST API
const addGroups = async (req, res) => {
  const { id, name, permissions, created, modified } = req.body;
  try {
    const newData = new groups({
      id,
      name,
      permissions,   
      created,
      modified,
    });
    await newData.save();
    // const videodata = await dashboard_contents.find();
    return res.json(await groups.find());

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
export { addGroups };


//PATCH API
const groupsPatch = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await groups.findOneAndUpdate(
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
export { groupsPatch };


//DELETE API
const deletegroups = async (req, res) => {
  try {
    const deletedGroups =
      await groups.findByIdAndDelete(req.params._id);
    if (!deletedGroups) res.status(404).send("No item found");

    // return
    const groupsdata = await groups.find();

    res.status(200).json({
      status: "success",
      length: groupsdata.length,
      data: {
        groupsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deletegroups };

