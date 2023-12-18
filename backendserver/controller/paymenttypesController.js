
import payment_types from "../models/payment_types.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const payment_typesdata =async (req, res) => {
    try {
      const data = await payment_types.find();

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
  export default  payment_typesdata;



//POST API
const addPayment=async(req,res)=>
{


const {  
    
    id,
   name,
  


   }= req.body;
  try{

    const newData=new payment_types({        
        id,
        name,


       })
    await newData.save();
    const data = await payment_types.find();
    return res.json(await payment_types.find());

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
export {addPayment}
//GET by id
const getPaymentbyObId=async(req,res)=>
{
try{

  const data=await payment_types.findById(req.params._id)
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
export {getPaymentbyObId}

const deletepayment=async(req,res)=>
{
try{

  const deletedocument=await payment_types.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await payment_types.find()

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
export {deletepayment}




const payment_typesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await payment_types.findOneAndUpdate({_id:patchId},
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



  export{payment_typesPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const payment_typesSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await payment_types.find(queryObj);


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

    export {payment_typesSortable}


