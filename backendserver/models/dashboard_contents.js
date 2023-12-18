import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const dashboardcontentsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  status: {
    type: String,
  },
  position: {
    type: String,
  },
  category_id: {
    type: String,
  },
  stream_url: {
    type: String,
  },
  image: {
    type: String,
  },
  created: {
    type: String,
  },
  updated: {
    type: String,
  }
  
},{versionKey:false});
const dashboard_contents = new mongoose.model("dashboard_contents", dashboardcontentsSchema);
export default dashboard_contents;
