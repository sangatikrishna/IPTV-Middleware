import mongoose from "mongoose";
const prioritySchema=new mongoose.Schema({
id:{
type:String
},
name:
{
    type:String
},
created:
{
    type:String
},
modified:
{
    type:String
},

})
const priority_types=new mongoose.model("priority_types",prioritySchema);
export default priority_types;