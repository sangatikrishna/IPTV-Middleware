import livetv_favorites from "../models/livetv_favorites.js";


//GET
const Livetvfavroutiesdata =async (req, res) => {
    try {
      const data = await livetv_favorites.find();
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
  export default Livetvfavroutiesdata;



//GET by _id
const LivetvfavroutiesbyId = async(req,res)=>
{
try{
  const data=await livetv_favorites.findById(req.params._id)
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
export {LivetvfavroutiesbyId};



//POST API
const addLivetvfavrouties =async(req,res)=>
{
const {  
    id,
    user_id,
    camera_id,
    created,
    modified,
   


}= req.body;
  try{
    const newData=new livetv_favorites({
    id,
    user_id,
    camera_id,
    created,
    modified,
   
       })
    await newData.save();
    return res.json(await livetv_favorites.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addLivetvfavrouties};



//DELETE API
const deleteLivetvfavrouties =async(req,res)=>
{
try{
  const deleteLivetvfavrouties=await livetv_favorites.findByIdAndDelete(req.params._id)
  if(!deleteLivetvfavrouties) res.status(404).send("No item found")
  // return
  const livetvfavoritesdata =await livetv_favorites.find()
  res.status(200).json({
    status:"success",
    length:livetvfavoritesdata.length,
    data:{
        livetvfavoritesdata}
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
export {deleteLivetvfavrouties};



// patch

const LivetvfavroutiesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await livetv_favorites.findOneAndUpdate({_id:patchId},
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
export{LivetvfavroutiesPatch};



