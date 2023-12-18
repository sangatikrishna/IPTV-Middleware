import xtream_users_details from "../models/xtream_users_details.js";
//get for Xtreamusersdetails
const getXtreamusersdetails=async(req,res)=>
{
try{

  const data=await xtream_users_details.find()
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
export {getXtreamusersdetails}

//Getby ID for Xtreamusersdetails
const getXtreamusersdetailsbyObId=async(req,res)=>
{
try{

  const data=await xtream_users_details.findById(req.params._id)
  res.json(data);
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
export {getXtreamusersdetailsbyObId}

//Post for Xtreamusersdetails
const addXtreamusersdetails=async(req,res)=>
{
const {  

    id,
    mac_address,
    expiry_date,
    streamlist_url,
    streamlist_url2,
    streamlist_url3,
    streamlist_url4,
    streamlist_url5,
    activation_code,
    enddate,
    device_id,
    is_activated,
    username,
    password,
    firstname,
    lastname,
    gender,
    created_by,
    group_id,
    status,
    created,
    updated
 }= req.body;
  try{

    const newData=new xtream_users_details({
        id,
        mac_address,
        expiry_date,
        streamlist_url,
        streamlist_url2,
        streamlist_url3,
        streamlist_url4,
        streamlist_url5,
        activation_code,
        enddate,
        device_id,
        is_activated,
        username,
        password,
        firstname,
        lastname,
        gender,
        created_by,
        group_id,
        status,
        created,
        updated
     })
    await newData.save();
    const Xtreamusersdetailsdata = await xtream_users_details.find();
    res.json(await xtream_users_details.find());

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
export {addXtreamusersdetails}

//Delete for Xtreamusersdetails
const deleteXtreamusersdetails=async(req,res)=>
{
try{

  const deletextreamusersdetails=await xtream_users_details.findByIdAndDelete(req.params._id)
  if(!deletextreamusersdetails) res.status(404).send("No item found")

  // return
  const Xtreamusersdetails =await xtream_users_details.find()

  res.status(200).json({

    status:"success",
    length:Xtreamusersdetails.length,
    data:{

        Xtreamusersdetails}
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
export {deleteXtreamusersdetails}

// patch for Xtreamusersdetails
const XtreamusersdetailsIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await xtream_users_details.findOneAndUpdate({_id:patchId},
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
export{XtreamusersdetailsIdPatch};