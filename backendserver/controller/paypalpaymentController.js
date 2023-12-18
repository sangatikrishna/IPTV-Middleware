
import paypal_payment_payloads from "../models/paypal_payment_payloads.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const paypal_payment_payloadsdata =async (req, res) => {
    try {
      const data = await paypal_payment_payloads.find();

    res.status(200).json({
      // status:"success",
      // length:data.length,

      data

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  paypal_payment_payloadsdata;



//POST API
const addpaypalpayment=async(req,res)=>
{


const {  
    
  id,
  pay_module,
  pay_box_id,
  pay_tran_id,
  payer_email,
  pay_amnt,
  pay_reseller_id,
  box_expiry_date,
  payment_status,
  ipn_status,
  receipt_download_count,
  created,
  updated,
  


   }= req.body;
  try{

    const newData=new paypal_payment_payloads({        
      id,
      pay_module,
      pay_box_id,
      pay_tran_id,
      payer_email,
      pay_amnt,
      pay_reseller_id,
      box_expiry_date,
      payment_status,
      ipn_status,
      receipt_download_count,
      created,
      updated,
       })
    await newData.save();
    const data = await paypal_payment_payloads.find();
    return res.json(await paypal_payment_payloads.find());

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
export {addpaypalpayment}
//GET by id
const getpaypalpaymentbyObId=async(req,res)=>
{
try{

  const data=await paypal_payment_payloads.findById(req.params._id)
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
export {getpaypalpaymentbyObId}

const deletepaypalpayment=async(req,res)=>
{
try{

  const deletedocument=await paypal_payment_payloads.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await paypal_payment_payloads.find()

  res.status(200).json({

    status:"success",
    length:data.length,
    data:{

      data}
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
export {deletepaypalpayment}




const paypal_payment_payloadsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await paypal_payment_payloads.findOneAndUpdate({_id:patchId},
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



  export{paypal_payment_payloadsPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const paypal_payment_payloadsSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await paypal_payment_payloads.find(queryObj);


    res.status(200).json({

    status:"success",
    length:data.length,
    data:{

        data}
    });
  }

    catch(err)
    {

      res.status(404).json({

        status:"fail",
        message:err.message}
      )}





      }

    export {paypal_payment_payloadsSortable}


