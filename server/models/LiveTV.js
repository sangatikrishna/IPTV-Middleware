import mongoose from "mongoose";
const LiveTVSchema =new mongoose.Schema(
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

const LiveTV =mongoose.model("LiveTV",LiveTVSchema);
export default LiveTV;
// module.exports = mongoose.model('Data', LiveTVSchema)
