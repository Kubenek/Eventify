const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    'username': {
        type: String,
        required: true,
        unique: true,
        maxLength: 64
    },
    'email': {
        type: String,
        required: true,
        unique: true,
        maxLength: 128
    },
    'password': {
        type: String,
        required: true,
        maxLength: 32
    },
    'scope': {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User