import demo_playlist_saz3 from "../models/demo_playlist_saz3.js";
//get for getdemoplaylistsaz3
const getdemoplaylistsaz3=async(req,res)=>
{
try{

  const data=await demo_playlist_saz3.find()
  return res.json({data});
}
catch(err)
{
  console.log(err.message);
  res.status(404).json({

    status:"fail",
    message:err.message
  });
}
}
export {getdemoplaylistsaz3}

//Getby ID for getdemoplaylistsaz3
const getdemoplaylistsaz3byObId=async(req,res)=>
{
try{

  const data=await demo_playlist_saz3.findById(req.params._id)
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
export {getdemoplaylistsaz3byObId}

//Post for getdemoplaylistsaz3
const adddemoplaylistsaz3=async(req,res)=>
{
const {

  id,
  title,
  description,
  user_ids,
  start_date,
  repeat_interval,
  is_active,
  created,
  modified
 }= req.body;
  try{

    const newData=new demo_playlist_saz3({
      id,
      title,
      description,
      user_ids,
      start_date,
      repeat_interval,
      is_active,
      created,
      modified
     })
    await newData.save();
    const Demoplaylistdata = await demo_playlist_saz3.find();
    res.json(await demo_playlist_saz3.find());

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
export {adddemoplaylistsaz3}

//Delete for getdemoplaylistsaz3
const deletedemoplaylistsaz3=async(req,res)=>
{
try{

  const deletedemoplaylistsaz3=await demo_playlist_saz3.findByIdAndDelete(req.params._id)
  if(!deletedemoplaylistsaz3) res.status(404).send("No item found")

  // return
  const demoplaylistsaz3 =await demo_playlist_saz3.find()

  res.status(200).json({

    status:"success",
    length:demoplaylistsaz3.length,
    data:{

        demoplaylistsaz3}
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
export {deletedemoplaylistsaz3}

// patch for getdemoplaylistsaz3
const demoplaylistsaz3IdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await demo_playlist_saz3.findOneAndUpdate({_id:patchId},
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
export{demoplaylistsaz3IdPatch};