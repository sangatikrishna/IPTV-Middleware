import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_modcategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
mod_categories_id: {
    type: String,
  },
  
});
const packages_modcategories = new mongoose.model("packages_modcategories",  packages_modcategoriesSchema);
export default  packages_modcategories;
