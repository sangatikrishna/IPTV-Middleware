import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const new_user_profilesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  user_id: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  country_id: {
    type: String,
  },
  phone_work: {
    type: String,
  },
  phone_home: {
    type: String,
  },
  image: {
    type: String,
  },
  region_id: {
    type: String,
  },
  
});
const new_user_profiles = new mongoose.model("new_user_profiles", new_user_profilesSchema);
export default new_user_profiles;
