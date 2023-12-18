import mongoose from "mongoose";
const AMusermessagesSchema=new mongoose.Schema({
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
user_ids:
{
    type:String
},
start_date:
{
    type:String
},
repeat_interval:
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

}, {versionKey: false})
const am_user_messages=new mongoose.model("am_user_messages",AMusermessagesSchema);
export default am_user_messages;