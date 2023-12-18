import mongoose from "mongoose";
const ticketnotificationsSchema=new mongoose.Schema({
id:{
type:String
},
user_id:{
    type:String
},
ticket_id:{
    type:String
},
ticket_reply_id:{
    type:String
},
is_read:{
    type:String
},
description:{
    type:String
},
created:{
    type:String
},


})
const ticket_notifications=new mongoose.model("ticket_notifications",ticketnotificationsSchema);
export default ticket_notifications;
