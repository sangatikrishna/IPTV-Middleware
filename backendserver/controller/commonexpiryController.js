
// import categories from "../models/categoriesSchema.js";
import common_expiry from "../models/common_expiry.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const commonexpirydata =async (req, res) => {
    try {
      const expirydata = await common_expiry.find();

    res.status(200).json({
      // status:"success",
      // length:expirydata.length,

      expirydata

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  commonexpirydata;



//POST API
const addExpiry=async(req,res)=>
{


const {  
    
    host,
username,
password,
status,
message,
exp_date,
activation_code,
mac_address,
serial_number,
created,
  


  probe_status }= req.body;
  try{

    const newData=new common_expiry({     host,
        username,
        password,
        status,
        message,
        exp_date,
        activation_code,
        mac_address,
        serial_number,
        created,


      probe_status })
    await newData.save();
    const expirydata = await common_expiry.find();
    return res.json(await common_expiry.find());

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
export {addExpiry}
//GET by id
const getExpirybyObId=async(req,res)=>
{
try{

  const data=await common_expiry.findById(req.params._id)
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
export {getExpirybyObId}

const deleteexpiry=async(req,res)=>
{
try{

  const deleteexpiry=await common_expiry.findByIdAndDelete(req.params._id)
  if(!deleteexpiry) res.status(404).send("No item found")

  // return
  const expirydata =await common_expiry.find()

  res.status(200).json({

    status:"success",
    length:expirydata.length,
    data:{

      expirydata}
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
export {deleteexpiry}




const common_expiryPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await common_expiry.findOneAndUpdate({_id:patchId},
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



  export{common_expiryPatch}
//localhost:5001/api/common_expiryortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const common_expirysortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const common_expirysortable= await common_expiry.find(queryObj);


    res.status(200).json({

    status:"success",
    length:common_expirysortable.length,
    data:{

      common_expiryortable}
    });
  }

    catch(err)
    {

      res.status(404).json({

        status:"fail",
        message:err.message}
      )}





      }

    export {common_expirysortable}


