import mongoose from "mongoose";
const acosSchema=new mongoose.Schema({
id:{
type:String
},
parent_id:
{
    type:String
},
model:
{
    type:String
},
foreign_key:
{
    type:String
},
alias:
{
    type:String
},
lft:
{
    type:String
},
rght:
{
    type:String
}

    
})
const acos=new mongoose.model("acos",acosSchema);
export default acos;