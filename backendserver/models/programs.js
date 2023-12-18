import mongoose from "mongoose";
const programsSchema=new mongoose.Schema({
id:{
    type:String
},
title:
{
    type:String
},
description:
{
    type:String
},
is_active:
{
    type:String
},
start:
{
    type:String
},
end:
{
    type:String
},
camera_id:
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
const programs=new mongoose.model("programs",programsSchema);
export default programs;