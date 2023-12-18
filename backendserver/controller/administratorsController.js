import administrators from "../models/administrators.js";
import date from "date-and-time";
import fs from "fs";
import internal from "stream";

//GET API
const administratorsdata = async (req, res) => {
  try {
    const data = await administrators.find();

    res.status(200).json({
      // status:"success",
      // length:countrydata.length,

      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
export default administratorsdata;


//GET by id
const getAdministratorsbyObId = async (req, res) => {
    try {
      const data = await administrators.findById(req.params._id);
      return res.json(data);
    } catch (err) {
      console.log(err.message);
      res.status(404).json({
        status: "fail",
        message: err.message,
      });
    }
  };
  export { getAdministratorsbyObId };
  
//POST API
const addAdministrators = async (req, res) => {
  const {
    id,
    name,
    surname,
    nick,
    mail,
    password,
    enddate,
    createdby,
    billing_id,
    device_id,
    is_multiple_session,
    is_loggedin,
    status,
    group_id,
    created,
    modified,
    payment_settings_id,
    category_password,
    user_limit,
    number_of_login,
    is_deleted,
    is_trail,
    is_paid,
    is_cdn,
    reseller_module_type,
    reseller_box_price,
    profile_image,
    session_id,
    renewal_date,
  } = req.body;
  try {
    const newData = new administrators({
        id,
        name,
        surname,
        nick,
        mail,
        password,
        enddate,
        createdby,
        billing_id,
        device_id,
        is_multiple_session,
        is_loggedin,
        status,
        group_id,
        created,
        modified,
        payment_settings_id,
        category_password,
        user_limit,
        number_of_login,
        is_deleted,
        is_trail,
        is_paid,
        is_cdn,
        reseller_module_type,
        reseller_box_price,
        profile_image,
        session_id,
        renewal_date,
    });
    await newData.save();
    // const countrydata = await administrators.find();
    return res.json(await administrators.find());

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
export { addAdministrators };

//PATCH API
const administratorsPatch = async (req, res) => {
    try {
      const patchId = req.params._id;
  
      const updated = await administrators.findOneAndUpdate(
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
  export { administratorsPatch };

//DELETE API
const deleteadministrators = async (req, res) => {
  try {
    const deleteexpiry = await administrators.findByIdAndDelete(req.params._id);
    if (!deleteexpiry) res.status(404).send("No item found");

    // return
    const administratorsdata = await administrators.find();

    res.status(200).json({
      status: "success",
      length: administratorsdata.length,
      data: {
        administratorsdata,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
export { deleteadministrators };



//localhost:5001/api/common_loginortable

// const now = new Date()
// date.format(now, 'YYYY/MM/DD HH:mm:ss');
// console.log(now);

// const countriesSortable =async (req, res) => {

// let queryStr=JSON.stringify(req.query);
// queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

// const queryObj=JSON.parse(queryStr);
// console.log(queryObj);

// console.log(req.query)
// try{
//   const countriesSortable= await countries.find(queryObj);

//     res.status(200).json({

//     status:"success",
//     length:countriesSortable.length,
//     data:{

//         countriesSortable}
//     });
//   }

//     catch(err)
//     {

//       res.status(404).json({

//         status:"fail",
//         message:err.message}
//       )}

//       }

//     export {countriesSortable}
