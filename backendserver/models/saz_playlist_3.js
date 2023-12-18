import mongoose from "mongoose";
const playlistsaz3Schema=new mongoose.Schema({
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
const saz_playlist_3=new mongoose.model("saz_playlist_3",playlistsaz3Schema);
export default saz_playlist_3;
