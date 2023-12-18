
import countries from "../models/countries.js";
// import dateNow from "date-now";
import date from 'date-and-time';
import fs from "fs";

const countriesdata =async (req, res) => {
    try {
      const countrydata = await countries.find();

    res.status(200).json({
      // status:"success",
      // length:countrydata.length,

      countrydata

      });

    } catch (error) {


      res.status(404).json({

        status:"fail",
        message:error.message
      })
    }
  }
  export default  countriesdata;



//POST API
const addCountry=async(req,res)=>
{


const {  
    
    id,
    iso,
    iso3,
    fips,
    name,
    continent,
    currency_code,
    currency_name,
    phone_prefix,
    postal_code,
    languages,
    geonameid,
    region_id,
  


   }= req.body;
  try{

    const newData=new countries({        
id,
iso,
iso3,
fips,
name,
continent,
currency_code,
currency_name,
phone_prefix,
postal_code,
languages,
geonameid,
region_id,


       })
    await newData.save();
    const countrydata = await countries.find();
    return res.json(await countries.find());

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
export {addCountry}
//GET by id
const getCountrybyObId=async(req,res)=>
{
try{

  const data=await countries.findById(req.params._id)
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
export {getCountrybyObId}

const deletecountry=async(req,res)=>
{
try{

  const deleteexpiry=await countries.findByIdAndDelete(req.params._id)
  if(!deleteexpiry) res.status(404).send("No item found")

  // return
  const countrydata =await countries.find()

  res.status(200).json({

    status:"success",
    length:logindata.length,
    data:{

      logindata}
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
export {deletecountry}




const countriesPatch=async(req,res)=>
{
try{
const patchId=req.params._id;

  const updated=await countries.findOneAndUpdate({_id:patchId},
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



  export{countriesPatch}
//localhost:5001/api/common_loginortable

const now = new Date()
date.format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(now);




const countriesSortable =async (req, res) => {

let queryStr=JSON.stringify(req.query);
queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match)=>`$${match}`);

const queryObj=JSON.parse(queryStr);
console.log(queryObj);


console.log(req.query)
try{
  const countriesSortable= await countries.find(queryObj);


    res.status(200).json({

    status:"success",
    length:countriesSortable.length,
    data:{

        countriesSortable}
    });
  }

    catch(err)
    {

      res.status(404).json({

        status:"fail",
        message:err.message}
      )}





      }

    export {countriesSortable}


