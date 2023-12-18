import am_users from "../models/am_users.js";

//get for am_users
const getAMuser=async(req,res)=>
{
try{

  const data=await am_users.find()
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
export {getAMuser}

//Getby ID for AMuser
const getAMuserbyObId=async(req,res)=>
{
try{

  const data=await am_users.findById(req.params._id)
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
export {getAMuserbyObId}

//Post for AMuser
const addAMuser=async(req,res)=>
{
const {  

    id,
    name,
    surname,
    nick,
    mail,
    password,
    enddate,
    createdby,
    billing_id,
    device_id,
    is_multiple_session,
    is_loggedin,
    status,
    group_id,
    created,
    modified,
    payment_settings_id,
    category_password,
    user_limit,
    number_of_login,
    is_deleted,
    is_trail,
    is_paid,
    is_cdn,
    reseller_id

 }= req.body;
  try{

    const newData=new am_users({
        id,
        name,
        surname,
        nick,
        mail,
        password,
        enddate,
        createdby,
        billing_id,
        device_id,
        is_multiple_session,
        is_loggedin,
        status,
        group_id,
        created,
        modified,
        payment_settings_id,
        category_password,
        user_limit,
        number_of_login,
        is_deleted,
        is_trail,
        is_paid,
        is_cdn,
        reseller_id
     })
    await newData.save();
    const AMuserdata = await am_users.find();
    res.json(await am_users.find());

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
export {addAMuser}

//Delete for AMuser
const deleteAMuser=async(req,res)=>
{
try{

  const deleteamuser=await am_users.findByIdAndDelete(req.params._id)
  if(!deleteamuser) res.status(404).send("No item found")

  // return
  const AMuser =await am_users.find()

  res.status(200).json({

    status:"success",
    length:AMuser.length,
    data:{

        AMuser}
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
export {deleteAMuser}

// patch for AMuser
const AMuserIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await am_users.findOneAndUpdate({_id:patchId},
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
export{AMuserIdPatch};