import mongoose from "mongoose";
const OpenSupportTicketsSchema =new mongoose.Schema(
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

const OpenSupportTickets=mongoose.model("LiveTV",OpenSupportTicketsSchema);
export default OpenSupportTickets;