import masa_renewal_activation_codes from "../models/masa_renewal_activation_codes.js"
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const masa_renewal_activation_codesdata =async (req, res) => {
    try {
      const data = await masa_renewal_activation_codes.find();

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
  export default  masa_renewal_activation_codesdata;


 // GET by _id
const masa_renewal_activation_codesbyObId=async(req,res)=>
{
try{

  const data=await masa_renewal_activation_codes.findById(req.params._id)
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
export {masa_renewal_activation_codesbyObId}


 //POST API
const addMasa_renewal_activation_codes=async(req,res)=>
{
const {  
    id,
    value,
    is_used,
    reseller_id,
    module,
    used_by,
    created,
    updated

}= req.body;
  try{

    const newData=new masa_renewal_activation_codes({
        id,
        value,
        is_used,
        reseller_id,
        module,
        used_by,
        created,
        updated
    
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await masa_renewal_activation_codes.find());

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
export {addMasa_renewal_activation_codes}




 //DELETE API
const deletemasa_renewal_activation_codes=async(req,res)=>
{
try{

  const deletedMasa_renewal_activation_codes=await masa_renewal_activation_codes.findByIdAndDelete(req.params._id)
  if(!deletedMasa_renewal_activation_codes) res.status(404).send("No item found")

  // return
  const masa_renewal_activation_codesdata =await masa_renewal_activation_codes.find()

  res.status(200).json({

    status:"success",
    length:masa_renewal_activation_codesdata.length,
    data:{

        masa_renewal_activation_codesdata}
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
export {deletemasa_renewal_activation_codes}


// // patch

const masa_renewal_activation_codesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await masa_renewal_activation_codes.findOneAndUpdate({_id:patchId},
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
export{masa_renewal_activation_codesPatch};

