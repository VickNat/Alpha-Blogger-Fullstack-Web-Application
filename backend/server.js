require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT || 3000);

const connectDB = require('./config/db');
connectDB();

const indexRouter = require('./routes/index');
const userController = require('./routes/userController');
const blogController = require('./routes/blogController');



app.use(indexRouter);
app.use('/user', userController);
app.use('/blog', blogController);
