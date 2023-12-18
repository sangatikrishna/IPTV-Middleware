import mongoose from "mongoose";
const Demoplaylist2Schema=new mongoose.Schema({
id:
{
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
url:
{
    type:String
},
start_date:
{
    type:String
},
expired_data:
{
    type:String
},

}, {versionKey: false})
const demo_playlist2=new mongoose.model("demo_playlist2",Demoplaylist2Schema);
export default demo_playlist2;