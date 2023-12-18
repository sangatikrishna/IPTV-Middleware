
import dashboard_banners from "../models/dashboard_banners.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const dashboard_bannersdata =async (req, res) => {
    try {
      const data = await dashboard_banners.find();

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
  export default  dashboard_bannersdata;



//POST API
const addBanner=async(req,res)=>
{


const {  
    
id,
title,
status,
image,
position,
created,
updated,
  


   }= req.body;
  try{

    const newData=new dashboard_banners({        
        id,
        title,
        status,
        image,
        position,
        created,
        updated,


       })
    await newData.save();
    const data = await dashboard_banners.find();
    return res.json(await dashboard_banners.find());

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
export {addBanner}
//GET by id
const getBannerbyObId=async(req,res)=>
{
try{

  const data=await dashboard_banners.findById(req.params._id)
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
export {getBannerbyObId}

const deltebanner=async(req,res)=>
{
try{

  const deletedocument=await dashboard_banners.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await dashboard_banners.find()

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
export {deltebanner}




const dashboard_bannersPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await dashboard_banners.findOneAndUpdate({_id:patchId},
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



  export{dashboard_bannersPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const dashboard_bannersSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await dashboard_banners.find(queryObj);


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

    export {dashboard_bannersSortable}


