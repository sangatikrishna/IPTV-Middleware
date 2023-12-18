import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const humaxpayloadsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  user_id: {
    type: String,
  },
  old_data: {
    type: String,
  },
  new_data: {
    type: String,
  },
  updated_by: {
    type: String,
  },
  created: {
    type: String,
  },
  
});
const humax_payloads = new mongoose.model("humax_payloads", humaxpayloadsSchema);
export default humax_payloads;
