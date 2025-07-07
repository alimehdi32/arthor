const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');
const connectToMongoDB = require('./config/mongoConfig');
const userRoutes = require('./routes/Userconfig');
const cookieParser = require('cookie-parser');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectToMongoDB();

// Create an Express application
const app = express()
const port = 3000

// middlewares
app.use(morgan('dev')) // Logging middleware
app.use(express.json()) // Middleware to parse JSON bodies
app.use(cors()) // Enable CORS for all routes
app.use(cookieParser()); // <-- middleware to read cookies

app.get('/', (req, res) => {
  res.send('Hello World!')
})



// Routes
app.use('/user', userRoutes); // User routes
app.use('/course', courseRoutes); // Course routes



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
