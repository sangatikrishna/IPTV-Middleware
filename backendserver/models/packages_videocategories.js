import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_videocategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
video_categories_id: {
    type: String,
  }
  
});
const packages_videocategories = new mongoose.model("packages_videocategories",  packages_videocategoriesSchema);
export default  packages_videocategories;
