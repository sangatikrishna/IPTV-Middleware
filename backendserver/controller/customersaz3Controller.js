import Customer_Saz3 from "../models/customer_saz3.js";

//Get for Customer_Saz3
const getCustomerSaz3=async(req,res)=>
{
try{

  const data=await Customer_Saz3.find()
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
export {getCustomerSaz3}

//Getby ID for Customer_Saz3
const getCustomerSaz3byObId=async(req,res)=>
{
try{

  const data=await Customer_Saz3.findById(req.params._id)
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
export {getCustomerSaz3byObId}

//Post for Customer_Saz3
const addCustomerSaz3=async(req,res)=>
{
const {  

  id,
  name,
  surname,
  customer_id,
  is_main_customer,
  ip_address,
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

    const newData=new Customer_Saz3({
      id,
      name,
      surname,
      customer_id,
      is_main_customer,
      ip_address,
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
    const CustomerSaz3data = await Customer_Saz3.find();
    res.json(await Customer_Saz3.find());

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
export {addCustomerSaz3}

//Delete for Customer_Saz3
const deleteCustomerSaz3=async(req,res)=>
{
try{

  const deletecustomerSaz3=await Customer_Saz3.findByIdAndDelete(req.params._id)
  if(!deletecustomerSaz3) res.status(404).send("No item found")

  // return
  const CustomerSaz3 =await Customer_Saz3.find()

  res.status(200).json({

    status:"success",
    length:CustomerSaz3.length,
    data:{

        CustomerSaz3}
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
export {deleteCustomerSaz3}

// patch for Customer_Saz3
const CustomerSaz3IdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await Customer_Saz3.findOneAndUpdate({_id:patchId},
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
export{CustomerSaz3IdPatch};