import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";
import adons_billings from "../models/adons_billings.js";

//GET
const adonsbillingsdata =async (req, res) => {
    try {
      const data = await adons_billings.find();

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
  export default  adonsbillingsdata;


//GET by _id
const adonsBillingsbyObId=async(req,res)=>
{
try{

  const data=await adons_billings.findById(req.params._id)
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
export {adonsBillingsbyObId}


//POST API
const addAdonsBillings=async(req,res)=>
{


const {  
  id,
  billingType_id,
  price,
  adons_package_id
}= req.body;
  try{

    const newData=new adons_billings({
        id,
        billingType_id,
        price,
        adons_package_id})
    await newData.save();
    const adonsbillingsdata = await adons_billings.find();
    return res.json(await adons_billings.find());

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
export {addAdonsBillings}

//DELETE API
const deleteadonsbillings=async(req,res)=>
{
try{

  const deletedAdonsBillings=await adons_billings.findByIdAndDelete(req.params._id)
  if(!deletedAdonsBillings) res.status(404).send("No item found")

  // return
  const adonsbillingsdata =await adons_billings.find()

  res.status(200).json({

    status:"success",
    length:adonsbillingsdata.length,
    data:{

        adonsbillingsdata}
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
export {deleteadonsbillings}


  //PATCH API
  const adonsbillingsPatch = async (req, res) => {
    try {
      const patchId = req.params._id;
   
      const updated = await adons_billings.findOneAndUpdate(
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
  export { adonsbillingsPatch };

// const addMovie=async(req,res)=>
// {

// try{
//   const videodata = await videos.find();

//   const newId=videodata[videodata.length-1].id+1;
//   const newMovie=Object.assign({id:  newId},req.body);
//   videodata.push(newMovie);
//   // fs.writeFile()
//   res.status(200).json({

//     status:"success",
//     length:videodata.length,
//     data:{

//       videodata}
//     });

//   console.log(req.body)


// }
// catch(err)
// {
// console.log(err)
// }
// }
// export {addMovie}

//   const moviesPatch=async(req,res)=>


//   {


//       const videodata = await videos.find();
//       let _id= req.params._id  //string will be converted to Number type
//       let movieToUpdate= await videodata.find(el=>el._id===_id);

//       if(!movieToUpdate){

//         res.status(404).json({

//           status:"fail",
//           message:"No movieobject with ID "+_id+" is found"
//         })
//       }

//       let index= videodata.indexOf(movieToUpdate);// if id is 4 then index =3
//       Object.assign(movieToUpdate,req.body);
//       videodata[index] = movieToUpdate;

//       res.status(200).json({

//         status:"success",

//         data:{

//           movieToUpdate}
//         });





//       res.status(404).json({

//         status:"fail",

//       })

//     }





//   export{moviesPatch}
//localhost:5001/api/moviesortable

// const now = new Date()
// date.format(now, 'YYYY/MM/DD HH:mm:ss');
// console.log(now);




// const movieSortable =async (req, res) => {




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


// let queryStr=JSON.stringify(req.query);
// queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

// const queryObj=JSON.parse(queryStr);
// console.log(queryObj);


// console.log(req.query)
// try{
//   const moviesortable= await categories.find(queryObj);


//     res.status(200).json({

//     status:"success",
//     length:moviesortable.length,
//     data:{

//       moviesortable}
//     });
//   }

//     catch(err)
//     {

//       res.status(404).json({

//         status:"fail",
//         message:err.message}
//       )}



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

    //   }

    // export {movieSortable}