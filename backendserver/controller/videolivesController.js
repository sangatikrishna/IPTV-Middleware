import video_lives from "../models/video_lives.js";

//Get for video_lives
const getvideolives=async(req,res)=>
{
try{

  const data=await video_lives.find();
  res.status(200).json({data});
  //  res.json(data);
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
export {getvideolives}

//Getby ID for video_lives
const getvideolivesbyObId=async(req,res)=>
{
try{

  const data=await video_lives.findById(req.params._id)
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
export {getvideolivesbyObId}

//Post for video_lives
const addvideolives=async(req,res)=>
{
const {  
    id,
    kameraUrl,
    kameraUrl_ios,
    kameraUrl_android,
    kameraUrl_setup,
    kameraUrl_linux,
    kameraUrl_dream,
    kameraUrl_pc,
    streamName,
    kameraDurum,
    kameraImage,
    category_id,
    created,
    position,
    kameraUrl_secondary,
    kameraUrl_ios_secondary,
    kameraUrl_android_secondary,
    kameraUrl_setup_secondary,
    kameraUrl_linux_secondary,
    kameraUrl_dream_secondary,
    kameraUrl_pc_secondary,
    is_humax,
    visible,
    probe_status
 }= req.body;
  try{

    const newData=new video_lives({
        id,
        kameraUrl,
        kameraUrl_ios,
        kameraUrl_android,
        kameraUrl_setup,
        kameraUrl_linux,
        kameraUrl_dream,
        kameraUrl_pc,
        streamName,
        kameraDurum,
        kameraImage,
        category_id,
        created,
        position,
        kameraUrl_secondary,
        kameraUrl_ios_secondary,
        kameraUrl_android_secondary,
        kameraUrl_setup_secondary,
        kameraUrl_linux_secondary,
        kameraUrl_dream_secondary,
        kameraUrl_pc_secondary,
        is_humax,
        visible,
        probe_status
     })
    await newData.save();
    const videolives = await video_lives.find();
    res.json(await video_lives.find());

  

  }
  catch(err)
  {

    console.log(err.message);
  }

}
export {addvideolives}

//Delete for video_lives
const deleteVideolives=async(req,res)=>
{
try{

  const deletevideolives=await video_lives.findByIdAndDelete(req.params._id)
  if(!deletevideolives) res.status(404).send("No item found")

  // return
  const Videolives =await video_lives.find()

  res.status(200).json({

    status:"success",
    data:{

        Videolives}
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
export {deleteVideolives}

// patch for video_lives
const VideolivesIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await video_lives.findOneAndUpdate({_id:patchId},
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
export{VideolivesIdPatch};