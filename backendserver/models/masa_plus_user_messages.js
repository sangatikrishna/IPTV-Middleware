import mongoose from "mongoose";
const masaPlusUserMessagesSchema=new mongoose.Schema({
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
}

    
})
const masa_plus_user_messages=new mongoose.model("masa_plus_user_messages",masaPlusUserMessagesSchema);
export default masa_plus_user_messages;