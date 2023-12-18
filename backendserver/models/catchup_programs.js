import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const catchup_programsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  
description: {
    type: String,
  },
  program_url: {
    type: String,
  },
  start_time: {
    type: String,
  },
  end_time: {
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
  },
  camera_id: {
    type: String,
  },
  
});
const catchup_programs = new mongoose.model("catchup_programs", catchup_programsSchema);
export default catchup_programs;
