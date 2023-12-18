import saz_playlist_3 from "../models/saz_playlist_3.js";

//GET
const PlayListSaz3data =async (req, res) => {
    try {
      const data = await saz_playlist_3.find();
    res.status(200).json({
      data
      });
    } catch (error) {
      res.status(404).json({
        status:"fail",
        message:error.message
      })
    }
  }
  export default PlayListSaz3data;



 //GET by _id
 const PlayListSaz3byId = async(req,res)=>
 {
 try{
   const data=await saz_playlist_3.findById(req.params._id)
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
 export {PlayListSaz3byId};
 



//POST API
const addPlayListSaz3=async(req,res)=>
{
const {  
  id,
  name,
  url,
  description,
  created_date,
  status,
  expire_date,
    
}= req.body;
  try{
    const newData=new saz_playlist_3({
      id,
      name,
      url,
      description,
      created_date,
      status,
      expire_date,
       })
    await newData.save();
    return res.json(await saz_playlist_3.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addPlayListSaz3}; 




//DELETE API
const deletePlayListSaz3=async(req,res)=>
{
try{
  const deletePlayListSaz3=await saz_playlist_3.findByIdAndDelete(req.params._id)
  if(!deletePlayListSaz3) res.status(404).send("No item found")
  // return
  const Playlistsaz3data =await saz_playlist_3.find()
  res.status(200).json({
    status:"success",
    length:Playlistsaz3data.length,
    data:{
        Playlistsaz3data}
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
export {deletePlayListSaz3};



// patch

const PlayListSaz3patch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await saz_playlist_3.findOneAndUpdate({_id:patchId},
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
export{PlayListSaz3patch};




// filter

// const usernotificationSortable =async (req, res) => {
    
//     let queryStr=JSON.stringify(req.query);
//     queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);
    
//     const queryObj=JSON.parse(queryStr);
//     console.log(queryObj);
    
    
//     console.log(req.query)
//     try{
//       const user_notificationSortable= await user_notifications.find(queryObj);
    
    
//         res.status(200).json({
    
//         status:"success",
//         length:user_notificationSortable.length,
//         data:{
    
//             user_notificationSortable}
//         });
//       }
    
//         catch(err)
//         {
    
//           res.status(404).json({
    
//             status:"fail",
//             message:err.message}
//           )}
//           }
    
//         export {usernotificationSortable};