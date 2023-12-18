import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const livetvaudioSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  kameraUrl: {
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
  modified: {
    type: String,
  },
  visible: {
    type: String,
  },
  
});
const livetv_audios = new mongoose.model("livetv_audios", livetvaudioSchema);
export default livetv_audios;
