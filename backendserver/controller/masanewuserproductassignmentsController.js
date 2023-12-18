import masa_new_user_product_assignments from "../models/masa_new_user_product_assignments.js";




//Get for masa_new_user_product_assignments

const getNewuserproductassignment=async(req,res)=>
{
try{

  const data=await masa_new_user_product_assignments.find()
  res.json({data});
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
export {getNewuserproductassignment}

//Getby ID for masa_new_user_product_assignments
const getNewuserproductassignmentbyObId=async(req,res)=>
{
try{

  const data=await masa_new_user_product_assignments.findById(req.params._id)
  res.json({data});
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
export {getNewuserproductassignmentbyObId}

//Post for masa_new_user_product_assignments
const addNewuserproductassignment=async(req,res)=>
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

    const newData=new masa_new_user_product_assignments({
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
    const Newuserproductassignmentdata = await masa_new_user_product_assignments.find();
    res.json(await masa_new_user_product_assignments.find());

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
export {addNewuserproductassignment}

//Delete for masa_new_user_product_assignments
const deleteNewuserproductassignment=async(req,res)=>
{
try{

  const deletenewuserproductassignmentn=await masa_new_user_product_assignments.findByIdAndDelete(req.params._id)
  if(!deletenewuserproductassignmentn) res.status(404).send("No item found")

  // return
  const Newuserproductassignmentn =await masa_new_user_product_assignments.find()

  res.status(200).json({

    status:"success",
    length:Newuserproductassignmentn.length,
    data:{

        Newuserproductassignmentn}
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
export {deleteNewuserproductassignment}

// patch for masa_new_user_product_assignments
const NewuserproductassignmentIdPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await masa_new_user_product_assignments.findOneAndUpdate({_id:patchId},
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
export{NewuserproductassignmentIdPatch};