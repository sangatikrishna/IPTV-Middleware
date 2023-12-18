import mongoose from "mongoose";

// import cryptojs from "crypto-js";
// import { decrypt } from "dotenv";
import bcrypt from "bcryptjs"



const modsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  kameralUrl: {
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
  modified: {
    type: String,
  },
  kameralUrl_secondary: {
    type: String,
  },
  visible: {
    type: String,
  },
  trailer: {
    type: String,
  },
  description: {
    type: String,
  },
  language: {
    type: String,
  },
  duration: {
    type: String,
  },
  year: {
    type: String,
  },
  studio: {
    type: String,
  },
  producer: {
    type: String,
  },
  director: {
    type: String,
  },
  actors: {
    type: String,
  },
  ratings: {
    type: String,
  },
  price: {
    type: String,
  }

});
const mods= new mongoose.model("mods", modsSchema);
export default mods;