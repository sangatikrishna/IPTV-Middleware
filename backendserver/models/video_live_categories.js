import mongoose from "mongoose";
const video_live_categoriesSchema=new mongoose.Schema({
    id:{
        type:String
        },
    title:{
        type:String
    },    
    image:{
        type:String
    },  
    shahid_image:{
        type:String
    },  
    france_image:{
        type:String
    },  
    createdate:{
        type:String
    },  
    visible:{
        type:String
    },  
    position:{
        type:String
    }, 
    parent_id:{
        type:String
    }, 
    is_protected:{
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
    }    
},{versionKey:false})
const video_live_categories=new mongoose.model("video_live_categories",video_live_categoriesSchema);
export default video_live_categories;