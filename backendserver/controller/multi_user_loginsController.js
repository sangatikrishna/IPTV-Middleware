import multi_user_logins from "../models/multi_user_logins.js"
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const multi_user_loginsdata =async (req, res) => {
    try {
      const data = await multi_user_logins.find();

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
  export default  multi_user_loginsdata;


// // GET by _id
const multi_user_loginsbyObId=async(req,res)=>
{
try{

  const data=await multi_user_logins.findById(req.params._id)
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
export {multi_user_loginsbyObId}


//POST API
const addMulti_user_logins=async(req,res)=>
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

    const newData=new aros({
        id,
        userId,
        userIp,
        loginDate,
        status,
        logoutDate,
        is_device
    
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await multi_user_logins.find());

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
export {addMulti_user_logins}



 //DELETE API
const deletemulti_user_logins=async(req,res)=>
{
try{

  const deletedMulti_user_logins=await multi_user_logins.findByIdAndDelete(req.params._id)
  if(!deletedMulti_user_logins) res.status(404).send("No item found")

  // return
  const multi_user_loginsdata =await multi_user_logins.find()

  res.status(200).json({

    status:"success",
    length:multi_user_loginsdata.length,
    data:{

        multi_user_loginsdata}
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
export {deletemulti_user_logins}



// patch

const multi_user_loginsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await multi_user_logins.findOneAndUpdate({_id:patchId},
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
export{multi_user_loginsPatch};

