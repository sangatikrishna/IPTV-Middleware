
import priority_types from "../models/priority_types.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const priority_typesdata =async (req, res) => {
    try {
      const data = await priority_types.find();

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
  export default  priority_typesdata;



//POST API
const addpriority=async(req,res)=>
{


const {  
    
    id,
    name,
    created,
    modified,
  


   }= req.body;
  try{

    const newData=new priority_types({        
        id,
        name,
        created,
        modified,
       })
    await newData.save();
    const data = await priority_types.find();
    return res.json(await priority_types.find());

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
export {addpriority}
//GET by id
const getprioritybyObId=async(req,res)=>
{
try{

  const data=await priority_types.findById(req.params._id)
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
export {getprioritybyObId}

const deletepriority=async(req,res)=>
{
try{

  const deletedocument=await priority_types.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await priority_types.find()

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
export {deletepriority}




const priority_typesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await priority_types.findOneAndUpdate({_id:patchId},
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



  export{priority_typesPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const priority_typesSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await priority_types.find(queryObj);


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

    export {priority_typesSortable}


