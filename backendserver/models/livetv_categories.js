import mongoose from "mongoose";
const liveTVSchema=new mongoose.Schema({
id:{
type:String
},
kameraUrl:
{
    type:String
},
streamName:
{
    type:String
},
kameraDurum:
{
    type:String
},
kameraImage:
{
    type:String
},
category_id:
{
    type:String
},
created:
{
    type:String
},
position:
{
    type:String
},
kameraUrl_secondary:
{
    type:String
},
modified:
{
    type:String
},
visible:
{
    type:String
},

    
})
const livetv_categories=new mongoose.model("livetv_categories",liveTVSchema);
export default livetv_categories;