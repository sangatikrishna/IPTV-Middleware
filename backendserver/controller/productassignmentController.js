
import product_assignments from "../models/product_assignments.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const product_assignmentsdata =async (req, res) => {
    try {
      const data = await product_assignments.find();

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
  export default  product_assignmentsdata;



//POST API
const addproductassign=async(req,res)=>
{


const {  
    
  id,
  product_id,
  user_id,
  mac_address,
  serial_num,
  created,
  invoice,
  modified,
  


   }= req.body;
  try{

    const newData=new product_assignments({        
      id,
      product_id,
      user_id,
      mac_address,
      serial_num,
      created,
      invoice,
      modified,
       })
    await newData.save();
    const data = await product_assignments.find();
    return res.json(await product_assignments.find());

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
export {addproductassign}
//GET by id
const getproductassignbyObId=async(req,res)=>
{
try{

  const data=await product_assignments.findById(req.params._id)
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
export {getproductassignbyObId}

const deleteproductassign=async(req,res)=>
{
try{

  const deletedocument=await product_assignments.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await product_assignments.find()

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
export {deleteproductassign}




const product_assignmentsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await product_assignments.findOneAndUpdate({_id:patchId},
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



  export{product_assignmentsPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const product_assignmentsSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await product_assignments.find(queryObj);


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

    export {product_assignmentsSortable}


