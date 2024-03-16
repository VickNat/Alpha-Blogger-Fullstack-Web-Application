require('dotenv').config()
const mongoose = require('mongoose');
const User = require('../models/usersModel');
const Blog = require('../models/blogsModel');

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;

    console.log("connectionString", connectionString);
    const con = await mongoose.connect(connectionString);
    console.log(`Database connected : ${con.connection.host}`);

    // Initialize User schema
    await User.init();
    // Initialize Blog schema
    await Blog.init();

    console.log('User schema initialized');
    console.log('Blog schema initialized');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
