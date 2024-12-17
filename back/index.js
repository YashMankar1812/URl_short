import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/formRoutes.js';  


dotenv.config();

const app = express();

app.use(express.json()); // To parse JSON request bodies
// app.use('/form', formRoutes); 



// Middleware
app.use(cors({
  origin:"http://localhost:5173"
})); 
// app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
      .then (res => 
          console.log("database connect")
      )
      .catch(error =>
        console.log(error)
    )
 
 
  app.use('/api', routes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});











// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const urlRoutes = require('./routes/urlRoutes');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB

// mongoose
//   .connect('mongodb://localhost:27017/urlShortner')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));


// // Routes
// app.use('/', urlRoutes);

// const PORT = process.env.PORT || 5001 ;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const router = express.Router();
// const cors = require('cors');
// const urlRoutes = require('./routes/urlRoutes');

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection using MONGO_URI from .env
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));


// // Routes
// app.use('/', urlRoutes);

// // Server Setup
// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


