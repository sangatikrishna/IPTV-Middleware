import mongoose from "mongoose";
const masaOfferMessagesSchema=new mongoose.Schema({
id:{
type:String
},
title:
{
    type:String
},
description:
{
    type:String
},
status:
{
    type:String
},
created:
{
    type:String
},
updated:
{
    type:String
}

    
})
const masa_offer_messages=new mongoose.model("masa_offer_messages",masaOfferMessagesSchema);
export default masa_offer_messages;