var mongoose = require('mongoose'),
    config = require('../config/app'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },

    password: {
        type: String,
        default: ''
    },

    roles: {
        type: [{
            type: String,
            enum: ['user', 'moderator', 'admin']
        }],
        default: ['user']
    },

    firstName: {
        type: String,
        trim: true,
        default: ''
    },

    lastName: {
        type: String,
        trim: true,
        default: ''
    },

    address: {
        type: String,
        trim: true,
        default: ''
    },

    phoneNumber: {
        type: String,
        trim: true
    },

    avatarURL: {
        type: String,
        default: config.user.defaultAvatarURL
    },

    provider: {
        type: String,
        trim: true,
        default: config.user.provider.EMAIL
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    lastVisited: {
        type: Date
    }
});

mongoose.model('User', UserSchema);
