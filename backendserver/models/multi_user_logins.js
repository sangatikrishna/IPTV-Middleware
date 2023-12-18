import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const multi_user_loginsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  userId: {
    type: String,
  },
  userIp: {
    type: String,
  },
  loginDate: {
    type: String,
  },
  status: {
    type: String,
  },
  logoutDate: {
    type: String,
  },
  is_device: {
    type: String,
  }
});
const multi_user_logins= new mongoose.model("multi_user_logins", multi_user_loginsSchema);
export default multi_user_logins;
