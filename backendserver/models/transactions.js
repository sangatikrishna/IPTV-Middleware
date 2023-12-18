import mongoose from "mongoose";
const transactionsSchema=new mongoose.Schema({
    id:{
        type:String
        },
    amount:{
        type:String
    },    
    transactions_id:{
        type:String
    },
    user_id:{
        type:String
    },
    created:{
        type:String
    },
    is_package:{
        type:String
    },
})

const transactions=new mongoose.model("transactions",transactionsSchema);
export default transactions;