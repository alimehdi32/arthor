const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    authenticationKey: {
        type: String,
        validate: {
            validator: function (value) {
                // If role is 'admin', authKey must be provided
                if (this.role === 'admin') {
                    return value && value.length > 0;
                }
                return true; // for non-admin, authKey not required
            },
            message: 'Authentication key is required for admin role.',
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('User', userSchema);