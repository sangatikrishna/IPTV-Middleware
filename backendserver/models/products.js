import mongoose from "mongoose";
const productsSchema=new mongoose.Schema({
id:{
    type:String
},
name:
{
    type:String
},
quantity:
{
    type:String
},
model:
{
    type:String
},
purchase_price:
{
    type:String
},
manufacturer:
{
    type:String
},
sale_price:
{
    type:String
},
date:
{
    type:String
},
available:
{
    type:String
},
description:
{
    type:String
},



},{ versionKey: false });





const products=new mongoose.model("products",productsSchema);
export default products;