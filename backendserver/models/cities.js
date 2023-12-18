import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const citiesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  state_id: {
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
const cities= new mongoose.model("cities", citiesSchema);
export default cities;
