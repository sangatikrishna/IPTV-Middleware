import mongoose from "mongoose";
const masaPlusAppUpdatesSchema=new mongoose.Schema({
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
const masa_plus_app_updates=new mongoose.model("masa_plus_app_updates",masaPlusAppUpdatesSchema);
export default masa_plus_app_updates;