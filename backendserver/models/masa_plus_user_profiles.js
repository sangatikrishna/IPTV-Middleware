import mongoose from "mongoose";
const masaPlusUserProfilesSchema=new mongoose.Schema({
id:{
type:String
},
userId:
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
}

    
})
const masa_plus_user_profiles=new mongoose.model("masa_plus_user_profiles",masaPlusUserProfilesSchema);
export default masa_plus_user_profiles;