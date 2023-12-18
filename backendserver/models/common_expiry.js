import mongoose from "mongoose";
const commonExpirySchema=new mongoose.Schema({
id:{
type:String
},
host:
{
    type:Number
},
username:
{
    type:String
},
password:
{
    type:String
},
status:
{
    type:String
},
message:
{
    type:String
},
exp_date:
{
    type:Number
},
activation_code:
{
    type:String
},
mac_address:
{
    type:String
},
serial_number:
{
    type:String
},
created:
{
    type:String
},

    
})
const common_expiry=new mongoose.model("common_expiry",commonExpirySchema);
export default common_expiry;