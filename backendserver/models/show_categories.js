import mongoose from "mongoose";
const showcategoriesSchema=new mongoose.Schema({
id:{
type:String
},
title:
{
    type:String
},
image:
{
    type:String
},
createdate:
{
    type:String
},
parent_id:
{
    type:String
},
visible:
{
    type:String
},
position:
{
    type:String
},
is_protected:
{
    type:String
},
is_deleted:
{
    type:String
},


})
const show_categories=new mongoose.model("show_categories",showcategoriesSchema);
export default show_categories;