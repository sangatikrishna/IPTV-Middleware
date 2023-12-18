import mongoose from "mongoose";
const productassignmentSchema=new mongoose.Schema({
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
const product_assignments=new mongoose.model("product_assignments",productassignmentSchema);
export default product_assignments;