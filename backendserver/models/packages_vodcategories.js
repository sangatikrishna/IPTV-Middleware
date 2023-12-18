import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_vodcategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
categories_id: {
    type: String,
  }
  
});
const packages_vodcategories = new mongoose.model("packages_vodcategories",  packages_vodcategoriesSchema);
export default  packages_vodcategories;
