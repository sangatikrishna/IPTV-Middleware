import tokens from "../models/tokens.js";


//GET
const tokensdata =async (req, res) => {
    try {
      const data = await tokens.find();
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
  export default tokensdata;


//GET by _id
const tokensbyId = async(req,res)=>
{
try{
  const data=await tokens.findById(req.params._id)
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
export {tokensbyId};


//POST API
const addtokens =async(req,res)=>
{
const {  
    id,
    name


}= req.body;
  try{
    const newData=new tokens({
    id,
   name
   
       })
    await newData.save();
    return res.json(await tokens.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addtokens};



//DELETE API
const deletetokens =async(req,res)=>
{
try{
  const deletetokens=await tokens.findByIdAndDelete(req.params._id)
  if(!deletetokens) res.status(404).send("No item found")
  // return
  const tokensdata =await tokens.find()
  res.status(200).json({
    status:"success",
    length:tokensdata.length,
    data:{
        tokensdata}
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
export {deletetokens};



// patch

const tokensPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await tokens.findOneAndUpdate({_id:patchId},
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
export{tokensPatch};




