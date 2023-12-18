import mongoose from "mongoose";
const demoplaylistsaz3Schema=new mongoose.Schema({
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
const demo_playlist_saz3=new mongoose.model("demo_playlist_saz3",demoplaylistsaz3Schema);
export default demo_playlist_saz3;