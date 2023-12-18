
import profiles from "../models/profiles.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const profilesdata =async (req, res) => {
    try {
      const data = await profiles.find();

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
  export default  profilesdata;



//POST API
const addprofile=async(req,res)=>
{


const {  
    
  id,
  user_id,
  address1,
  address2,
  city,
  zipcode,
  country_id,
  phone_work,
  phone_home,
  image,
  region_id,
  


   }= req.body;
  try{

    const newData=new profiles({        
      id,
      user_id,
      address1,
      address2,
      city,
      zipcode,
      country_id,
      phone_work,
      phone_home,
      image,
      region_id,
       })
    await newData.save();
    const data = await profiles.find();
    return res.json(await profiles.find());

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
export {addprofile}
//GET by id
const getprofilebyObId=async(req,res)=>
{
try{

  const data=await profiles.findById(req.params._id)
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
export {getprofilebyObId}

const deleteprofile=async(req,res)=>
{
try{

  const deletedocument=await profiles.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await profiles.find()

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
export {deleteprofile}




const profilesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await profiles.findOneAndUpdate({_id:patchId},
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



  export{profilesPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const profilesSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await profiles.find(queryObj);


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

    export {profilesSortable}


