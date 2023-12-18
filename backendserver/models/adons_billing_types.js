import mongoose from "mongoose";
const adonsBillingTypesSchema=new mongoose.Schema({
id:{
type:String
},
name:
{
    type:String
},  

    
}, {versionKey:false})
const adons_billing_types=new mongoose.model("adons_billing_types",adonsBillingTypesSchema);
export default adons_billing_types;