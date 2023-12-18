import mongoose from "mongoose";
const RecentChannelsSchema =new mongoose.Schema(
    {

    image:Buffer,
    name:String,
    category:String,

    dateAdded:Date,
    activeStatus:Boolean,
    actions:String,
},
    {timestamps:true},
);

const RecentChannels =mongoose.model("LiveTV",RecentChannelsSchema);
export default RecentChannels;