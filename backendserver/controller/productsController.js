
import products from "../models/products.js";


// import { v4 as uuidv4 } from 'uuid';

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const productsdata =async (req, res) => {
    try {
      const data = await products.find();

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
  export default  productsdata;



//POST API
const addproduct=async(req,res)=>
{


const {

    id,
    name,
    quantity,
    model,
    purchase_price,
    manufacturer,
    sale_price,
    date,
    available,
    description,



   }= req.body;
  try{

    const newData=new products({
        id,
        name,
        quantity,
        model,
        purchase_price,
        manufacturer,
        sale_price,
        date,
        available,
        description,
       })
    await newData.save();
    const data = await products.find();
    return res.json(await products.find());

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
export {addproduct}
//GET by id
const getproductbyObId=async(req,res)=>
{
try{

  const data=await products.findById(req.params._id)
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
export {getproductbyObId}

const deleteproduct=async(req,res)=>
{
try{

  const deletedocument=await products.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await products.find()

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
export {deleteproduct}




const productsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await products.findOneAndUpdate({_id:patchId},
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



  export{productsPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const productsSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await products.find(queryObj);


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

    export {productsSortable}


