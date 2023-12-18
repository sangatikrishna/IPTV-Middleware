import mongoose from "mongoose";
const masanewusermessagesSchema=new mongoose.Schema({
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
user_ids:
{
    type:String
},
start_date:
{
    type:String
},
repeate_interval:
{
    type:String
},
is_active:
{
    type:String
},
created:
{
    type:String
},
modified:
{
    type:String
},
    
},{versionKey: false})
const masa_new_user_messages=new mongoose.model("masa_new_user_messages",masanewusermessagesSchema);
export default masa_new_user_messages;