import aros from "../models/aros.js"
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const arosdata =async (req, res) => {
    try {
      const data = await aros.find();

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
  export default  arosdata;


// // GET by _id
const arosbyObId=async(req,res)=>
{
try{

  const data=await aros.findById(req.params._id)
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
export {arosbyObId}


// // //POST API
const addAros=async(req,res)=>
{
const {  
    id,
    parent_id,
    model,
    foreign_key,
    alias,
    lft,
    rght

}= req.body;
  try{

    const newData=new aros({
      id,
      parent_id,
      model,
      foreign_key,
      alias,
      lft,
      rght
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await aros.find());

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
export {addAros}




// // //DELETE API
const deletearos=async(req,res)=>
{
try{

  const deletedAros=await aros.findByIdAndDelete(req.params._id)
  if(!deletedAros) res.status(404).send("No item found")

  // return
  const arosdata =await aros.find()

  res.status(200).json({

    status:"success",
    length:arosdata.length,
    data:{

        arosdata}
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
export {deletearos}



// // patch

const arosPatch=async(req,res)=>
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
export{arosPatch};

