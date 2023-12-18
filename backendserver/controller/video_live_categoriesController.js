import video_live_categories from "../models/video_live_categories.js";



//GET
const video_live_categoriesdata =async (req, res) => {
    try {
      const data = await video_live_categories.find();
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
  export default video_live_categoriesdata;



 //GET by _id
 const video_live_categoriesdatabyId = async(req,res)=>
 {
 try{
   const data=await video_live_categories.findById(req.params._id)
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
 export {video_live_categoriesdatabyId};
 



//POST API
const addvideo_live_categories =async(req,res)=>
{
const {  
    id,
    title,
    image,
    shahid_image,
    france_image,
    createdate,
    visible,
    position,
    parent_id,
    is_protected,
    created,
    modified,
    is_deleted,
    
}= req.body;
  try{
    const newData=new video_live_categories({
        id,
    title,
    image,
    shahid_image,
    france_image,
    createdate,
    visible,
    position,
    parent_id,
    is_protected,
    created,
    modified,
    is_deleted,
       })
    await newData.save();
    return res.json(await video_live_categories.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addvideo_live_categories}; 




//DELETE API
const deletevideo_live_categories=async(req,res)=>
{
try{
  const deletevideo_live_categories=await video_live_categories.findByIdAndDelete(req.params._id)
  if(!deletevideo_live_categories) res.status(404).send("No item found")
  // return
  const video_live_categoriesdata =await video_live_categories.find()
  res.status(200).json({
    status:"success",
    length:video_live_categoriesdata.length,
    data:{
        video_live_categoriesdata}
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
export {deletevideo_live_categories};



// patch

const video_live_categoriespatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await video_live_categories.findOneAndUpdate({_id:patchId},
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
export{video_live_categoriespatch};




