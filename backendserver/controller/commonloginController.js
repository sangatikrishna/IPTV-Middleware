
// import categories from "../models/categoriesSchema.js";
import common_login from "../models/common_login.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const commonlogindata =async (req, res) => {
    try {
      const logindata = await common_login.find();

    res.status(200).json({
      // status:"success",
      // length:logindata.length,

      logindata

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  commonlogindata;



//POST API
const addLogin=async(req,res)=>
{


const {  
    
    id,
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

    const newData=new common_login({        id,
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


      probe_status })
    await newData.save();
    const logindata = await common_login.find();
    return res.json(await common_login.find());

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
export {addLogin}
//GET by id
const getLoginbyObId=async(req,res)=>
{
try{

  const data=await common_login.findById(req.params._id)
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
export {getLoginbyObId}

const deletelogin=async(req,res)=>
{
try{

  const deletelogin=await common_login.findByIdAndDelete(req.params._id)
  if(!deletelogin) res.status(404).send("No item found")

  // return
  const logindata =await common_login.find()

  res.status(200).json({

    status:"success",
    length:logindata.length,
    data:{

      logindata}
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
export {deletelogin}




const common_loginPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await common_login.findOneAndUpdate({_id:patchId},
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



  export{common_loginPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const common_loginsortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const common_loginsortable= await common_login.find(queryObj);


    res.status(200).json({

    status:"success",
    length:common_loginsortable.length,
    data:{

      common_loginortable}
    });
  }

    catch(err)
    {

      res.status(404).json({

        status:"fail",
        message:err.message}
      )}





      }

    export {common_loginsortable}


