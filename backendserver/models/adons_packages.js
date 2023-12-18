import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const adons_packagesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  admin_id: {
    type: String,
  },
  status: {
    type: String,
  }
});
const adons_packages = new mongoose.model("adons_packages", adons_packagesSchema);
export default adons_packages;
