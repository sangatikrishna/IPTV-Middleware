import messages from "../models/messages.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const messagesdata =async (req, res) => {
    try {
      const data = await messages.find();

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
  export default  messagesdata;


 // GET by _id
const messagesbyObId=async(req,res)=>
{
try{

  const data=await messages.findById(req.params._id)
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
export {messagesbyObId}


//POST API
const addMessages=async(req,res)=>
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

    const newData=new messages({
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
    return res.json(await messages.find());

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
export {addMessages}




 //DELETE API
const deletemessages=async(req,res)=>
{
try{

  const deletedMessages=await messages.findByIdAndDelete(req.params._id)
  if(!deletedMessages) res.status(404).send("No item found")

  // return
  const messagesdata =await messages.find()

  res.status(200).json({

    status:"success",
    length:messagesdata.length,
    data:{

        messagesdata}
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
export {deletemessages}


// // patch

const  messagesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await messages.findOneAndUpdate({_id:patchId},
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
export{messagesPatch};

