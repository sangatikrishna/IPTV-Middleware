import xtream_resellers from "../models/xtream_resellers.js";


//Get for xtreamresellers
const getXtreamresellers=async(req,res)=>
{
try{

  const data=await xtream_resellers.find()
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
export {getXtreamresellers}

//Getby ID for xtreamresellers
const getXtreamresellersbyObId=async(req,res)=>
{
try{

  const data=await xtream_resellers.findById(req.params._id)
  res.json(data);
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
export {getXtreamresellersbyObId}

//Post for xtreamresellers
const addXtreamresellers=async(req,res)=>
{
const {  

    id,
    mac_address,
    expiry_date,
    streamlist_url,
    email,
    enddate,
    username,
    password,
    firstname,
    lastname,
    gender,
    created_by,
    status,
    group_id,
    created,
    updated
 }= req.body;
  try{

    const newData=new xtream_resellers({
        id,
        mac_address,
        expiry_date,
        streamlist_url,
        email,
        enddate,
        username,
        password,
        firstname,
        lastname,
        gender,
        created_by,
        status,
        group_id,
        created,
        updated
     })
    await newData.save();
    const Xtreamresellersdata = await xtream_resellers.find();
    res.json(await xtream_resellers.find());

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
export {addXtreamresellers}

//Delete for xtreamresellers
const deleteXtreamresellers=async(req,res)=>
{
try{

  const deletextreamresellers=await xtream_resellers.findByIdAndDelete(req.params._id)
  if(!deletextreamresellers) res.status(404).send("No item found")

  // return
  const Xtreamresellers =await xtream_resellers.find()

  res.status(200).json({

    status:"success",
    length:Xtreamresellers.length,
    data:{

        Xtreamresellers}
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
export {deleteXtreamresellers}

// patch for xtreamresellers
const XtreamresellersIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await xtream_resellers.findOneAndUpdate({_id:patchId},
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
export{XtreamresellersIdPatch};