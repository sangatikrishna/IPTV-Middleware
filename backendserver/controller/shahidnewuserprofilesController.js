import shahid_new_user_profiles from "../models/shahidnewuserprofiles.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const shahidnewuserprofiles =async (req, res) => {
    try {
      const data = await shahid_new_user_profiles.find();

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
  export default  shahidnewuserprofiles;


//GET by _id
const shahidnewuserprofilesbyId=async(req,res)=>
{
try{

  const data=await shahid_new_user_profiles.findById(req.params._id)
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
export {shahidnewuserprofilesbyId}


//POST API
const addshahidnewuserprofiles=async(req,res)=>
{


const {  
  id,
    name,
    nick,
    mail,
    password,
    enddate,
    createdby,
    billing_id,
    device_id,
    is_multiple_session,
    is_loggedin,
    status,
    group_id,
    created,
    modified,
    payment_settings_id,
    category_password,
    user_limit,
    number_of_login,
    is_deleted,
    is_trail,
    is_paid,
    is_cdn
}= req.body;
  try{

    const newData=new shahid_new_user_profiles({
      id,
      name,
      nick,
      mail,
      password,
      enddate,
      createdby,
      billing_id,
      device_id,
      is_multiple_session,
      is_loggedin,
      status,
      group_id,
      created,
      modified,
      payment_settings_id,
      category_password,
      user_limit,
      number_of_login,
      is_deleted,
      is_trail,
      is_paid,
      is_cdn })
    await newData.save();
    const shahiddata = await shahid_new_user_profiles.find();
    return res.json(await shahid_new_user_profiles.find());

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
export {addshahidnewuserprofiles}

//DELETE API
const deleteshahidnewuserprofiles=async(req,res)=>
{
try{

  const deleteshahidnewuserprofiles=await shahid_new_user_profiles.findByIdAndDelete(req.params._id)
  if(!deleteshahidnewuserprofiles) res.status(404).send("No item found")

  // return
  const shahidnewuserprofilesdata =await shahid_new_user_profiles.find()

  res.status(200).json({

    status:"success",
    length:shahidnewuserprofilesdata.length,
    data:{

        shahidnewuserprofilesdata}
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
export {deleteshahidnewuserprofiles}

// patch
const Shahidnewuser = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await shahid_new_user_profiles.findOneAndUpdate(
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
export { Shahidnewuser };