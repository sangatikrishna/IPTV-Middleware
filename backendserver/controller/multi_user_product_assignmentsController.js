import multi_user_product_assignments from "../models/multi_user_product_assignments.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const multi_user_product_assignmentsdata =async (req, res) => {
    try {
      const data = await multi_user_product_assignments.find();

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
  export default  multi_user_product_assignmentsdata;


// // GET by _id
const multi_user_product_assignmentsbyObId=async(req,res)=>
{
try{

  const data=await multi_user_product_assignments.findById(req.params._id)
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
export {multi_user_product_assignmentsbyObId}


// //POST API
const addMulti_user_product_assignments=async(req,res)=>
{
const {  
    id,
    product_id,
    user_id,
    mac_address,
    serial_num,
    created,
    invoice,
    modified

}= req.body;
  try{

    const newData=new messages({
        id,
    product_id,
    user_id,
    mac_address,
    serial_num,
    created,
    invoice,
    modified

       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await multi_user_product_assignments.find());

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
export {addMulti_user_product_assignments}



//   //DELETE API
const deletemulti_user_product_assignments=async(req,res)=>
{
try{

  const deletedMulti_user_product_assignments=await multi_user_product_assignments.findByIdAndDelete(req.params._id)
  if(!deletedMulti_user_product_assignments) res.status(404).send("No item found")

  // return
  const multi_user_product_assignmentsdata =await multi_user_product_assignments.find()

  res.status(200).json({

    status:"success",
    length:multi_user_product_assignmentsdata.length,
    data:{

        multi_user_product_assignmentsdata}
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
export {deletemulti_user_product_assignments}


//  // patch

const  multi_user_product_assignmentsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await multi_user_product_assignments.findOneAndUpdate({_id:patchId},
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
export{multi_user_product_assignmentsPatch};

