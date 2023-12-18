import mod_categories from "../models/mod_categories.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const mod_categoriesdata =async (req, res) => {
    try {
      const data = await mod_categories.find();

    res.status(200).json({
      // status:"success",
      // length:videodata.length,

      data

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  mod_categoriesdata;


// GET by _id
const mod_categoriesbyObId=async(req,res)=>
{
try{

  const data=await mod_categories.findById(req.params._id)
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
export {mod_categoriesbyObId}


//POST API
const addMod_categories=async(req,res)=>
{
const {
    id,
    title,
    image,
    createdate,
    parent_id,
    visible,
    position,
    is_protected,
    is_deleted

}= req.body;
  try{

    const newData=new mod_categories({
        id,
        title,
        image,
        createdate,
        parent_id,
        visible,
        position,
        is_protected,
        is_deleted
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await mod_categories.find());

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
export {addMod_categories}



  //DELETE API
const deletemod_categories=async(req,res)=>
{
try{

  const deletedMod_categories=await mod_categories.findByIdAndDelete(req.params._id)
  if(!deletedMod_categories) res.status(404).send("No item found")

  // return
  const mod_categoriesdata =await mod_categories.find()

  res.status(200).json({

    status:"success",
    length:mod_categoriesdata.length,
    data:{

        mod_categoriesdata}
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
export {deletemod_categories}


 // patch

const  mod_categoriesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await mod_categories.findOneAndUpdate({_id:patchId},
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
export{mod_categoriesPatch};

