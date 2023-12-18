import mongoose from "mongoose";
const shahidpaymentlogsSchema=new mongoose.Schema({
id:{
type:String
},
set_id:
{
    type:String
},
request_hash:
{
    type:String
},
txn_id:
{
    type:String
},
order_id:
{
    type:String
},

amount:
{
    type:String
},
currency:
{
    type:String
},
date:
{
    type:String
},
time:
{
    type:String
},
txn_fee:
{
    type:String
},
payment_type:
{
    type:String
},
card_no:
{
    type:String
},
hash:
{
    type:String
},
module:
{
    type:String
},
box_id:
{
    type:String
},
created:
{
    type:String
}


   
})
const shahid_payment_logs=new mongoose.model("shahid_payment_logs",shahidpaymentlogsSchema);
export default shahid_payment_logs;