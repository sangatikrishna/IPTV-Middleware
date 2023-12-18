import saz3_main_urls from "../models/saz3_main_url.js"
//Get for Saz3_Main_URL
const getsaz3MainURL=async(req,res)=>
{
try{

  const data=await saz3_main_urls.find()
  res.json({data});
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
export {getsaz3MainURL}

//Getby ID for Saz3_Main_URL
const getsaz3MainURLObId=async(req,res)=>
{
try{

  const data=await saz3_main_urls.findById(req.params._id)
  res.json({data});
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
export {getsaz3MainURLObId}

//Post for Saz3_Main_URL
const addsaz3MainURL=async(req,res)=>
{
const {  


    id,
    Name,
    URL,
    Active_Inactive
 }= req.body;
  try{

    const newData=new saz3_main_urls({
        id,
        id,
        Name,
        URL,
        Active_Inactive
     })
    await newData.save();
    const videolives = await saz3_main_urls.find();
    res.json(await saz3_main_urls.find());

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
export {addsaz3MainURL}

//Delete for Saz3_Main_URL
const deletesaz3MainURL=async(req,res)=>
{
try{

  const deleteSaz3MainURL=await saz3_main_urls.findByIdAndDelete(req.params._id)
  if(!deleteSaz3MainURL) res.status(404).send("No item found")

  // return
  const Saz3MainURL =await saz3_main_urls.find()

  res.status(200).json({

    status:"success",
    length:Videolives.length,
    data:{

        Videolives}
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
export {deletesaz3MainURL}

// patch for Saz3_Main_URL
const Saz3MainURLPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await saz3_main_urls.findOneAndUpdate({_id:patchId},
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
export{Saz3MainURLPatch};