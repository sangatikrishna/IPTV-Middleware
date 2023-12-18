import masa_plus_users from "../models/masa_plus_users.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const masa_plus_usersdata =async (req, res) => {
    try {
      const data = await masa_plus_users.find();

    res.status(200).json({
      // status:"success",
      // length:videodata.length,

      data

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  masa_plus_usersdata;


// // // GET by _id
const masa_plus_usersbyObId=async(req,res)=>
{
try{

  const data=await masa_plus_users.findById(req.params._id)
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
export {masa_plus_usersbyObId}


// // //POST API
const addMasa_plus_users=async(req,res)=>
{
const {  
    id,
    aro_id,
    aco_id,
    _create,
    _read,
    _update,
    _delete

}= req.body;
  try{

    const newData=new masa_plus_users({
        id,
        aro_id,
        aco_id,
        _create,
        _read,
        _update,
        _delete
    
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await masa_plus_users.find());

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
export {addMasa_plus_users}




 // //DELETE API
const deletemasa_plus_users=async(req,res)=>
{
try{

  const deleteMasa_plus_users=await masa_plus_users.findByIdAndDelete(req.params._id)
  if(!deleteMasa_plus_users) res.status(404).send("No item found")

  // return
  const masa_plus_usersdata =await masa_plus_users.find()

  res.status(200).json({

    status:"success",
    length:masa_plus_usersdata.length,
    data:{

      masa_plus_usersdata}
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
export {deletemasa_plus_users}


// // patch

const masa_plus_usersPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await masa_plus_users.findOneAndUpdate({_id:patchId},
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
export{masa_plus_usersPatch};

