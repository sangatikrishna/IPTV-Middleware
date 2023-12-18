import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const aros_acosSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  aro_id: {
    type: String,
  },
  aco_id: {
    type: String,
  },
  _create: {
    type: String,
  },
  _read: {
    type: String,
  },
  _update: {
    type: String,
  },
  _delete: {
    type: String,
  }
});
const aros_acos = new mongoose.model("aros_acos", aros_acosSchema);
export default aros_acos;
