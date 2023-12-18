import mongoose from "mongoose";
const statesSchema=new mongoose.Schema({
id:{
type:String
},
name:{
    type:String
},
country_id:{
    type:String
},
is_active:{
    type:String
},
created:{
    type:String,
},
modified:{
    type:String
},

})
const states=new mongoose.model("states",statesSchema);
export default states;
