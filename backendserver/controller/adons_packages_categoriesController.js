import adons_packages_categories from "../models/adons_packages_categories.js"; 
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const adons_packages_categoriesdata =async (req, res) => {
    try {
      const data = await adons_packages_categories.find();

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
  export default  adons_packages_categoriesdata;


// // GET by _id
const adons_packages_categoriesbyObId=async(req,res)=>
{
try{

  const data=await adons_packages_categories.findById(req.params._id)
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
export {adons_packages_categoriesbyObId}


// // //POST API
const addAdonspackagescategories=async(req,res)=>
{
const {  
  id,
  adons_package_id,
  adons_category_id

}= req.body;
  try{

    const newData=new adons_packages_categories({
      id,
      adons_package_id,
      adons_category_id
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await adons_packages_categories.find());

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
export {addAdonspackagescategories}




// // //DELETE API
const deleteadonspackagescategories=async(req,res)=>
{
try{

  const deletedAdonspackagescategories=await adons_packages_categories.findByIdAndDelete(req.params._id)
  if(!deletedAdonspackagescategories) res.status(404).send("No item found")

  // return
  const adonspackagescategoriesdata =await adons_packages_categories.find()

  res.status(200).json({

    status:"success",
    length:adonspackagescategoriesdata.length,
    data:{

        adonspackagescategoriesdata}
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
export {deleteadonspackagescategories}



// // patch

const adonspackagescategoriesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await adons_packages_categories.findOneAndUpdate({_id:patchId},
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
export{adonspackagescategoriesPatch};

