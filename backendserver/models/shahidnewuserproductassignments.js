import mongoose from "mongoose";
const shahidnewuserproductassignmentsSchema=new mongoose.Schema({
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
is_active:
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
}
    
})
const shahid_new_user_product_assignments=new mongoose.model("shahid_new_user_product_assignments",shahidnewuserproductassignmentsSchema);
export default shahid_new_user_product_assignments;