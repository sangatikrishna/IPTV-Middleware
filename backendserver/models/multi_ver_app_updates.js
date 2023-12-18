import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const multi_ver_app_updatesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  version: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  products_id: {
    type: String,
  },
  created_date: {
    type: String,
  },
});
const multi_ver_app_updates = new mongoose.model("multi_ver_app_updates", multi_ver_app_updatesSchema);
export default multi_ver_app_updates;
