import mongoose from "mongoose";
const Saz3mainurlSchema=new mongoose.Schema({
id:{
type:String
},

Name:{
    type:String
    },
URL:{
    type:String
    },
Active_Inactive:{
    type:String
    },

})
const saz3_main_urls=new mongoose.model("saz3_main_urls",Saz3mainurlSchema);
export default saz3_main_urls;