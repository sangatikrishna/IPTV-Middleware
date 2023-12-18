import xtream_messages from "../models/xtream_message.js";

//Get for xtreammessages
const getXtreammessages=async(req,res)=>
{
try{

  const data=await xtream_messages.find()
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
export {getXtreammessages}

//Getby ID for xtreammessages
const getXtreammessagesbyObId=async(req,res)=>
{
try{

  const data=await xtream_messages.findById(req.params._id)
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
export {getXtreammessagesbyObId}

//Post for xtreammessages
const addXtreammessages=async(req,res)=>
{
const {  

    id,
    title,
    description,
    start_time,
    end_time,
    status,
    created,
    updated
 }= req.body;
  try{

    const newData=new xtream_messages({
        id,
        title,
        description,
        start_time,
        end_time,
        status,
        created,
        updated
     })
    await newData.save();
    const xtreamappupdatesdata = await xtream_messages.find();
    res.json(await xtream_messages.find());

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
export {addXtreammessages}

//Delete forxtreammessages
const deleteXtreammessages=async(req,res)=>
{
try{

  const deletextreammessages=await xtream_messages.findByIdAndDelete(req.params._id)
  if(!deletextreammessages) res.status(404).send("No item found")

  // return
  const xtreammessages =await xtream_messages.find()

  res.status(200).json({

    status:"success",
    length:xtreammessages.length,
    data:{

        xtreammessages}
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
export {deleteXtreammessages}

// patch for xtreammessages
const XtreammessagesIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await xtream_messages.findOneAndUpdate({_id:patchId},
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
export{XtreammessagesIdPatch};