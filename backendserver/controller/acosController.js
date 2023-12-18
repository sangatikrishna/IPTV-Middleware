import acos from "../models/acos.js";
import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";


//get request
const acosdata =async (req, res) => {
    try {
      const acosdata1 = await acos.find();

    res.status(200).json({

      status:"success",
      length:acosdata1.length,
      data:{

        acosdata1}
      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  acosdata;

//get by id request

  const getAcosbyObId = async (req, res) => {
    try {
      const data = await acos.findById(req.params.id);
      return res.json(data);
    } catch (err) {
      console.log(err.message);
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    }
  };
  export { getAcosbyObId };

  //post request
  const addAcos = async (req, res) => {
    const {
      id,
      parent_id,
      model,
      foreign_key,
      alias,
      lft,
      rght,
  
      probe_status,
    } = req.body;
    try {
      const newData = new acos({
      id,
      parent_id,
      model,
      foreign_key,
      alias,
      lft,
      rght,
  
        probe_status,
      });
      await newData.save();
      const acosdata = await acos.find();
      return res.json(await acos.find());
  
      // res.status(201).json({
  
      //       status:"success",
      //       length:newData.length,
      //       data:{
      //         newData
      //         }
      //       });
    } catch (err) {
      console.log(err.message);
    }
  };
  export { addAcos };


  //delete request

  const deleteacos = async (req, res) => {
    try {
      const deletedAcos = await acos.findByIdAndDelete(req.params._id);
      if (!deletedAcos) res.status(404).send("No item found");
  
      // return
      const acosdata = await videos.find();
  
      res.status(200).json({
        status: "success",
        length: acosdata.length,
        data: {
          acosdata,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    }
  };
  
  export { deleteacos };

  //PATCH API
const acosPatch = async (req, res) => {
  try {
    const patchId = req.params._id;
 
    const updated = await acos.findOneAndUpdate(
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
export { acosPatch };

//

//   const moviesPatch=async(req,res)=>


//   {


//       const acosdata = await acos.find();
//       let _id= req.params._id  //string will be converted to Number type
//       let movieToUpdate= await acosdata.find(el=>el._id===_id);

//       if(!movieToUpdate){

//         res.status(404).json({

//           status:"fail",
//           message:"No movieobject with ID "+_id+" is found"
//         })
//       }

//       let index= acosdata.indexOf(movieToUpdate);// if id is 4 then index =3
//       Object.assign(movieToUpdate,req.body);
//       acosdata[index] = movieToUpdate;

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
// //localhost:5001/api/moviesortable

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