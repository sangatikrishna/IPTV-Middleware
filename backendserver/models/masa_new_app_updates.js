import mongoose from "mongoose";
const masanewAppUpdatesSchema=new mongoose.Schema({
id:{
type:String
},
version:
{
    type:String
},
url:
{
    type:String
},
description:
{
    type:String
},
products_id:
{
    type:String
},
created_date:
{
    type:String
}

    
})
const masa_new_app_updates=new mongoose.model("masa_new_app_updates",masanewAppUpdatesSchema);
export default masa_new_app_updates;