import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const common_app_updatesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  version: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  products_id: {
    type: String,
  },
  created_date: {
    type: String,
  }
  
});
const common_app_updates= new mongoose.model("common_app_updates", common_app_updatesSchema);
export default common_app_updates;
