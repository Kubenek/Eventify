const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const router = express.router()

module.exports = (config = null) => {
    router.post('/register', async (req, res) => {
        try {
            const { username, email, password } = req.body
            if (!username || !email || !password) return res.status(404).json({ 'message': 'Username, email or password not present' })
            const hashedPass = bcrypt.hashSync(password, 10)
            const newUser = new User({ username: username, email: email, password: hashedPass })
            await newUser.save()
            res.status(201).json({ 'message': 'Account has been created succesfully' })
        } catch (err) {
            res.status(500).json({ 'message': 'Internal server error' })
        }
    })

    router.post('/login', async (req, res) => {
        try {
            const { username, password } = req.body
            if (!username || !password) return res.status(404).json({ 'message': 'Username, email or password not present' })

            
        } catch (err) {
            res.status(500).json({ 'message': 'Internal server error' })
        }
    })
    
    return router
}