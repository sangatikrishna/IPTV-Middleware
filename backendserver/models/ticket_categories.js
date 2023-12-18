import mongoose from "mongoose";
const ticketcategoriesSchema=new mongoose.Schema({
id:{
type:String
},
name:{
    type:String
},
parent_id:{
    type:String
},
created:{
    type:String
},
modified:{
    type:String
},

})
const ticket_categories=new mongoose.model("ticket_categories",ticketcategoriesSchema);
export default ticket_categories;
