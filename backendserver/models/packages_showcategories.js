import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_showcategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
show_categories_id: {
    type: String,
  }
  
});
const packages_showcategories = new mongoose.model("packages_showcategories",  packages_showcategoriesSchema);
export default  packages_showcategories;
