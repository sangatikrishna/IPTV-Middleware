import demo_playlist2 from "../models/demo_playlist2.js";
//get for getdemoplaylist2
const getdemoplaylist2=async(req,res)=>
{
try{

  const data=await demo_playlist2.find()
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
export {getdemoplaylist2}

//Getby ID for getdemoplaylist2
const getdemoplaylist2byObId=async(req,res)=>
{
try{

  const data=await demo_playlist2.findById(req.params._id)
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
export {getdemoplaylist2byObId}

//Post for getdemoplaylist2
const adddemoplaylist2=async(req,res)=>
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

    const newData=new demo_playlist2({
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
    const Demoplaylistdata = await demo_playlist2.find();
    res.json(await demo_playlist2.find());

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
export {adddemoplaylist2}

//Delete for getdemoplaylist2
const deletedemoplaylist2=async(req,res)=>
{
try{

  const deletedemoplaylist2=await demo_playlist2.findByIdAndDelete(req.params._id)
  if(!deletedemoplaylist2) res.status(404).send("No item found")

  // return
  const demoplaylist2 =await demo_playlist2.find()

  res.status(200).json({

    status:"success",
    length:demoplaylist2.length,
    data:{

        demoplaylist2}
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
export {deletedemoplaylist2}

// patch for getdemoplaylist2
const demoplaylist2IdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await demo_playlist2.findOneAndUpdate({_id:patchId},
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
export{demoplaylist2IdPatch};