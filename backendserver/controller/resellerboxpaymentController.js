
import reseller_box_payment_mapping from "../models/reseller_box_payment_mapping.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const reseller_box_payment_mappingdata =async (req, res) => {
    try {
      const data = await reseller_box_payment_mapping.find();

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
  export default  reseller_box_payment_mappingdata;



//POST API
const addresellerboxpayment=async(req,res)=>
{


const {  
    
    id,
reseller_id,
is_main,
paying_currency,
box_type,
total_amount_alloted,
box_unit_price,
box_extra_charges,
total_box_assigned,
box_amount_paid,
box_amount_remaining,
remarks,
entry_type,
created_by,
created,
updated,
  


   }= req.body;
  try{

    const newData=new reseller_box_payment_mapping({        
        id,
        reseller_id,
        is_main,
        paying_currency,
        box_type,
        total_amount_alloted,
        box_unit_price,
        box_extra_charges,
        total_box_assigned,
        box_amount_paid,
        box_amount_remaining,
        remarks,
        entry_type,
        created_by,
        created,
        updated,
       })
    await newData.save();
    const data = await reseller_box_payment_mapping.find();
    return res.json(await reseller_box_payment_mapping.find());

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
export {addresellerboxpayment}
//GET by id
const getresellerboxpaymentbyObId=async(req,res)=>
{
try{

  const data=await reseller_box_payment_mapping.findById(req.params._id)
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
export {getresellerboxpaymentbyObId}

const deleteresellerboxpayment=async(req,res)=>
{
try{

  const deletedocument=await reseller_box_payment_mapping.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await reseller_box_payment_mapping.find()

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
export {deleteresellerboxpayment}




const reseller_box_payment_mappingPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await reseller_box_payment_mapping.findOneAndUpdate({_id:patchId},
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



  export{reseller_box_payment_mappingPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const reseller_box_payment_mappingSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await reseller_box_payment_mapping.find(queryObj);


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

    export {reseller_box_payment_mappingSortable}


