import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const shahid_new_app_updatesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  version: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  products_id: {
    type: String,
  },
  created_date: {
    type: String,
  },
  
},{versionKey:false});
const shahid_new_app_updates = new mongoose.model("shahid_new_app_updates", shahid_new_app_updatesSchema);
export default shahid_new_app_updates;
 