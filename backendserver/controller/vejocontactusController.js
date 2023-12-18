import vejo_contact_us from "../models/vejo_contact_us.js";



//GET
const vejo_contact_usdata =async (req, res) => {
    try {
      const data = await vejo_contact_us.find();
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
  export default vejo_contact_usdata;



 //GET by _id
 const vejo_contact_usbyId = async(req,res)=>
 {
 try{
   const data=await vejo_contact_us.findById(req.params._id)
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
 export {vejo_contact_usbyId};
 



//POST API
const addvejo_contact_us =async(req,res)=>
{
const {  
    id,
    subject,
    phone_number,
    email,
    message,
    ip_address,
    created

}= req.body;
  try{
    const newData=new vejo_contact_us({
        id,
    subject,
    phone_number,
    email,
    message,
    ip_address,
    created
       })
    await newData.save();
    return res.json(await vejo_contact_us.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addvejo_contact_us}; 




//DELETE API
const deletevejo_contact_us=async(req,res)=>
{
try{
  const deletevejo_contact_us=await vejo_contact_us.findByIdAndDelete(req.params._id)
  if(!deletevejo_contact_us) res.status(404).send("No item found")
  // return
  const vejo_contact_usdata =await vejo_contact_us.find()
  res.status(200).json({
    status:"success",
    length:vejo_contact_usdata.length,
    data:{
        vejo_contact_usdata}
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
export {deletevejo_contact_us};



// patch

const vejo_contact_uspatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await vejo_contact_us.findOneAndUpdate({_id:patchId},
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
export{vejo_contact_uspatch};




