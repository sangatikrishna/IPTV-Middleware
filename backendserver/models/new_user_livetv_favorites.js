import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const new_user_livetv_favoritesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  user_id: {
    type: String,
  },
  camera_id: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  },
  
});
const new_user_livetv_favorites = new mongoose.model("new_user_livetv_favorites", new_user_livetv_favoritesSchema);
export default new_user_livetv_favorites;
