import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const module_resource_providersSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  value: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  },
});
const module_resource_providers = new mongoose.model("module_resource_providers", module_resource_providersSchema);
export default module_resource_providers;
