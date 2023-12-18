import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const livetvSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  kameraUrl: {
    type: String,
  },
  kameraUrl_ios: {
    type: String,
  },
  kameraUrl_android: {
    type: String,
  },
  kameraUrl_setup: {
    type: String,
  },
  kameraUrl_linux: {
    type: String,
  },
  kameraUrl_dream: {
    type: String,
  },
  kameraUrl_pc: {
    type: String,
  },
  streamName: {
    type: String,
  },
  kameraDurum: {
    type: String,
  },
  kameraImage: {
    type: String,
  },
  category_id: {
    type: String,
  },
  created: {
    type: String,
  },
  position: {
    type: String,
  },
  kameraUrl_secondary: {
    type: String,
  },
  kameraUrl_ios_secondary: {
    type: String,
  },
  kameraUrl_android_secondary: {
    type: String,
  },
  kameraUrl_setup_secondary: {
    type: String,
  },
  kameraUrl_linux_secondary: {
    type: String,
  },
  kameraUrl_dream_secondary: {
    type: String,
  },
  kameraUrl_pc_secondary: {
    type: String,
  },
  is_humax: {
    type: String,
  },
  visible: {
    type: String,
  },
  probe_status: {
    type: String,
  }
});
const livetvs = new mongoose.model("livetvs", livetvSchema);
export default livetvs;
