import adons_packages from "../models/adons_packages.js"; 
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const adons_packagesdata =async (req, res) => {
    try {
      const data = await adons_packages.find();

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
  export default  adons_packagesdata;


// GET by _id
const adons_packagesbyObId=async(req,res)=>
{
try{

  const data=await adons_packages.findById(req.params._id)
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
export {adons_packagesbyObId}


// //POST API
const addAdonspackages=async(req,res)=>
{
const {  
  id,
  name,
  image,
  description,
  admin_id,
  status

}= req.body;
  try{

    const newData=new adons_packages({
      id,
      name,
      image,
      description,
      admin_id,
      status
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await adons_packages.find());

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
export {addAdonspackages}




// //DELETE API
const deleteadonspackages=async(req,res)=>
{
try{

  const deletedAdonspackages=await adons_packages.findByIdAndDelete(req.params._id)
  if(!deletedAdonspackages) res.status(404).send("No item found")

  // return
  const adonspackagesdata =await adons_packages.find()

  res.status(200).json({

    status:"success",
    length:adonspackagesdata.length,
    data:{

        adonspackagesdata}
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
export {deleteadonspackages}



// patch

const adonspackagesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await adons_packages.findOneAndUpdate({_id:patchId},
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
export{adonspackagesPatch};

