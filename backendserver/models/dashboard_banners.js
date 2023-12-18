import mongoose from "mongoose";
const dashboardSchema=new mongoose.Schema({
id:{
type:String
},
title:
{
    type:String
},
status:
{
    type:String
},
image:
{
    type:String
},
position:
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

    
},{ versionKey: false })
const dashboard_banners=new mongoose.model("dashboard_banners",dashboardSchema);
export default dashboard_banners;