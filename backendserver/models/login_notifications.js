import mongoose from "mongoose";
const loginnotificationsSchema=new mongoose.Schema({
id:{
type:String
},
user_id:
{
    type:String
},
created:
{
    type:String
},
is_read:
{
    type:String
},

    
})
const login_notifications=new mongoose.model("login_notifications",loginnotificationsSchema);
export default login_notifications;