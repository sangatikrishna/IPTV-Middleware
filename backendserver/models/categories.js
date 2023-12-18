import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const categoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  createdate: {
    type: String,
  },
  parent_id: {
    type: String,
  },
  visible: {
    type: String,
  },
  position: {
    type: String,
  },
  is_protected: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  },
  is_deleted: {
    type: String,
  }
  
});
const categories = new mongoose.model("categories", categoriesSchema);
export default categories;
