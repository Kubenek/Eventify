const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true,
        maxLength: 512
    },
    'description': {
        type: String,
        required: true
    },
    'location': {
        type: String,
        required: true
    },
    'startDate': {
        type: Date,
        default: Date.now
    },
    'createdAt': {
        type: Date,
        default: Date.now
    },
    'createdBy': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event