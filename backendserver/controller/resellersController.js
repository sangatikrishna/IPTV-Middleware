import resellers from "../models/resellers.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const resellersdata =async (req, res) => {
    try {
      const data = await resellers.find();

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
  export default  resellersdata;


 // GET by _id
const resellersbyObId=async(req,res)=>
{
try{

  const data=await resellers.findById(req.params._id)
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
export {resellersbyObId}


//POST API
const addResellers=async(req,res)=>
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
    reseller_module_type,
    reseller_box_price,
    profile_image,
    session_id,
    renewal_date

}= req.body;
  try{

    const newData=new resellers({
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
        reseller_module_type,
        reseller_box_price,
        profile_image,
        session_id,
        renewal_date
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await resellers.find());

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
export {addResellers}




 //DELETE API
const deleteresellers=async(req,res)=>
{
try{

  const deleteResellers=await resellers.findByIdAndDelete(req.params._id)
  if(!deleteResellers) res.status(404).send("No item found")

  // return
  const resellersdata =await resellers.find()

  res.status(200).json({

    status:"success",
    length:resellersdata.length,
    data:{

        resellersdata}
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
export {deleteresellers}


// // patch

const  resellersPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await resellers.findOneAndUpdate({_id:patchId},
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
export{resellersPatch};

