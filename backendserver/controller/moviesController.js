// import categories from "../models/categoriesSchema.js";
// import videos from "../models/video.js"
import movies from "../models/video.js";
 
import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import categories from "../models/categories.js"
 
const videosdata = async (req, res) => {
  try {
    const videodata = await movies.find();
 
    res.status(200).json({
      // status:"success",
      // length:videodata.length,
 
      videodata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
 
export default videosdata;
 
// const addMovie=async(req,res)=>
// {
 
// try{
//   const videodata = await videos.find();
// const newID=Number(videodata[videodata.length -1].id)
//   const newId=newID + 1;
 
// ;
// console.log(newID);
 
//   const newMovie=Object.assign({id:  newId},req.body);
//   videodata.push(newMovie);
 
//   // fs.writeFile()
//   res.status(201).json({
 
//     status:"success",
//     length:videodata.length,
//     data:{
 
//       newMovie}
//     });
 
//   console.log(req.body)
 
// }
// catch(err)
// {
// console.log(err)
// }
// }
// export {addMovie}
 
//POST API
 
 
 
 
const addMovie=async(req,res)=>
{
 
 
const {
  id,
  kameraUrl,
      kameraUrl_ios,
      kameraUrl_android,
      kameraUrl_setup,
      kameraUrl_linux,
      kameraUrl_dream,
      kameraUrl_pc,
      streamName,
      kameraDurum,
      kameraImage,
      category_id,
      created,
      position,
      modified,
      kameraUrl_secondary,
      kameraUrl_ios_secondary,
      kameraUrl_android_secondary,
      kameraUrl_setup_secondary,
      kameraUrl_linux_secondary,
      kameraUrl_dream_secondary,
      kameraUrl_pc_secondary,
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
      price,
 
   }= req.body;
 
  try{
 
 
 
    const newData=new movies({
      id,
      kameraUrl,
      kameraUrl_ios,
      kameraUrl_android,
      kameraUrl_setup,
      kameraUrl_linux,
      kameraUrl_dream,
      kameraUrl_pc,
      streamName,
      kameraDurum,
      kameraImage,
      category_id,
      created,
      position,
      modified,
      kameraUrl_secondary,
      kameraUrl_ios_secondary,
      kameraUrl_android_secondary,
      kameraUrl_setup_secondary,
      kameraUrl_linux_secondary,
      kameraUrl_dream_secondary,
      kameraUrl_pc_secondary,
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
      price,
 
 
       })
    await newData.save();
    const videodata = await movies.find();
    return res.json(await movies.find());
 
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
export {addMovie}
 
// const addMovie = async (req, res) => {
//   const {
 
 
//     id ,
 
//     kameraUrl,
//     kameraUrl_ios,
//     kameraUrl_android,
//     kameraUrl_setup,
//     kameraUrl_linux,
//     kameraUrl_dream,
//     kameraUrl_pc,
//     streamName,
//     kameraDurum,
//     kameraImage,
//     category_id,
//     created,
//     position,
//     modified,
//     kameraUrl_secondary,
//     kameraUrl_ios_secondary,
//     kameraUrl_android_secondary,
//     kameraUrl_setup_secondary,
//     kameraUrl_linux_secondary,
//     kameraUrl_dream_secondary,
//     kameraUrl_pc_secondary,
//     visible,
//     trailer,
//     description,
//     language,
//     duration,
//     year,
//     studio,
//     producer,
//     director,
//     actors,
//     ratings,
//     price,
//   } = req.body;
//   console.log(req.body);
 
//   const newData = new movies({
//     id,
//     kameraUrl,
//     kameraUrl_ios,
//     kameraUrl_android,
//     kameraUrl_setup,
//     kameraUrl_linux,
//     kameraUrl_dream,
//     kameraUrl_pc,
//     streamName,
//     kameraDurum,
//     kameraImage,
//     category_id,
//     created,
//     position,
//     modified,
//     kameraUrl_secondary,
//     kameraUrl_ios_secondary,
//     kameraUrl_android_secondary,
//     kameraUrl_setup_secondary,
//     kameraUrl_linux_secondary,
//     kameraUrl_dream_secondary,
//     kameraUrl_pc_secondary,
//     visible,
//     trailer,
//     description,
//     language,
//     duration,
//     year,
//     studio,
//     producer,
//     director,
//     actors,
//     ratings,
//     price,
//   });
//   await newData.save();
//   // const videodata = await videos.find();
//   return res.json(await movies.find());
 
//   // res.status(201).json({
 
//   //       status:"success",
//   //       length:newData.length,
//   //       data:{
//   //         newData
//   //         }
//   //       });
// };
// export { addMovie };
 
//GET by id
const getMoviebyObId = async (req, res) => {
  try {
    const data = await movies.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { getMoviebyObId };
 
const deletemovie=async(req,res)=>
{
try{
 
  const deletedocument=await movies.findByIdAndDelete(req.params._id)
  if(!deletedocument) res.status(404).send("No item found")
 
  // return
  const data =await movies.find()
 
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
export { deletemovie };
 
//   const moviesPatch=async(req,res)=>
 
//   {
 
// try{
 
//       const videodata = await videos.find();
//       let id= req.params._id
//       let movieToUpdate= await videodata.find(el=>el._id===_id);
 
//       // if(!movieToUpdate){
 
//       //   return res.status(404).json({
 
//       //     status:"fail",
//       //     message:"No movieobject with ID "+_id+" is found"
//       //   })
//       // }
 
//       let index= videodata.indexOf(movieToUpdate);// if id is 4 then index =3
//       Object.assign(movieToUpdate,req.body);
//       videodata[index] = movieToUpdate;
 
//       res.status(200).json({
 
//         status:"success",
 
//         data:{
 
//           movieToUpdate}
//         });
//       }
 
// catch{
 
//       res.status(404).json({
 
//         status:"fail",
 
//       })
 
//     }
 
//   }
 
const moviesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;
 
    const updated = await movies.findOneAndUpdate({ _id: patchId }, req.body, {
      new: true,
    });
 
    console.log(updated);
    res.json({ updated });
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
};
 
export { moviesPatch };
//localhost:5001/api/moviesortable
 
const now = new Date();
date.format(now, "YYYY/MM/DD HH:mm:ss");
console.log(now);
 
const movieSortable = async (req, res) => {
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
 
  let queryStr = JSON.stringify(req.query);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
 
  const queryObj = JSON.parse(queryStr);
  console.log(queryObj);
 
  console.log(req.query);
  try {
    const moviesortable = await movies.find(queryObj);
 
    res.status(200).json({
      status: "success",
      length: moviesortable.length,
      data: {
        moviesortable,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
 
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
};
 
export { movieSortable };
 