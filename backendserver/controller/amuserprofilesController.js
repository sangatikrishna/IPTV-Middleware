import am_user_profiles from "../models/am_user_profiles.js";

//get for am_user_profiles
const getAMuserprofiles=async(req,res)=>
{
try{

  const data=await am_user_profiles.find()
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
export {getAMuserprofiles}

//Getby ID for AMuserprofiles
const getAMuserprofilesbyObId=async(req,res)=>
{
try{

  const data=await am_user_profiles.findById(req.params._id)
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
export {getAMuserprofilesbyObId}

//Post for AMuserprofiles
const addAMuserprofiles=async(req,res)=>
{
const {

    id,
    user_id,
    address1,
    address2,
    city,
    zipcode,
    country_id,
    phone_work,
    phone_home,
    image,
    region_id

 }= req.body;
  try{

    const newData=new am_user_profiles({
        id,
        user_id,
        address1,
        address2,
        city,
        zipcode,
        country_id,
        phone_work,
        phone_home,
        image,
        region_id
     })
    await newData.save();
    const AMuserprofilesdata = await am_user_profiles.find();
    res.json(await am_user_profiles.find());

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
export {addAMuserprofiles}

//Delete for AMuserprofiles
const deleteAMuserprofiles=async(req,res)=>
{
try{

  const deleteAMuserprofiles=await am_user_profiles.findByIdAndDelete(req.params._id)
  if(!deleteAMuserprofiles) res.status(404).send("No item found")

  // return
  const AMuserprofiles =await am_user_profiles.find()

  res.status(200).json({

    status:"success",
    length:AMuserprofiles.length,
    data:{

        AMuserprofiles}
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
export {deleteAMuserprofiles}

// patch for AMuserprofiles
const AMuserprofilesIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await am_user_profiles.findOneAndUpdate({_id:patchId},
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
export{AMuserprofilesIdPatch};