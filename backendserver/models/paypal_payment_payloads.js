import mongoose from "mongoose";
const paypalpaymentSchema=new mongoose.Schema({
id:{
    type:String
},
pay_module:
{
    type:String
},
pay_box_id:
{
    type:String
},
pay_tran_id:
{
    type:String
},
payer_email:
{
    type:String
},
pay_amnt:
{
    type:String
},
pay_reseller_id:
{
    type:String
},
box_expiry_date:
{
    type:String
},
payment_status:
{
    type:String
},
ipn_status:
{
    type:String
},
receipt_download_count:
{
    type:String
},
created:
{
    type:String
},
updated:
{
    type:String
},

    
})
const paypal_payment_payloads=new mongoose.model("paypal_payment_payloads",paypalpaymentSchema);
export default paypal_payment_payloads;