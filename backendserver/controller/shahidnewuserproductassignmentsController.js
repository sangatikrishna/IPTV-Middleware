import shahid_new_user_product_assignments from "../models/shahidnewuserproductassignments.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const shahidnewuserproductdata =async (req, res) => {
    try {
      const data = await shahid_new_user_product_assignments.find();

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
  export default  shahidnewuserproductdata;


//GET by _id
const shahidnewuserproductdatabyId=async(req,res)=>
{
try{

  const data=await shahid_new_user_product_assignments.findById(req.params._id)
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
export {shahidnewuserproductdatabyId}


//POST API
const addshahidnewuserproduct=async(req,res)=>
{


const {  
  id,
    product_id,
    user_id,
    mac_address,
    serial_num,
    created,
    is_active,
    invoice,
    modified
}= req.body;
  try{

    const newData=new shahid_new_user_product_assignments({
      id,
      product_id,
      user_id,
      mac_address,
      serial_num,
      created,
      is_active,
      invoice,
      modified })
    await newData.save();
    const shahiddata = await shahid_new_user_product_assignments.find();
    return res.json(await shahid_new_user_product_assignments.find());

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
export {addshahidnewuserproduct}

//DELETE API
const deleteshahidnewuserproduct=async(req,res)=>
{
try{

  const deleteshahidnewuserproduct=await shahid_new_user_product_assignments.findByIdAndDelete(req.params._id)
  if(!deleteshahidnewuserproduct) res.status(404).send("No item found")

  // return
  const shahidnewusermessagesdata =await shahid_new_user_product_assignments.find()

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
export {deleteshahidnewuserproduct}


// patch
const Shahidnewuser = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await shahid_new_user_product_assignments.findOneAndUpdate(
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