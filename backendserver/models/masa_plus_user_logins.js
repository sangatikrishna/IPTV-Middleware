import mongoose from "mongoose";
const masaPlusUserLoginsSchema=new mongoose.Schema({
id:{
type:String
},
userId:
{
    type:String
},
userIp:
{
    type:String
},
loginDate:
{
    type:String
},
status:
{
    type:String
},
logoutDate:
{
    type:String
},
is_device:
{
    type:String
}

    
})
const masa_plus_user_logins=new mongoose.model("masa_plus_user_logins",masaPlusUserLoginsSchema);
export default masa_plus_user_logins;