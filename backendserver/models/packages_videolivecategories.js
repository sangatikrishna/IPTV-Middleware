import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_videolivecategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
video_livecategories_id: {
    type: String,
  }
  
});
const packages_videolivecategories = new mongoose.model("packages_videolivecategories",  packages_videolivecategoriesSchema);
export default  packages_videolivecategories;
