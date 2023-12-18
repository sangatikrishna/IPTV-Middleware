import masa_new_user_messages from "../models/masa_new_user_messages.js";


//Get for masa_new_user_messages

const getNewusermessages=async(req,res)=>
{
try{

  const data=await masa_new_user_messages.find();
  res.status(200).json({data});
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
export {getNewusermessages}

//Getby ID for masa_new_user_messages
const getNewusermessagesbyObId=async(req,res)=>
{
try{

  const data=await masa_new_user_messages.findById(req.params._id)
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
export {getNewusermessagesbyObId}

//Post for masa_new_user_messages
const addNewusermessages=async(req,res)=>
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

    const newData=new masa_new_user_messages({
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
    const messagedata = await masa_new_user_messages.find();
    res.json(await masa_new_user_messages.find());

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
export {addNewusermessages}

//Delete for masa_new_user_messages
const deleteNewusermessages=async(req,res)=>
{
try{

  const deletenewusermessages=await masa_new_user_messages.findByIdAndDelete(req.params._id)
  if(!deletenewusermessages) res.status(404).send("No item found")

  // return
  const Newusermessages =await masa_new_user_messages.find()

  res.status(200).json({

    status:"success",
    // length:Newusermessages.length,
    data:{

        Newusermessages}
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
export {deleteNewusermessages}

// patch for masa_new_user_messages
const NewusermessagesIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await masa_new_user_messages.findOneAndUpdate({_id:patchId},
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
export{NewusermessagesIdPatch};