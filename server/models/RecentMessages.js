import mongoose from "mongoose";
const RecentMessagesSchema =new mongoose.Schema(
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

const RecentMessages =mongoose.model("LiveTV",RecentAppUpdRecentMessagesSchemaatesSchema);
export default RecentMessages;