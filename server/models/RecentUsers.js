import mongoose from "mongoose";
const RecentUsersSchema =new mongoose.Schema(
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

const RecentUsers =mongoose.model("LiveTV",RecentUsersSchema);
export default RecentUsers;
