import shahid_new_users from "../models/shahidnewusers.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const shahidnewusers =async (req, res) => {
    try {
      const data = await shahid_new_users.find();

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
  export default  shahidnewusers;


//GET by _id
const shahidnewusersbyId=async(req,res)=>
{
try{

  const data=await shahid_new_users.findById(req.params._id)
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
export {shahidnewusersbyId}


// //POST API
const addshahidnewusers=async(req,res)=>
{


const {  
    id,
    name,
    surname,
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
    
    is_cdn,
   
    reseller_id,
    
    activation_date,
    
    renewal_date
}= req.body;
  try{

    const newData=new shahid_new_users({
        id,
        name,
        surname,
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
        
        is_cdn,
       
        reseller_id,
        
        activation_date,
        
        renewal_date })
    await newData.save();
    const shahiddata = await shahid_new_users.find();
    return res.json(await shahid_new_users.find());

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
export {addshahidnewusers}

// //DELETE API
const deleteshahidnewusers=async(req,res)=>
{
try{

  const deleteshahidnewusers=await shahid_new_users.findByIdAndDelete(req.params._id)
  if(!deleteshahidnewusers) res.status(404).send("No item found")

  // return
  const shahidnewusersdata =await shahid_new_users.find()

  res.status(200).json({

    status:"success",
    length:shahidnewusersdata.length,
    data:{

        shahidnewusersdata}
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
export {deleteshahidnewusers}


// patch
const Shahidnewusers = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await shahid_new_users.findOneAndUpdate(
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
export { Shahidnewusers };