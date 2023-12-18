import mods from "../models/mods.js";

// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const modsdata =async (req, res) => {
    try {
      const data = await mods.find();

    res.status(200).json({
      status:"success",
      length:data.length,

      data

    });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  modsdata;


 // GET by _id
const modsbyObId=async(req,res)=>
{
try{

  const data=await mods.findById(req.params._id)
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
export {modsbyObId}


//POST API
const addMods=async(req,res)=>
{
const {  
    id,
    kameraUrl,
    streamName,
    kameraDurum,
    kameraImage,
    category_id,
    created,
    position,
    modified,
    kameraUrl_secondary,
    visible,
    trailer,
    description,
    language,
    duration,
    year,
    studio,
    producer,
    director,
    actors,
    ratings,
    price

}= req.body;
  try{

    const newData=new mods({
        id,
        kameraUrl,
        streamName,
        kameraDurum,
        kameraImage,
        category_id,
        created,
        position,
        modified,
        kameraUrl_secondary,
        visible,
        trailer,
        description,
        language,
        duration,
        year,
        studio,
        producer,
        director,
        actors,
        ratings,
        price
       })
    await newData.save();
    // const videodata = await adons_packages.find();
    return res.json(await mods.find());

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
export {addMods}




  //DELETE API
const deletemods=async(req,res)=>
{
try{

  const deleteMods=await mods.findByIdAndDelete(req.params._id)
  if(!deleteMods) res.status(404).send("No item found")

  // return
  const modsdata =await mods.find()

  res.status(200).json({

    status:"success",
    length:modsdata.length,
    data:{

        modsdata}
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
export {deletemods}


 // patch

const  modsPatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await mods.findOneAndUpdate({_id:patchId},
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
export{modsPatch};



// const now = new Date()
// date.format(now, 'YYYY/MM/DD HH:mm:ss');
// console.log(now);
//filter


const modsSortable =async (req, res) => {




    // Define a regex pattern for the desired date-time format
    // const dateTimePattern =date.format(now, 'YYYY/MM/DD HH:mm:ss');
    
    // // Use the .find() method with regex to filter the data
    // const data=categories.find({ created: { $regex: dateTimePattern } })
    
    
    //   // Events with timestamps matching the regex pattern
    //   console.log("Events with matching timestamps:", data);
    // const startDate = new Date('2015-07-28T14:42:16.000Z'); // Start date
    // const endDate = new Date('2023-12-31T23:59:59Z'); // End date
    
    // let query= {created: {
    //   $gte: startDate,
    //   $lte: endDate}}
    
    
    // const sorted=categories.find(query)
    
    // res.status(200).json({
    
    //       status:"success",
    //       length:sorted.length,
    //       data:{
    
    //         sorted}
    //       });
    
    
    let queryStr=JSON.stringify(req.query);
    queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);
    
    const queryObj=JSON.parse(queryStr);
    console.log(queryObj);
    
    
    console.log(req.query)
    try{
      const modssortable= await mods.find(queryObj);
    
    
        res.status(200).json({
    
        status:"success",
        length:modssortable.length,
        data:{
    
          modssortable}
        });
      }
    
        catch(err)
        {
    
          res.status(404).json({
    
            status:"fail",
            message:err.message}
          )}
    
    
    
    // if (categories.created) {
    //   const date = created
    //   const dateRange = categories.created.slice(0, -1); // strip the "d" from "7d"
    //   date.setDate( date- dateRange);
    //   req.query.start = { $lte: `2015-07-28T14:42:16.000Z` };
    //   console.log(req.query);
    // }
    
    
    // try{
    //   const moviesortable= await categories.find({$expr:
    //     {
    
    //       $and: [
    //     {
    //       "$eq": [{"$month": "$created"},1]
    //     },
    //     {
    //       "$eq": [{"$year": "$created"},2012]
    
    //     },
    
    //   ]},
    
    // });
    
    
    //     res.status(200).json({
    
    //     status:"success",
    //     length:moviesortable.length,
    //     data:{
    
    //       moviesortable}
    //     });
    //   }
    
        // catch(err)
        // {
    
        //   res.status(404).json({
    
        //     status:"fail",
        //     message:err.message}
        //   )}
    
          }
    
        export {modsSortable}
