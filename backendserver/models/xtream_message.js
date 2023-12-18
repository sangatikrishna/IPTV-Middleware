import mongoose from "mongoose";
const xtreammessagesSchema=new mongoose.Schema({

    id:
    {
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
    
    start_time:
    {
        type:String
    },
    
    end_time:
    {
        type:String
    },
    
    status:
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
const xtream_messages=new mongoose.model("xtream_messages",xtreammessagesSchema);
export default xtream_messages;