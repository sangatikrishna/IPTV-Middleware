import shahid_new_user_messages from "../models/shahid_new_user_messages.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const shahidnewusermessagesdata =async (req, res) => {
    try {
      const data = await shahid_new_user_messages.find();

    res.status(200).json({
      // status:"success",
      // length:videodata.length,

      data

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  shahidnewusermessagesdata;


//GET by _id
const shahidnewusermessagesdatabyId=async(req,res)=>
{
try{

  const data=await shahid_new_user_messages.findById(req.params._id)
  return res.json(data);
}
catch(err)
{
  console.log(err.message);
  res.status(404).json({

    status:"fail",
    message:err.message
  })
}


}
export {shahidnewusermessagesdatabyId}


//POST API
const addshahidusermessages=async(req,res)=>
{


const {  
  id,
    title,
    description,
  user_ids,
    start_date,    
    repeat_interval,
    is_active,
    created,
    modified
}= req.body;
  try{

    const newData=new shahid_new_user_messages({
      id,
      title,
      description,
    user_ids,
      start_date,    
      repeat_interval,
      is_active,
      created,
      modified })
    await newData.save();
    const shahiddata = await shahid_new_user_messages.find();
    return res.json(await shahid_new_user_messages.find());

    // res.status(201).json({

    //       status:"success",
    //       length:newData.length,
    //       data:{
    //         newData
    //         }
    //       });

  }
  catch(err)
  {

    console.log(err.message);
  }

}
export {addshahidusermessages}

//DELETE API
const deletedshahidnewusermessages=async(req,res)=>
{
try{

  const deletedshahidnewusermessages=await shahid_new_user_messages.findByIdAndDelete(req.params._id)
  if(!deletedshahidnewusermessages) res.status(404).send("No item found")

  // return
  const shahidnewusermessagesdata =await shahid_new_user_messages.find()

  res.status(200).json({

    status:"success",
    length:shahidnewusermessagesdata.length,
    data:{

        shahidnewusermessagesdata}
    });

}
catch(err)
{


  res.status(404).json({

    status:"fail",
    message:err.message
  })
}

}
export {deletedshahidnewusermessages}

// patch
const Shahidnew = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await shahid_new_user_messages.findOneAndUpdate(
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
export { Shahidnew };