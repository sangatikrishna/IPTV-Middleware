import mongoose from "mongoose";
const Ticket_repliesSchema=new mongoose.Schema({
    id:{
        type:String
        },
    description:{
        type:String
    },    
    ticket_id:{
        type:String
    },
    user_id:{
        type:String
    },
    admin_id:{
        type:String
    },
    created:{
        type:String
    },
})

const ticket_replies=new mongoose.model("ticket_replies",Ticket_repliesSchema);
export default ticket_replies;