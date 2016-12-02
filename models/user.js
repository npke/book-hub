var mongoose = require('mongoose'),
    config = require('../config/app'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    address: {
        type: String,
        trim: true,
        default: ''
    },

    birthday: {
        type: Date
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },

    firstName: {
        type: String,
        trim: true,
        default: ''
    },

    joinedTrips: [{
        type: Schema.ObjectId,
        ref: 'Trip'
    }],

    lastVisited: {
        type: Date
    },

    location: {
        type: String,
        default: config.user.defaultLocation,
    },

    lastName: {
        type: String,
        trim: true,
        default: ''
    },

    password: {
        type: String,
        default: ''
    },

    pinnedTrips: [{
        type: Schema.ObjectId,
        ref: 'Trip'
    }],

    phoneNumber: {
        type: String,
        trim: true
    },

    profilePhotoURL: {
        type: String,
        default: config.user.defaultAvatarURL
    },

    provider: {
        type: String,
        trim: true,
        default: config.user.provider.EMAIL
    },

    score: {
        type: Number,
        default: 100
    },

    rank: {
        type: String,
        default: 'Newbie'
    },

    roles: {
        type: [{
            type: String,
            enum: ['user', 'moderator', 'admin']
        }],
        default: ['user']
    }
});

mongoose.model('User', UserSchema);
