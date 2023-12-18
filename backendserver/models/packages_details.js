import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const packages_detailsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  createdate: {
    type: String,
  },
  parent_id: {
    type: String,
  },
  visible: {
    type: String,
  },
  position: {
    type: String,
  },
  is_protected: {
    type: String,
  },
  
  created: {
    type: String,
  },

modified: {
  type: String,
},

is_deleted: {
  type: String,
}
  
});
const packages_details= new mongoose.model("packages_details", packages_detailsSchema);
export default packages_details;
