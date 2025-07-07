const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Video', videoSchema);