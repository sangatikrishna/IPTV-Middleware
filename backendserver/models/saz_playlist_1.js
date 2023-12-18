import mongoose from "mongoose";
const playlistsaz1Schema=new mongoose.Schema({
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
const saz_playlist_1=new mongoose.model("saz_playlist_1",playlistsaz1Schema);
export default saz_playlist_1;
