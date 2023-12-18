import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const billingSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  billingType_id: {
    type: String,
  },
  price: {
    type: String,
  },
  package_id: {
    type: String,
  },
  
});
const billings = new mongoose.model("billings", billingSchema);
export default billings;
