import mongoose from "mongoose";
const liveprofilesSchema=new mongoose.Schema({
id:{
type:String
},
user_id:
{
    type:String
},
address1:
{
    type:String
},
address2:
{
    type:String
},
city:
{
    type:String
},
zipcode:
{
    type:String
},
country_id:
{
    type:String
},
phone_work:
{
    type:String
},
phone_home:
{
    type:String
},
image:
{
    type:String
}, 
region_id:
{
    type:String
},

})
const live_user_profiles=new mongoose.model("live_user_profiles",liveprofilesSchema);
export default live_user_profiles;