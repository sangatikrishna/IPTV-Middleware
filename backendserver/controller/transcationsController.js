import transactions from "../models/transactions.js"

//GET
const transactionsdata =async (req, res) => {
    try {
      const data = await transactions.find();
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
  export default transactionsdata;


  //GET by _id
const transactionsbyId = async(req,res)=>
{
try{
  const data=await transactions.findById(req.params._id)
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
export {transactionsbyId};


//POST API
const addtransactions =async(req,res)=>
{
const {  
    id,
    amount,
    transaction_id,
    user_id,
    created,
    is_package
}= req.body;
  try{
    const newData=new transactions({
        id,
        amount,
        transaction_id,
        user_id,
        created,
        is_package
       })
    await newData.save();
    return res.json(await transactions.find());
  }
  catch(err)
  {
    console.log(err.message);
  }
}
export {addtransactions};



//DELETE API
const deletetransactions=async(req,res)=>
{
try{
  const deletetransactions=await transactions.findByIdAndDelete(req.params._id)
  if(!deletetransactions) res.status(404).send("No item found")
  // return
  const transactionsdata =await transactions.find()
  res.status(200).json({
    status:"success",
    length:transactionsdata.length,
    data:{
        transactionsdata}
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
export {deletetransactions};



// patch

const transactionspatch=async(req,res)=>
{
try{
const patchId=req.params._id;
  const updated=await transactions.findOneAndUpdate({_id:patchId},
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
export{transactionspatch};




