import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const messagesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  user_ids: {
    type: String,
  },
  start_date: {
    type: String,
  },
  repeat_interval: {
    type: String,
  },
  is_active: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  }
});
const messages= new mongoose.model("messages", messagesSchema);
export default messages;
