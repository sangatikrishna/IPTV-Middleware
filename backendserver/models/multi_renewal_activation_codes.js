import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const multi_renewal_activation_codesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  value: {
    type: String,
  },
  is_used: {
    type: String,
  },
  reseller_id: {
    type: String,
  },
  parent_id: {
    type: String,
  },
  module: {
    type: String,
  },
  used_by: {
    type: String,
  },
  created: {
    type: String,
  },
  updated: {
    type: String,
  }
});
const multi_renewal_activation_codes = new mongoose.model("multi_renewal_activation_codes", multi_renewal_activation_codesSchema);
export default multi_renewal_activation_codes;
