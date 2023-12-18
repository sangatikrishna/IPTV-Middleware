import video_categories from "../models/video_categories.js";



//GET
const video_categoriesdata =async (req, res) => {
    try {
      const data = await video_categories.find();
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
  export default video_categoriesdata;



 //GET by _id
 const video_categoriesbyId = async(req,res)=>
 {
 try{
   const data=await video_categories.findById(req.params._id)
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
 export {video_categoriesbyId};
 



//POST API
const addvideo_categoriesdata =async(req,res)=>
{
const {  
    id,
    title,
    image,
    shahid_image,
    france_image,
    humax_image,
    zomtak_image,
    masa_plus_image,
    createdate,
    visible,
    position,
    parent_id,
    is_protected,
    created,
    modified,
    is_deleted

}= req.body;
  try{
    const newData=new video_categories({
    id,
    title,
    image,
    shahid_image,
    france_image,
    humax_image,
    zomtak_image,
    masa_plus_image,
    createdate,
    visible,
    position,
    parent_id,
    is_protected,
    created,
    modified,
    is_deleted
       })
    await newData.save();
    return res.json(await video_categories.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addvideo_categoriesdata}; 




//DELETE API
const deletevideocategories=async(req,res)=>
{
try{
  const deletevideocategories=await video_categories.findByIdAndDelete(req.params._id)
  if(!deletevideocategories) res.status(404).send("No item found")
  // return
  const videocategoriesdata =await video_categories.find()
  res.status(200).json({
    status:"success",
    length:videocategoriesdata.length,
    data:{
        videocategoriesdata}
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
export {deletevideocategories};



// patch

const videocategoriespatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await video_categories.findOneAndUpdate({_id:patchId},
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
export{videocategoriespatch};




