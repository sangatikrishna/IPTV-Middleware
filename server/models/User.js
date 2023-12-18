
import mongoose from "mongoose";
const UsersSchema =new mongoose.Schema(
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

const Users =mongoose.model("LiveTV",UsersSchema);
export default Users;
