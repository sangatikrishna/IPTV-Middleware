
// import categories from "../models/categoriesSchema.js";
import Saz2_Main_URL from "../models/saz2_main_url.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const saz2mainurldata =async (req, res) => {
    try {
      const logindata = await Saz2_Main_URL.find();

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
  export default  saz2mainurldata;



//POST API
const addsaz2=async(req,res)=>
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

    const newData=new Saz2_Main_URL({        id,
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
    const logindata = await Saz2_Main_URL.find();
    return res.json(await Saz2_Main_URL.find());

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
export {addsaz2}
//GET by id
const getsaz2byObId=async(req,res)=>
{
try{

  const data=await Saz2_Main_URL.findById(req.params._id)
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
export {getsaz2byObId}

const deletesaz2=async(req,res)=>
{
try{

  const deletesaz2=await Saz2_Main_URL.findByIdAndDelete(req.params._id)
  if(!deletesaz2) res.status(404).send("No item found")

  // return
  const logindata =await Saz2_Main_URL.find()

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
export {deletesaz2}




const Saz2_Main_URLPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await Saz2_Main_URL.findOneAndUpdate({_id:patchId},
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



  export{Saz2_Main_URLPatch}
//localhost:5001/api/Saz2_Main_URLortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const Saz2_Main_URLsortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const Saz2_Main_URLsortable= await Saz2_Main_URL.find(queryObj);


    res.status(200).json({

    status:"success",
    length:Saz2_Main_URLsortable.length,
    data:{

      Saz2_Main_URLortable}
    });
  }

    catch(err)
    {

      res.status(404).json({

        status:"fail",
        message:err.message}
      )}





      }

    export {Saz2_Main_URLsortable}


