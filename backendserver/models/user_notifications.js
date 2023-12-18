import mongoose from "mongoose";
const user_notificationsSchema=new mongoose.Schema({
            id:{
        type:String
        },
    // amount:{
    //     type:String
    // },    
    reseller_id:{
        type:String
    },
    user_id:{
        type:String
    },
    created:{
        type:String
    },
    status:{
        type:String
    },
})

const user_notifications=new mongoose.model("user_notifications",user_notificationsSchema);
export default user_notifications;