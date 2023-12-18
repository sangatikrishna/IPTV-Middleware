
import users from "../models/users.js";


//GET
const usersdata =async (req, res) => {
    try {
      const data = await users.find();
    res.status(200).json({
      data
      });
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message
      })
    }
  }
  export default usersdata;



 //GET by _id
 const usersbyId = async(req,res)=>
 {
 try{
   const data=await users.findById(req.params._id)
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
 export {usersbyId};
 



//POST API
const addusers =async(req,res)=>
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
    const newData=new users({
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
    return res.json(await users.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addusers}; 




//DELETE API
const deleteusers=async(req,res)=>
{
try{
  const deleteusers=await users.findByIdAndDelete(req.params._id)
  if(!deleteusers) res.status(404).send("No item found")
  // return
  const usersdata =await users.find()
  res.status(200).json({
    status:"success",
    length:usersdata.length,
    data:{
        usersdata}
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
export {deleteusers};



// patch

const userspatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await users.findOneAndUpdate({_id:patchId},
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
export{userspatch};




