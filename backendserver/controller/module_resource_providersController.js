import module_resource_providers from "../models/module_resource_providers.js"
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const moduleresourceprovidersdata =async (req, res) => {
    try {
      const data = await module_resource_providers.find();

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
  export default  moduleresourceprovidersdata;


// // // GET by _id
const  module_resource_providersbyObId=async(req,res)=>
{
try{

  const data=await  module_resource_providers.findById(req.params._id)
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
export { module_resource_providersbyObId}



 //POST API
const addmodule_resource_providers=async(req,res)=>
{
const {  
    id,
    name,
    value,
    created,
    modified

}= req.body;
  try{

    const newData=new aros({
        id,
        name,
        value,
        created,
        modified
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await module_resource_providers.find());

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
export {addmodule_resource_providers}




 //DELETE API
const deletemodule_resource_providers=async(req,res)=>
{
try{

  const deletedModule_resource_providers=await aros.findByIdAndDelete(req.params._id)
  if(!deletedModule_resource_providers) res.status(404).send("No item found")

  // return
  const module_resource_providersdata =await module_resource_providers.find()

  res.status(200).json({

    status:"success",
    length:module_resource_providersdata.length,
    data:{

        module_resource_providersdata}
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
export {deletemodule_resource_providers}



 // patch

const module_resource_providersPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await aros.findOneAndUpdate({_id:patchId},
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
export{module_resource_providersPatch};

