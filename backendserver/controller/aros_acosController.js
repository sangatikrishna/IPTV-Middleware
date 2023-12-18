import aros_acos from "../models/aros_acos.js"
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const aros_acosdata =async (req, res) => {
    try {
      const data = await aros_acos.find();

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
  export default  aros_acosdata;


// // GET by _id
const aros_acosbyObId=async(req,res)=>
{
try{

  const data=await aros_acos.findById(req.params._id)
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
export {aros_acosbyObId}


// //POST API
const addArosacos=async(req,res)=>
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

    const newData=new aros_acos({
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
    return res.json(await aros_acos.find());

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
export {addArosacos}




// // // //DELETE API
const deletearosacos=async(req,res)=>
{
try{

  const deletedArosacos=await aros_acos.findByIdAndDelete(req.params._id)
  if(!deletedArosacos) res.status(404).send("No item found")

  // return
  const aros_acosdata =await aros_acos.find()

  res.status(200).json({

    status:"success",
    length:aros_acosdata.length,
    data:{

        aros_acosdata}
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
export {deletearosacos}


// patch

const arosacosPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await aros_acos.findOneAndUpdate({_id:patchId},
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
export{arosacosPatch};

