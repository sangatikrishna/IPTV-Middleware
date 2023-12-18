import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_songcategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
song_categories_id: {
    type: String,
  }
  
});
const packages_songcategories = new mongoose.model("packages_songcategories",  packages_songcategoriesSchema);
export default  packages_songcategories;
