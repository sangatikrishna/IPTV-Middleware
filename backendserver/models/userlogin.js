import mongoose from "mongoose";
const userloginSchema=new mongoose.Schema({
    id:{
        type:String
    },
    userId:{
        type:String
        },
    userIp:{
        type:String
    },
    loginDate:{
        type:String
    },  
    status:{
        type:String
    },     
    logoutDate:{
        type:String
    },
    is_device:{
        type:String
    }
    
})

const userlogin=new mongoose.model("userlogin",userloginSchema);
export default userlogin;