import mongoose from "mongoose";
const tokensSchema=new mongoose.Schema({
    id:{
        type:String
        },
    name:{
        type:String
    },    
    
})

const tokens=new mongoose.model("tokens",tokensSchema);
export default tokens;