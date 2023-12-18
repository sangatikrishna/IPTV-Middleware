import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const groupsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  permissions: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  }
  
});
const groups = new mongoose.model("groups", groupsSchema);
export default groups;
