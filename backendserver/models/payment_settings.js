import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const payment_settingsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  key: {
    type: String,
  },
  value: {
    type: String,
  },
  type: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  }
  
});
const payment_settings= new mongoose.model("payment_settings", payment_settingsSchema);
export default payment_settings;
