import mongoose from "mongoose";
const RecentAppUpdatesSchema =new mongoose.Schema(
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

const RecentAppUpdates =mongoose.model("LiveTV",RecentAppUpdatesSchema);
export default RecentAppUpdates;