import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const common_activationsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  host: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  status: {
    type: String,
  },
  message: {
    type: String,
  },
  exp_date: {
    type: String,
  },
  activation_code: {
    type: String,
  },
  mac_address: {
    type: String,
  },
  serial_number: {
    type: String,
  },
  created: {
    type: String,
  }
  
});
const common_activations = new mongoose.model("common_activations", common_activationsSchema);
export default common_activations;
