import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import mongodb  from 'mongodb'
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import generalRoutes from "./routes/general.js";
import contentRoutes from "./routes/content.js";
import monetizeRoutes from "./routes/monetize.js";
import customersRoutes from "./routes/customers.js";
import manageRoutes from "./routes/manage.js";
import administratorsRoutes from "./routes/administrators.js";
import resellersRoutes from "./routes/resellers.js";
import dcRoutes from "./routes/dc.js";
import route from "./routes/routes.js";
import MongoClient from "mongodb";

//data imports
// import User from "./models/User.js"
import { dataUser } from "./data/index.js";
// BACKEND CONFIGURATION
dotenv.config();

// const app = express();

//The app. use() method mounts or puts the specified middleware functions at the specified path. This middleware function will be executed only when the base of the requested path matches the defined path
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //allows us to make cross origin sharing requests

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/api",routes);
app.use("/general", generalRoutes);
app.use("/content", contentRoutes);
app.use("/monetize", monetizeRoutes);
app.use("/customers", customersRoutes);
app.use("/manage", manageRoutes);
app.use("/administrators", administratorsRoutes);
app.use("/resellers", resellersRoutes);
app.use("/dc", dcRoutes);
let db
// Importing routes
// const user = require('./route/user');
// // Use user route when url matches /api/user/
// app.use('/api/user', user);

// const PORT = process.env.PORT || 9000;
// app.get("/", (req, res) => {
//   res.send("Hello");
// });

const PORT =process.env.PORT;
// app.get('/testRoute', (req, res) => res.end('Hello from Server!'))
// app.listen(PORT, () => {
//   console.log(`Server App running on port ${PORT}...`)
// })
/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const database = mongoose.connection
  database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
});

  

 
router.get('/getAll', async (req, res) => {
  try{
      const data = await LiveTV.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})


//   app.get('/livetv', (req, res) => {
//     try{
//       const data =  database.livetv_categories.find();
//       res.json(data)
//   }
//   catch(error){
//       res.status(500).json({message: error.message})
//   }
// });



// mongodb.connect(
//   process.env.MONGO_URL,
 
//   function (err, client) {
//     db = client.db("sazpinmiddleware");
//     console.log("db connected!")
  
//     app.get('/livetv', function (req, res) {
//       // getting all the data
//      db. livetv_categories.find()
//         .toArray(function (err, items) {
//           res.send(items)
//         })
//     })
//   }
  
// );

// const dotenv =require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })
// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// })