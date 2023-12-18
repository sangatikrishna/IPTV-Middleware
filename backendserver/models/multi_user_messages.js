import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const multi_user_messagesSchema = new mongoose.Schema({
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
  used_by: {
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
},{versionKey:false});
const multi_user_messages = new mongoose.model("multi_user_messages", multi_user_messagesSchema);
export default multi_user_messages;
