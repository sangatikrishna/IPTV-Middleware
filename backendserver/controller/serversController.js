
import servers from "../models/servers.js";

import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const serversdata =async (req, res) => {
    try {
      const data = await servers.find();

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
  export default  serversdata;



//POST API
const addserver=async(req,res)=>
{


const {  
    
    id,
    title,
    value,
    response,
    created,
    updated,
  


   }= req.body;
  try{

    const newData=new servers({        
        id,
    title,
    value,
    response,
    created,
    updated,
       })
    await newData.save();
    const data = await servers.find();
    return res.json(await servers.find());

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
export {addserver}
//GET by id
const getserverbyObId=async(req,res)=>
{
try{

  const data=await servers.findById(req.params._id)
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
export {getserverbyObId}

const deleteserver=async(req,res)=>
{
try{

  const deletedocument=await servers.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")

  // return
  const data =await servers.find()

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
export {deleteserver}




const serversPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await servers.findOneAndUpdate({_id:patchId},
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



  export{serversPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const serversSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const data= await servers.find(queryObj);


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

    export {serversSortable}


