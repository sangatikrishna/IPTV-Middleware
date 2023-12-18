import  demo_saz_playlist_3 from "../models/demo_saz_playlist_3.js"
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const demo_saz_playlist_3data =async (req, res) => {
    try {
      const data = await demo_saz_playlist_3.find();

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
  export default  demo_saz_playlist_3data;


// GET by _id
const demo_saz_playlist_3byObId=async(req,res)=>
{
try{

  const data=await demo_saz_playlist_3.findById(req.params._id)
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
export {demo_saz_playlist_3byObId}


// //POST API
const addDemo_saz_playlist_3=async(req,res)=>
{
const {  
  id,
  name,
  url,
  description,
  created_date,
  status,
  expire_data

}= req.body;
  try{

    const newData=new demo_saz_playlist_3({
  id,
  name,
  url,
  description,
  created_date,
  status,
  expire_data
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await demo_saz_playlist_3.find());

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
export {addDemo_saz_playlist_3}




// //DELETE API
const deletedemo_saz_playlist_3=async(req,res)=>
{
try{

  const deletedDemo_saz_playlist_3=await demo_saz_playlist_3.findByIdAndDelete(req.params._id)
  if(!deletedDemo_saz_playlist_3) res.status(404).send("No item found")

  // return
  const demo_saz_playlist_3data =await demo_saz_playlist_3.find()

  res.status(200).json({

    status:"success",
    length:demo_saz_playlist_3data.length,
    data:{

        demo_saz_playlist_3data}
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
export {deletedemo_saz_playlist_3}



// patch

const demo_saz_playlist_3Patch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await demo_saz_playlist_3.findOneAndUpdate({_id:patchId},
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
export{demo_saz_playlist_3Patch};

