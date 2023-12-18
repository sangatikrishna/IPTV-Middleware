import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const adons_packages_categoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  adons_packages_id: {
    type: String,
  },
    adons_packages_category_id: {
    type: String,
  }
});
const adons_packages_categories = new mongoose.model("adons_packages_categories", adons_packages_categoriesSchema);
export default adons_packages_categories;