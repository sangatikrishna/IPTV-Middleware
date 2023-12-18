import mongoose from "mongoose";
const swedenresellerboxpaymentmappingSchema=new mongoose.Schema({
id:{
type:String
},
reseller_id:{
    type:String
},
is_main:{
    type:String
},
paying_currency:{
    type:String
},
box_type:{
    type:String
},
total_amount_alloted:{
    type:String
},
box_unit_price:{
    type:String
},
box_extra_charges:{
    type:String
},
total_box_assigned:{
    type:String
},
box_amount_paid:{
    type:String
},
box_amount_remaining:{
    type:String
},
remarks:{
    type:String
},
entry_type:{
    type:String
},
created_by:{
    type:String
},
created:{
    type:String
},
updated:{
    type:String
},

})
const sweden_reseller_box_payment_mapping=new mongoose.model("sweden_reseller_box_payment_mapping",
swedenresellerboxpaymentmappingSchema);
export default sweden_reseller_box_payment_mapping;
