import mongoose from "mongoose";
const playlistsaz2Schema=new mongoose.Schema({
id:{
type:String
},
name:{
    type:String
},
url:{
    type:String
},
description:{
    type:String
},

created_date:{
    type:String
},
status:{
    type:String
},
expire_date:{
    type:String
},
},{versionKey:false})
const saz_playlist_2=new mongoose.model("saz_playlist_2",playlistsaz2Schema);
export default saz_playlist_2;
