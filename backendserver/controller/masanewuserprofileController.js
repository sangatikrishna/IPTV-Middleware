import masa_new_user_profiles from "../models/masa_new_user_profiles.js";


//Get for masa_new_user_profiles
const getMasanewuserprofile=async(req,res)=>
{
try{

  const data=await masa_new_user_profiles.find()
  res.json({data});
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
export {getMasanewuserprofile}

//Getby ID for masa_new_user_profiles
const getMasanewuserprofilebyObId=async(req,res)=>
{
try{

  const data=await masa_new_user_profiles.findById(req.params._id)
  res.json({data});
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
export {getMasanewuserprofilebyObId}

//Post for masa_new_user_profiles
const addMasanewuserprofile=async(req,res)=>
{
const {  


    id,
    product_id,
    user_id,
    mac_address,
    serial_num,
    created,
    invoice,
    modified
 }= req.body;
  try{

    const newData=new masa_new_user_profiles({
    id,
    product_id,
    user_id,
    mac_address,
    serial_num,
    created,
    invoice,
    modified
     })
    await newData.save();
    const Masanewuserprofiledata = await masa_new_user_profiles.find();
    res.json(await masa_new_user_profiles.find());

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
export {addMasanewuserprofile}

//Delete for masa_new_user_profiles
const deleteMasanewuserprofile=async(req,res)=>
{
try{

  const deletemasanewuserprofile=await masa_new_user_profiles.findByIdAndDelete(req.params._id)
  if(!deletemasanewuserprofile) res.status(404).send("No item found")

  // return
  const Masanewuserprofile =await masa_new_user_profiles.find()

  res.status(200).json({

    status:"success",
    length:Masanewuserprofile.length,
    data:{

        Masanewuserprofile}
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
export {deleteMasanewuserprofile}

// patch for masa_new_user_profiles
const MasanewuserprofileIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await masa_new_user_profiles.findOneAndUpdate({_id:patchId},
   req.body,{new:true})
console.log(updated);
res.json({updated})
}
catch(err)
{
  res.status(500).send(err.message);
  console.log(err.message)
}
}
export{MasanewuserprofileIdPatch};