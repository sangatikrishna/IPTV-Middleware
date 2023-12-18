import livetv_categories from "../models/livetv_categories.js";


//GET
const Livetvcategoriesdata =async (req, res) => {
    try {
      const data = await livetv_categories.find();
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
  export default Livetvcategoriesdata;



  //GET by _id
const livetvcategoriesbyId = async(req,res)=>
{
try{
  const data=await livetv_categories.findById(req.params._id)
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
export {livetvcategoriesbyId};



//POST API
const addlivetvcategories =async(req,res)=>
{
const {  
    id,
    broadcast_id,
    category_id,
    position,
    created,
    updated


}= req.body;
  try{
    const newData=new livetv_categories({
        id,
        broadcast_id,
        category_id,
        position,
        created,
        updated
       
       })
    await newData.save();
    return res.json(await livetv_categories.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addlivetvcategories};



//DELETE API
const deletelivetvcategories =async(req,res)=>
{
try{
  const deletelivetvcategories=await livetv_categories.findByIdAndDelete(req.params._id)
  if(!deletelivetvcategories) res.status(404).send("No item found")
  // return
  const livetvcategoriesdata =await livetv_categories.find()
  res.status(200).json({
    status:"success",
    length:livetvcategoriesdata.length,
    data:{
        livetvcategoriesdata}
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
export {deletelivetvcategories};




// patch

const livetvcategoriesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await livetv_categories.findOneAndUpdate({_id:patchId},
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
export{livetvcategoriesPatch};




