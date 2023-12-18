import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const new_user_product_assignmentsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  product_id: {
    type: String,
  },
  user_id: {
    type: String,
  },
  mac_address: {
    type: String,
  },
  serial_num: {
    type: String,
  },
  created: {
    type: String,
  },
  invoice: {
    type: String,
  },
  modified: {
    type: String,
  },
  
});
const new_user_product_assignments = new mongoose.model("new_user_product_assignments", new_user_product_assignmentsSchema);
export default new_user_product_assignments;
