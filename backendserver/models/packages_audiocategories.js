import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_audiocategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
audio_categories_id: {
    type: String,
  },
 
  
});
const packages_audiocategories= new mongoose.model("packages_audiocategories", packages_audiocategoriesSchema);
export default packages_audiocategories;
