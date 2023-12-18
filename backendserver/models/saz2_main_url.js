import mongoose from "mongoose";
const Saz2MainUrlSchema=new mongoose.Schema({
    id:{
        type:String
    },
    Name:
    {
        type:String
    },
    URL:
    {
        type:String
    },
    Active:
    {
        type:String
    },  




    
})
const Saz2_Main_URL=new mongoose.model("Saz2_Main_URL",Saz2MainUrlSchema);
export default Saz2_Main_URL;