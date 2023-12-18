import mongoose from "mongoose";
const adonsBillingsSchema=new mongoose.Schema({
id:{
type:String
},
billingType_id:
{
    type:String
},
price:
{
    type:String
},
adons_package_id:
{
    type:String
},


    
})
const adons_billings=new mongoose.model("adons_billings",adonsBillingsSchema);
export default adons_billings;