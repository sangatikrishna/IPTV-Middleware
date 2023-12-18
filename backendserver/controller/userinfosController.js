import userinfos from "../models/userInfos.js";


//GET
const userinfosdata =async (req, res) => {
    try {
      const data = await userinfos.find();
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
  export default userinfosdata;



 //GET by _id
 const userinfosbyId = async(req,res)=>
 {
 try{
   const data=await userinfos.findById(req.params._id)
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
 export {userinfosbyId};




//POST API
const adduserinfos=async(req,res)=>
{
const {
    _id,
    name,
    email,
    password,
    confirmpassword,
}= req.body;
  try{
    const newData=new userinfos({
        _id,
        name,
        email,
        password,
        confirmpassword,
       })
    await newData.save();
    return res.json(await userinfos.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {adduserinfos};




//DELETE API
const deleteuserinfos=async(req,res)=>
{
try{
  const deleteuserinfos=await userinfos.findByIdAndDelete(req.params._id)
  if(!deleteuserinfos) res.status(404).send("No item found")
  // return
  const userinfosdata =await userinfos.find()
  res.status(200).json({
    status:"success",
    length:userinfosdata.length,
    data:{
        userinfosdata}
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
export {deleteuserinfos};



// patch

const userinfospatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await userinfos.findOneAndUpdate({_id:patchId},
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
export{userinfospatch};




// filter

const usernotificationSortable =async (req, res) => {

    let queryStr=JSON.stringify(req.query);
    queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

    const queryObj=JSON.parse(queryStr);
    console.log(queryObj);


    console.log(req.query)
    try{
      const user_notificationSortable= await user_notifications.find(queryObj);


        res.status(200).json({

        status:"success",
        length:user_notificationSortable.length,
        data:{

            user_notificationSortable}
        });
      }

        catch(err)
        {

          res.status(404).json({

            status:"fail",
            message:err.message}
          )}
          }

        export {usernotificationSortable};