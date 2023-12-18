import mongoose from "mongoose";
const liveproductSchema=new mongoose.Schema({
id:{
type:String
},
product_id:
{
    type:String
},
user_id:
{
    type:String
},
mac_address:
{
    type:String
},
serial_num:
{
    type:String
},
created:
{
    type:String
},
invoice:
{
    type:String
},
modified:
{
    type:String
},

    
})
const live_user_product_assignments=new mongoose.model("live_user_product_assignments",liveproductSchema);
export default live_user_product_assignments;