import mongoose from "mongoose";
const ticketelementsSchema=new mongoose.Schema({
id:{
type:String
},
message:{
    type:String
},
date:{
    type:String
},
ticket_id:{
    type:String
},


})
const ticket_elements=new mongoose.model("ticket_elements",ticketelementsSchema);
export default ticket_elements;
