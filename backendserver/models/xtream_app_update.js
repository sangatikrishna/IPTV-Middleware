import mongoose from "mongoose";
const xtreamappupdatesSchema=new mongoose.Schema({
id:{
type:String
},
app_version:
{
    type:String
},
update_url:
{
    type:String
},
description:
{
    type:String
},
created:
{
    type:String
},
updated:
{
    type:String
},

})
const xtream_app_updates=new mongoose.model("xtream_app_updates",xtreamappupdatesSchema);
export default xtream_app_updates;