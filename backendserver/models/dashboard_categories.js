import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const dashboardcategoriesSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  status: {
    type: String,
  },
  image: {
    type: String,
  },
  position: {
    type: String,
  },
  created: {
    type: String,
  },
  updated: {
    type: String,
  }
  
},{versionKey:false});
const dashboard_categories = new mongoose.model("dashboard_categories", dashboardcategoriesSchema);
export default dashboard_categories;
