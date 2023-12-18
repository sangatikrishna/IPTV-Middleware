import mongoose from "mongoose";
const masanewuserproductassiginSchema=new mongoose.Schema({
id:{
type:String
},
product_id:
{
    type:String
},
user_ids:
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
const masa_new_user_product_assignments=new mongoose.model("masa_new_user_product_assignments",masanewuserproductassiginSchema);
export default masa_new_user_product_assignments;