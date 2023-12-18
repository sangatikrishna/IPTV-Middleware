import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"

const packages_livetvsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  broadcast_id: {
    type: String,
  },
  category_id: {
    type: String,
  },
  position: {
    type: String,
  },
  created: {
    type: String,
  },
  updated: {
    type: String,
  },
  
  
});
const packages_livetvs= new mongoose.model("packages_livetvs", packages_livetvsSchema);
export default packages_livetvs;
