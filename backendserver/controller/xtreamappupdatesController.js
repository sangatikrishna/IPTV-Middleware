import xtream_app_updates from "../models/xtream_app_update.js";

//Get for xtreamappupdates
const getXtreamappupdates=async(req,res)=>
{
try{

  const data=await xtream_app_updates.find()
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
export {getXtreamappupdates}

//Getby ID for xtreamappupdates
const getXtreamappupdatesbyObId=async(req,res)=>
{
try{

  const data=await xtream_app_updates.findById(req.params._id)
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
export {getXtreamappupdatesbyObId}

//Post for xtreamappupdates
const addXtreamappupdates=async(req,res)=>
{
const {

  id,
  app_version,
  update_url,
  description,
  created,
  updated
 }= req.body;
  try{

    const newData=new xtream_app_updates({
        id,
        app_version,
        update_url,
        description,
        created,
        updated
     })
    await newData.save();
    const xtreamappupdatesdata = await xtream_app_updates.find();
    return res.json(await xtream_app_updates.find());

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
export {addXtreamappupdates}

//Delete for xtreamappupdates
const deleteXtreamappupdates=async(req,res)=>
{
try{

  const deletextreamappupdates=await xtream_app_updates.findByIdAndDelete(req.params._id)
  if(!deletextreamappupdates) res.status(404).send("No item found")

  // return
  const xtreamappupdates =await xtream_app_updates.find()

  res.status(200).json({

    status:"success",
    length:xtreamappupdates.length,
    data:{

        xtreamappupdates}
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
export {deleteXtreamappupdates}

// patch for xtreamappupdates
const XtreamappupdatesIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await xtream_app_updates.findOneAndUpdate({_id:patchId},
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
export{XtreamappupdatesIdPatch};