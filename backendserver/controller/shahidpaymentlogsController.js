import shahid_payment_logs from "../models/shahidpaymentlogs.js";
// import dateNow from "date-now";
// import date from 'date-and-time';
// import fs from "fs";

//GET
const shahidpaymentlogs =async (req, res) => {
    try {
      const data = await shahid_payment_logs.find();

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
  export default  shahidpaymentlogs;


//GET by _id
const shahidpaymentlogsbyId=async(req,res)=>
{
try{

  const data=await shahid_payment_logs.findById(req.params._id)
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
export {shahidpaymentlogsbyId}


// //POST API
const addshahidpaymentlogs=async(req,res)=>
{


const {  
    id,
    set_id,
    request_hash,
    txn_id,
    order_id,
    amount,
    currency,
    date,
    time,
    txn_fee,
    payment_type,
    card_no,
     hash,
    module,
    box_id,
    created
}= req.body;
  try{

    const newData=new shahid_new_users({
        id,
    set_id,
    request_hash,
    txn_id,
    order_id,
    amount,
    currency,
    date,
    time,
    txn_fee,
    payment_type,
    card_no,
     hash,
    module,
    box_id,
    created })
    await newData.save();
    const shahiddata = await shahid_payment_logs.find();
    return res.json(await shahid_payment_logs.find());

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
export {addshahidpaymentlogs}

// //DELETE API
const deleteshahidpaymentlogs=async(req,res)=>
{
try{

  const deleteshahidpaymentlogs=await shahid_payment_logs.findByIdAndDelete(req.params._id)
  if(!deleteshahidpaymentlogs) res.status(404).send("No item found")

  // return
  const shahidpaymentlogsdata =await shahid_payment_logs.find()

  res.status(200).json({

    status:"success",
    length:shahidpaymentlogsdata.length,
    data:{

        shahidpaymentlogsdata}
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
export {deleteshahidpaymentlogs}

// patch
const Shahidpayment = async (req, res) => {
  try {
    const patchId = req.params._id;

    const updated = await shahid_payment_logs.findOneAndUpdate(
      { _id: patchId },

      req.body,
      { new: true }
    );

    console.log(updated);

    res.json({ updated });
  } catch (err) {
    res.status(500).send(err.message);

    console.log(err.message);
  }
};
export { Shahidpayment };