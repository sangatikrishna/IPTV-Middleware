import mongoose from "mongoose";
const serversSchema=new mongoose.Schema({
id:{
    type:String
},
title:
{
    type:String
},
value:
{
    type:String
},
response:
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
const servers=new mongoose.model("servers",serversSchema);
export default servers;