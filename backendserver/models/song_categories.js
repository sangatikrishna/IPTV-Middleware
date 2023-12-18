import mongoose from "mongoose";
const songcategoriesSchema=new mongoose.Schema({
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
created:{
    type:String
},
modified:{
    type:String
},
is_deleted:{
    type:String
},


})
const song_categories=new mongoose.model("song_categories",songcategoriesSchema);
export default song_categories;