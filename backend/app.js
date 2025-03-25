// Import environment variables from .env file
require('dotenv').config()

// Import packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

// Create an app
const app = express()

// Config variable for all backend app
const config = {
    PORT: process.env.PORT || 3000, // Set port, default to 3000 if not provided
    MONGODB_URI: process.env.MONGODB_URI // MongoDB URI for connection
}

// Connect to MongoDB database
mongoose.connect(config.MONGODB_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Connection error: ", err))

// Attach JSON parser and CORS handler to application
app.use(express.json()) // Parse incoming JSON requests
app.use(cookieParser) // Parse incoming cookies
app.use(cors({ 
    origin: ["*"], // Temporary allow all origins
    credentials: true // Allow credentials in CORS requests
}))

// Start the server and listen on a specified port
app.listen(config.PORT, () => {
    console.log(`Server running at http://localhost:${config.PORT}`)
})