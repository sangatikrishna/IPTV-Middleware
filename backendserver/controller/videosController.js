import videos from "../models/videos.js";

//Get for video
const getvideo=async(req,res)=>
{
try{

  const data=await videos.find()
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
export {getvideo}

//Getby ID for video
const getvideobyObId=async(req,res)=>
{
try{

  const data=await videos.findById(req.params._id)
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
export {getvideobyObId}

//Post for video
const addvideo=async(req,res)=>
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
    modified,
    kameraUrl_secondary,
    kameraUrl_ios_secondary,
    kameraUrl_android_secondary,
    kameraUrl_setup_secondary,
    kameraUrl_linux_secondary,
    kameraUrl_dream_secondary,
    kameraUrl_pc_secondary,
    visible,
    trailer
 }= req.body;
  try{

    const newData=new videos({
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
        modified,
        kameraUrl_secondary,
        kameraUrl_ios_secondary,
        kameraUrl_android_secondary,
        kameraUrl_setup_secondary,
        kameraUrl_linux_secondary,
        kameraUrl_dream_secondary,
        kameraUrl_pc_secondary,
        visible,
        trailer
     })
    await newData.save();
    const video = await videos.find();
    res.json(await videos.find());

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
export {addvideo}

//Delete for video
const deleteVideo=async(req,res)=>
{
try{

  const deletevideo=await videos.findByIdAndDelete(req.params._id)
  if(!deletevideo) res.status(404).send("No item found")

  // return
  const Video =await videos.find()

  res.status(200).json({

    status:"success",
    length:Video.length,
    data:{

        Video}
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
export {deleteVideo}

// patch for video
const VideoIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await videos.findOneAndUpdate({_id:patchId},
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
export{VideoIdPatch};