const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
    'follower': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    'followedEvent': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }
})

const Follow = mongoose.model('Follow', followSchema)
module.exports = Follow