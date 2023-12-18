import mongoose from "mongoose";
const Saz1MainURLSchema=new mongoose.Schema({
id:{
type:String
},
URL:
{
    type:String
},
Active_Inactive:
{
    type:String
},
Action:
{
    type:String
},



    
})
const Saz1_Main_URL=new mongoose.model("Saz1_Main_URL",Saz1MainURLSchema);
export default Saz1_Main_URL;