import mongoose from "mongoose";
const xtreamresellersSchema=new mongoose.Schema({


    id:
    {
        type:String
    },
    mac_address:
    {
        type:String
    },
    expiry_date:
    {
        type:String
    },
    streamlist_url:
    {
        type:String
    },
    email:
    {
        type:String
    },
    enddate:
    {
        type:String
    },
    username:
    {
        type:String
    },
    password:
    {
        type:String
    },
    firstname:
    {
        type:String
    },
    lastname:
    {
        type:String
    },
    gender:
    {
        type:String
    },
    created_by:
    {
        type:String
    },
    status:
    {
        type:String
    },
    group_id:
    {
        type:String
    },
    created:
    {
        type:String
    },
    updated:
    {
        type:String
    },

})
const xtream_resellers=new mongoose.model("xtream_resellers",xtreamresellersSchema);
export default xtream_resellers;