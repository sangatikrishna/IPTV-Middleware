import mongoose from "mongoose";
const adminSettingSchema=new mongoose.Schema({
id:{
type:String
},
name:
{
    type:String
},
value:
{
    type:String
}
    
})
const admin_settings=new mongoose.model("admin_settings",adminSettingSchema);
export default admin_settings;