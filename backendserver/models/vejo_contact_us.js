import mongoose from "mongoose";
const vejo_contact_usSchema=new mongoose.Schema({
    id:{
        type:String
        },
    subject:{
        type:String
    },    
    phone_number:{
        type:String
    },  
    email:{
        type:String
    },  
    message:{
        type:String
    },  
    ip_address:{
        type:String
    },  
    created:{
        type:String
    },  
    
})

const vejo_contact_us=new mongoose.model("vejo_contact_us",vejo_contact_usSchema);
export default vejo_contact_us;