import billing_types from "../models/billing_types.js";
import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

//GET
const billingtypesdata =async (req, res) => {
    try {
      const data = await billing_types.find();

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
  export default  billingtypesdata;


//GET by _id
const billingtypesbyObId=async(req,res)=>
{
try{

  const data=await billing_types.findById(req.params._id)
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
export {billingtypesbyObId}


//POST API
const addbillingtypes=async(req,res)=>
{


const {  
  id,
  name
}= req.body;
  try{

    const newData=new billing_types({
      id,
      name})
    await newData.save();
    const videodata = await billing_types.find();
    return res.json(await billing_types.find());

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
export {addbillingtypes}

//DELETE API
const deletebillingtypes=async(req,res)=>
{
try{

  const deletedbillingtypes=await billing_types.findByIdAndDelete(req.params._id)
  if(!deletedbillingtypes) res.status(404).send("No item found")

  // return
  const billingtypesdata =await billing_types.find()

  res.status(200).json({

    status:"success",
    length:billingtypesdata.length,
    data:{

        billingtypesdata}
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
export {deletebillingtypes}

const billingtypesPatch=async(req,res)=>

{

try{

const patchId=req.params._id;
  const updated=await billing_types.findOneAndUpdate({_id:patchId},

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
export{billingtypesPatch}


