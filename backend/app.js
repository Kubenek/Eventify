// Import environment variables
require('dotenv').config()

// Import packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Create an app
const app = express()

// Config variable for all backend app
const config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI
}

// Connect to MongoDB database
mongoose.connect(config.MONGODB_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Connection error: ", err))

// Attach JSON parser and CORS handler to application
app.use(express.json())
app.use(cors({
    origin: ["*"], // temporary
    credentials: true
}))

// Run server
app.listen(config.PORT, () => {
    console.log(`Server running at http://localhost:${config.PORT}`)
})