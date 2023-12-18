import am_user_messages from "../models/am_user_messages.js"

//get for am_user_messages
const getAMusermessages=async(req,res)=>
{
try{

  const data=await am_user_messages.find()
  return res.json({data});
}
catch(err)
{
  console.log(err.message);
  res.status(404).json({

    status:"fail",
    message:err.message
  });
}
}
export {getAMusermessages}

//Getby ID for AMusermessages
const getAMusermessagesbyObId=async(req,res)=>
{
try{

  const data=await am_user_messages.findById(req.params._id)
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
export {getAMusermessagesbyObId}

//Post for AMusermessages
const addAMusermessages=async(req,res)=>
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

    const newData=new am_user_messages({
      id,
      title,
      description,
      user_ids,
      start_date,
      repeat_interval,
      is_active,
      created,
      modified
     })
    await newData.save();
    const AMusermessagesdata = await am_user_messages.find();
    res.json(await am_user_messages.find());

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
export {addAMusermessages}

//Delete for AMusermessages
const deleteAMusermessages=async(req,res)=>
{
try{

  const deleteAMusermessages=await am_user_messages.findByIdAndDelete(req.params._id)
  if(!deleteAMusermessages) res.status(404).send("No item found")

  // return
  const AMusermessages =await am_user_messages.find()

  res.status(200).json({

    status:"success",
    length:AMusermessages.length,
    data:{

        AMusermessages}
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
export {deleteAMusermessages}

// patch for AMusermessages
const AMusermessagesIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await am_user_messages.findOneAndUpdate({_id:patchId},
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
export{AMusermessagesIdPatch};