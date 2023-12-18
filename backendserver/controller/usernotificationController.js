import user_notifications from "../models/user_notifications.js"


//GET
const usernotificationdata =async (req, res) => {
    try {
      const data = await user_notifications.find();
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
  export default usernotificationdata;



 //GET by _id
 const usernotificationbyId = async(req,res)=>
 {
 try{
   const data=await user_notifications.findById(req.params._id)
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
 export {usernotificationbyId};
 



//POST API
const addusernotification =async(req,res)=>
{
const {  
    id,
    user_id,
    reseller_id,
    status,
    created
}= req.body;
  try{
    const newData=new user_notifications({
    id,
    user_id,
    reseller_id,
    status,
    created
       })
    await newData.save();
    return res.json(await user_notifications.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addusernotification}; 




//DELETE API
const deleteusernotification=async(req,res)=>
{
try{
  const deleteusernotification=await user_notifications.findByIdAndDelete(req.params._id)
  if(!deleteusernotification) res.status(404).send("No item found")
  // return
  const usernotificationdata =await user_notifications.find()
  res.status(200).json({
    status:"success",
    length:usernotificationdata.length,
    data:{
        usernotificationdata}
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
export {deleteusernotification};



// patch

const usernotificationpatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await user_notifications.findOneAndUpdate({_id:patchId},
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
export{usernotificationpatch};




