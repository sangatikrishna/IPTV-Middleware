import ticket_replies from "../models/ticket_replies.js";

//GET
const ticketrepliesdata =async (req, res) => {
    try {
      const data = await ticket_replies.find();
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
  export default ticketrepliesdata;


//GET by _id
const ticketrepliesbyId = async(req,res)=>
{
try{
  const data=await ticket_replies.findById(req.params._id)
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
export {ticketrepliesbyId};


//POST API
const addticketreplies =async(req,res)=>
{
const {  
    id,
    description,
    ticket_id,
    user_id,
    admin_id


}= req.body;
  try{
    const newData=new ticket_replies({
    id,
    description,
    ticket_id,
    user_id,
    admin_id
   
       })
    await newData.save();
    return res.json(await ticket_replies.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addticketreplies};


//DELETE API
const deleteticketreplies =async(req,res)=>
{
try{
  const deleteticketreplies=await ticket_replies.findByIdAndDelete(req.params._id)
  if(!deleteticketreplies) res.status(404).send("No item found")
  // return
  const ticketrepliesdata =await ticket_replies.find()
  res.status(200).json({
    status:"success",
    length:ticketrepliesdata.length,
    data:{
        ticketrepliesdata}
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
export {deleteticketreplies};



// patch

const ticketrepliesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await ticket_replies.findOneAndUpdate({_id:patchId},
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
export{ticketrepliesPatch};



