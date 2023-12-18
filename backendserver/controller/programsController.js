
import programs from "../models/programs.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const programsdata =async (req, res) => {
    try {
      const data = await programs.find();

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
  export default  programsdata;



//POST API
const addprogram=async(req,res)=>
{


const {  
    
    id,
        title,
        description,
        is_active,
        start,
        end,
        camera_id,
        created,
        updated,
  


   }= req.body;
  try{

    const newData=new programs({        
        id,
        title,
        description,
        is_active,
        start,
        end,
        camera_id,
        created,
        updated,
       })
    await newData.save();
    const data = await programs.find();
    return res.json(await programs.find());

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
export {addprogram}
//GET by id
const getprogrambyObId=async(req,res)=>
{
try{

  const data=await programs.findById(req.params._id)
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
export {getprogrambyObId}

const deleteprogram=async(req,res)=>
{
try{

  const deletedocument=await programs.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await programs.find()

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
export {deleteprogram}




const programsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await programs.findOneAndUpdate({_id:patchId},
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



  export{programsPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const programsSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await programs.find(queryObj);


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

    export {programsSortable}


