import mongoose from "mongoose";
const RecentResellersSchema =new mongoose.Schema(
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

const RecentResellers =mongoose.model("LiveTV",RecentResellersSchema);
export default RecentResellers;
