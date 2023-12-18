import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const arosSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  parent_id: {
    type: String,
  },
  model: {
    type: String,
  },
  forgien_key: {
    type: String,
  },
  alias: {
    type: String,
  },
  lft: {
    type: String,
  },
  rght: {
    type: String,
  },
});
const aros = new mongoose.model("aros", arosSchema);
export default aros;
