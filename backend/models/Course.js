const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    roadmap: [
        {
            title: { type: String, required: true },
            estimatedTime: { type: String, required: true },
            days: [
                {
                    day: { type: String, required: true },         // e.g., "Day 1"
                    topic: { type: String, required: true },       // e.g., "Variables"
                    description: { type: String, required: true }  // e.g., "Introduction to variables"
                }
            ]
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Course', courseSchema);