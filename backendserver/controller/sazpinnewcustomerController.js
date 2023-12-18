import customers from "../models/sazpinnewcustomer.js";

//get for customers
const getSazpinnewcustomers=async(req,res)=>
{
try{

  const data=await customers.find()
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
export {getSazpinnewcustomers}

//Getby ID for customers
const getSazpinnewcustomersbyObId=async(req,res)=>
{
try{

  const data=await customers.findById(req.params._id)
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
export {getSazpinnewcustomersbyObId}

//Post for customers
const addSazpinnewcustomers=async(req,res)=>
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
 }= req.body;
  try{

    const newData=new customers({
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
     })
    await newData.save();
    const Sazpinnewcustomersdata = await customers.find();
    res.json(await customers.find());

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
export {addSazpinnewcustomers}

//Delete for customers
const deleteSazpinnewcustomers=async(req,res)=>
{
try{

  const deleteSazpinnewcustomers=await customers.findByIdAndDelete(req.params._id)
  if(!deleteSazpinnewcustomers) res.status(404).send("No item found")

  // return
  const Sazpinnewcustomers =await customers.find()

  res.status(200).json({

    status:"success",
    length:Sazpinnewcustomers.length,
    data:{

        Sazpinnewcustomers}
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
export {deleteSazpinnewcustomers}

// patch for customers
const SazpinnewcustomersIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await customers.findOneAndUpdate({_id:patchId},
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
export{SazpinnewcustomersIdPatch};