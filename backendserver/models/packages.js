import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packagesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  admin_id: {
    type: String,
  },
  status: {
    type: String,
  },
  
});
const packages = new mongoose.model("packages", packagesSchema);
export default packages;
