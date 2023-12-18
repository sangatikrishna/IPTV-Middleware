import dateNow from "date-now";
import date from "date-and-time";
import fs from "fs";
import adons_billing_types from "../models/adons_billing_types.js";
 
 
 
const adonsBillingTypesdata =async (req, res) => {
  try {
    const data = await adons_billing_types.find();
 
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
export default  adonsBillingTypesdata;
 
const getAdonsBillingTypesbyObId = async (req, res) => {
  try {
    const data = await adons_billing_types.findById(req.params._id);
    return res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { getAdonsBillingTypesbyObId };
 

// const adonsBillingTypesSchema = Joi.object({
//   id: Joi.number().required(),
//   name: Joi.string().required(),
//   probe_status: Joi.string().required(),
// });

// const addAdonsBillingTypes = async (req, res) => {
//   const {
//     id,
//     name,
//     probe_status,
//   } = req.body;

//   try {
//     // Validate request body against Joi schema
//     const validationResult = adonsBillingTypesSchema.validate({ id, name, probe_status });
    
//     if (validationResult.error) {
//       // If validation fails, return a 400 Bad Request response
//       return res.status(400).json({
//         status: 'fail',
//         message: validationResult.error.details[0].message,
//       });
//     }

//     // If validation passes, proceed with saving the data
//     const newData = new adons_billing_types({
//       id,
//       name,
//       probe_status,
//     });

//     await newData.save();
//     const adonsBillingTypesdata = await adons_billing_types.find();
//     return res.json(await adons_billing_types.find());
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({
//       status: 'fail',
//       message: 'Internal Server Error',
//     });
//   }
// };

// export { addAdonsBillingTypes };

const addAdonsBillingTypes = async (req, res) => {
  const {
    id,
    name,
 
    probe_status,
  } = req.body;
  try {
    const newData = new adons_billing_types({
        id,
        name,
 
      probe_status,
    });
    await newData.save();
    const adonsBillingTypesdata = await adons_billing_types.find();
    return res.json(await adons_billing_types.find());
 
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
export { addAdonsBillingTypes };
 
// const moviesPatch = async (req, res) => {
//   const adonsBillingTypesdata = await adons_billing_types.find();
//   let _id = req.params._id; //string will be converted to Number type
//   let movieToUpdate = await adonsBillingTypesdata.find((el) => el._id === _id);
 
//   if (!movieToUpdate) {
//     res.status(404).json({
//       status: "fail",
//       message: "No movieobject with ID " + _id + " is found",
//     });
//   }
 
//   let index = adonsBillingTypesdata.indexOf(movieToUpdate); // if id is 4 then index =3
//   Object.assign(movieToUpdate, req.body);
//   adonsBillingTypesdata[index] = movieToUpdate;
 
//   res.status(200).json({
//     status: "success",
 
//     data: {
//       movieToUpdate,
//     },
//   });
 
//   res.status(404).json({
//     status: "fail",
//   });
// };
 
// export { moviesPatch };
 
const deleteAdonsBillingTypes = async (req, res) => {
  try {
    const deletedAdonsBillingTypes = await adons_billing_types.findByIdAndDelete(req.params._id);
    if (!deletedAdonsBillingTypes) res.status(404).send("No item found");
 
    // return
    const adonsBillingTypesdata = await adons_billing_types.find();
 
    res.status(200).json({
      status: "success",
      length: adonsBillingTypesdata.length,
      data: {
        adonsBillingTypesdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
 
export { deleteAdonsBillingTypes };
 
 
 
//PATCH API
const adonsbillingtypesPatch = async (req, res) => {
  try {
    const patchId = req.params._id;
 
    const updated = await adons_billing_types.findOneAndUpdate(
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
export { adonsbillingtypesPatch };
