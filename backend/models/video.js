const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoQuery: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    channelTitle: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Video', videoSchema);