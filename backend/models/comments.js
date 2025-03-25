const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    'createdBy': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    'eventID': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    'description': {
        type: String,
        required: true
    },
    'createdAt': {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment