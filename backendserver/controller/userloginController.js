import userlogin from "../models/userlogin.js";


//GET
const userlogindata =async (req, res) => {
    try {
      const data = await userlogin.find();
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
  export default userlogindata;



 //GET by _id
 const userloginbyId = async(req,res)=>
 {
 try{
   const data=await userlogin.findById(req.params._id)
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
 export {userloginbyId};
 



//POST API
const adduserlogin=async(req,res)=>
{
const {  
    id,
    userId,
    userIp,
    loginDate,
    status,
    logoutDate,
    is_device
}= req.body;
  try{
    const newData=new userlogin({
    id,
    userId,
    userIp,
    loginDate,
    status,
    logoutDate,
    is_device
       })
    await newData.save();
    return res.json(await userlogin.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {adduserlogin}; 




//DELETE API
const deleteuserlogin=async(req,res)=>
{
try{
  const deleteuserlogin=await userinfos.findByIdAndDelete(req.params._id)
  if(!deleteuserlogin) res.status(404).send("No item found")
  // return
  const userlogindata =await userlogin.find()
  res.status(200).json({
    status:"success",
    length:userlogindata.length,
    data:{
        userlogindata}
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
export {deleteuserlogin};



// patch

const userloginpatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await userlogin.findOneAndUpdate({_id:patchId},
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
export{userloginpatch};





