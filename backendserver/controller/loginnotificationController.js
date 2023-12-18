import login_notifications from "../models/login_notifications.js";

//Get for login_notifications

const getLoginnotification=async(req,res)=>
{
try{

  const data=await login_notifications.find()
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
export {getLoginnotification}

//Getby ID for login_notifications
const getLoginnotificationbyObId=async(req,res)=>
{
try{

  const data=await login_notifications.findById(req.params._id)
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
export {getLoginnotificationbyObId}

//Post for login_notifications
const addLoginnotification=async(req,res)=>
{
const {  

    id,
    user_id,
    created,
    is_read
 }= req.body;
  try{

    const newData=new login_notifications({
        id,
    user_id,
    created,
    is_read
     })
    await newData.save();
    const Loginnotificationdata = await login_notifications.find();
    res.json(await login_notifications.find());

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
export {addLoginnotification}

//Delete for login_notifications
const deleteLoginnotification=async(req,res)=>
{
try{

  const deleteloginnotification=await login_notifications.findByIdAndDelete(req.params._id)
  if(!deleteloginnotification) res.status(404).send("No item found")

  // return
  const Loginnotification =await login_notifications.find()

  res.status(200).json({

    status:"success",
    length:Loginnotification.length,
    data:{

        Loginnotification}
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
export {deleteLoginnotification}

// patch for login_notifications
const LoginnotificationIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await login_notifications.findOneAndUpdate({_id:patchId},
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
export{LoginnotificationIdPatch};