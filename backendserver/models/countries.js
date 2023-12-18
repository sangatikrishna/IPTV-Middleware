import mongoose from "mongoose";
const countriesSchema=new mongoose.Schema({
id:{
type:String
},
iso:
{
    type:String
},
iso3:
{
    type:String
},
fips:
{
    type:String
},
name:
{
    type:String
},
continent:
{
    type:String
},
currency_code:
{
    type:String
},
currency_name:
{
    type:String
},
phone_prefix:
{
    type:String
},
postal_code:
{
    type:String
},
languages:
{
    type:String
},
geonameid:
{
    type:String
},
region_id:
{
    type:String
},

    
})
const countries=new mongoose.model("countries",countriesSchema);
export default countries;