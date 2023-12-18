import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const billingtypesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
 
});
const billing_types = new mongoose.model("billing_types", billingtypesSchema);
export default billing_types;
