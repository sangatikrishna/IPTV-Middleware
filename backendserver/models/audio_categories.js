import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const audio_categoriesSchema = new mongoose.Schema({
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
  is_deleted: {
    type: String,
  },
  
});
const audio_categories = new mongoose.model("audio_categories", audio_categoriesSchema);
export default audio_categories;
