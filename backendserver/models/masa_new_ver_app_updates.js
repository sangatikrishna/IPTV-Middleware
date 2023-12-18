import mongoose from "mongoose";
const masaNewVerAppUpdatesSchema=new mongoose.Schema({
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
const masa_new_ver_app_updates=new mongoose.model("masa_new_ver_app_updates",masaNewVerAppUpdatesSchema);
export default masa_new_ver_app_updates;