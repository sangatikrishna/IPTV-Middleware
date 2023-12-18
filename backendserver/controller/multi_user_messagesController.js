import multi_user_messages from "../models/multi_user_messages.js"
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const multi_user_messagesdata =async (req, res) => {
    try {
      const data = await multi_user_messages.find();

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
  export default  multi_user_messagesdata;


 // GET by _id
const multi_user_messagesbyObId=async(req,res)=>
{
try{

  const data=await multi_user_messages.findById(req.params._id)
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
export {multi_user_messagesbyObId}


//POST API
const addMulti_user_messages=async(req,res)=>
{
const {  
    id,
    title,
    description,
    user_ids,
    start_date,
    repeat_interval,
    is_active,
    created,
    modified

}= req.body;
  try{

    const newData=new multi_user_messages({
     id,
    title,
    description,
    user_ids,
    start_date,
    repeat_interval,
    is_active,
    created,
    modified

    
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await multi_user_messages.find());

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
export {addMulti_user_messages}


 //DELETE API
const deletemulti_user_messages=async(req,res)=>
{
try{

  const deletedMulti_user_messages=await multi_user_messages.findByIdAndDelete(req.params._id)
  if(!deletedMulti_user_messages) res.status(404).send("No item found")

  // return
  const multi_user_messagesdata =await multi_user_messages.find()

  res.status(200).json({

    status:"success",
    length:multi_user_messagesdata.length,
    data:{

        multi_user_messagesdata}
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
export {deletemulti_user_messages}



// // patch

const multi_user_messagesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await multi_user_messages.findOneAndUpdate({_id:patchId},
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
export{multi_user_messagesPatch};

