// Import packages
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = express.router() // Create a router 

module.exports = (config) => {
    // Function to authenticate token for verifing token
    function authenticateToken(req, res, next) {
        const token = req.cookies.token
        if (!token) return res.status(401).json({ 'message': 'Token missing' })

        jwt.verify(token, config.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({ 'message': 'Invalid token' })
            req.user = user
            next()
        })
    }

    // Register path to create a new user
    router.post('/register', async (req, res) => {
        try {
            const { username, email, password } = req.body // Retrieve data from request body
            if (!username || !email || !password) return res.status(404).json({ 'message': 'Username, email or password not present' })

            const hashedPass = bcrypt.hashSync(password, 10) // Generate hash of the password for safety
            const newUser = new User({ username: username, email: email, password: hashedPass }) // Create a new user
            await newUser.save() // Save a user in database
            res.status(201).json({ 'message': 'Account has been created succesfully' })
        } catch (err) {
            res.status(500).json({ 'message': 'Internal server error' })
        }
    })

    // Login path to login to a new account
    router.post('/login', async (req, res) => {
        try {
            const { username, password } = req.body // Retrieve data from request body
            if (!username || !password) return res.status(404).json({ 'message': 'Username, email or password not present' })
            
            // Check if user exist
            const user = User.findOne({ username: username }).select('username password')
            if (!user) return res.status(404).json({ 'message': 'User not found' })

            // Compare the password with hash
            if (!bcrypt.compareSync(password, user.password)) {
                res.status(401).json({ 'message': 'Wrong password' })
            }

            res.status
        } catch (err) {
            res.status(500).json({ 'message': 'Internal server error' })
        }
    })
    
    return router
}