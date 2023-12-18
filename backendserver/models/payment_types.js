import mongoose from "mongoose";
const paymenttypesSchema=new mongoose.Schema({
id:{
type:String
},
name:
{
    type:String
},

})
const payment_types=new mongoose.model("payment_types",paymenttypesSchema);
export default payment_types;