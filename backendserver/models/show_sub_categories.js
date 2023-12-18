import mongoose from "mongoose";
const showsubcategoriesSchema=new mongoose.Schema({
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
category_id:
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
is_deleted:
{
    type:String
},


})
const show_sub_categories=new mongoose.model("show_sub_categories",showsubcategoriesSchema);
export default show_sub_categories;