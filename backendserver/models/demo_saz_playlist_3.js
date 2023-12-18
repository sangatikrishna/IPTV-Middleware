import mongoose from "mongoose";
const demo_saz_playlist_3Schema=new mongoose.Schema({
id:
{
    type:String
},
name:
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
created_date:
{
    type:String
},
expired_data:
{
    type:String
},
status:
{
    type:String
}

}, {versionKey: false})
const demo_saz_playlist_3=new mongoose.model("demo_saz_playlist_3",demo_saz_playlist_3Schema);
export default demo_saz_playlist_3;