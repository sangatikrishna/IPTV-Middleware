import mongoose from "mongoose";
 
// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"
 
 
 
const videoSchema = new mongoose.Schema({
  id:{
    type:String},
 
        kameraUrl:{
          type:String},
        kameraUrl_ios:{
          type:String},
        kameraUrl_android:{
          type:String},
        kameraUrl_setup:{
          type:String},
        kameraUrl_linux:{
          type:String},
        kameraUrl_dream:{
          type:String},
        kameraUrl_pc:{
          type:String},
        streamName:{
          type:String},
        kameraDurum:{
          type:String},
        kameraImage:{
          type:String},
        category_id:{
          type:String},
        created:{
          type:String},
        position:{
          type:String},
        modified:{
          type:String},
        kameraUrl_secondary:{
          type:String},
        kameraUrl_ios_secondary:{
          type:String},
        kameraUrl_android_secondary:{
          type:String},
        kameraUrl_setup_secondary:{
          type:String},
        kameraUrl_linux_secondary:{
          type:String},
        kameraUrl_dream_secondary:{
          type:String},
        kameraUrl_pc_secondary:{
          type:String},
        visible:{
          type:String},
        trailer:{
          type:String},
        description:{
          type:String},
        language:{
          type:String},
        duration:{
          type:String},
        year:{
          type:String},
        studio:{
          type:String},
        producer:{
          type:String},
        director:{
          type:String},
        actors:{
          type:String},
        ratings:{
          type:String},
        price:{
          type:String},
},{versionKey:false});
const movies = new mongoose.model("movies", videoSchema);
export default movies;
 