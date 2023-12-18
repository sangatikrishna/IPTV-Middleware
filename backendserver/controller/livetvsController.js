import livetvs from "../models/live_tv.js";



//GET
const Livetvsdatas =async (req, res) => {
    try {
      const data = await livetvs.find();
    res.status(200).json({
      data
      });
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message
      })
    }
  }
  export default Livetvsdatas;


//GET by _id
const LivetvsbyId=async(req,res)=>
{
try{
  const data=await livetvs.findById(req.params._id)
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
export {LivetvsbyId};




//POST API
const addLivetvs =async(req,res)=>
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
  probe_statu


}= req.body;
  try{
    const newData=new livetvs({
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
        probe_statu
       })
    await newData.save();
    return res.json(await livetvs.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addLivetvs};



//DELETE API
const deletelivetvs =async(req,res)=>
{
try{
  const deletelivetvs=await livetvs.findByIdAndDelete(req.params._id)
  if(!deletelivetvs) res.status(404).send("No item found")
  // return
  const livetvsdata =await livetvs.find()
  res.status(200).json({
    status:"success",
    length:livetvsdata.length,
    data:{
        livetvsdata}
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
export {deletelivetvs};



// patch

const LivetvsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await livetvs.findOneAndUpdate({_id:patchId},
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
export{LivetvsPatch};







