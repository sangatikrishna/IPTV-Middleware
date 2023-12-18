import mongoose from "mongoose";
const shahidnewusermessagesSchema=new mongoose.Schema({
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
const shahid_new_user_messages=new mongoose.model("shahid_new_user_messages",shahidnewusermessagesSchema);
export default shahid_new_user_messages;