const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const courseRoutes = require('./routes/courseRoutes');

// Load environment variables from .env file
dotenv.config()

// Create an Express application
const app = express()
const port = 3000

// middlewares
app.use(morgan('dev')) // Logging middleware
app.use(express.json()) // Middleware to parse JSON bodies
app.use(cors()) // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Routes
app.use('/course', courseRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
