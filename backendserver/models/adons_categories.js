import mongoose from "mongoose";
const adonsCategoriesSchema=new mongoose.Schema({
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
created:
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
}


    
})
const adons_categories=new mongoose.model("adons_categories",adonsCategoriesSchema);
export default adons_categories;