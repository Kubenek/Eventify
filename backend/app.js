require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

const config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI
}

app.use(express.json())
app.use(cors({
    origin: ["*"], // temporary
    credentials: true
}))

app.listen(config.PORT, () => {
    console.log(`Server running at http://localhost:${config.PORT}`)
})