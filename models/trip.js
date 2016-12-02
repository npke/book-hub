var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TripSchema = new Schema({
    activities: [{
        order: {
            type: Number,
            default: 0
        },

        type: {
            type: Number,
            default: 0
        },

        name: {
            type: String,
            trim: true,
        },

        contents: [{
            order: {
                type: Number,
                default: 0
            },

            type: {
                type: Number,
                default: 0
            },

            data: {
                type: String,
                trim: true,
                require: true
            }
        }]
    }],

    comments: [{
        user: {
            type: ObjectId,
            ref: 'User'
        },
        content: {
            type: String,
            trim: true,
            require: true
        },
        commentedAt: {
            type: Date,
            default: Date.now(),
            get: v => v.getTime()
        }
    }],

    cost: {
        type: Number,
        default: 0
    },

    coverPhotoURL: {
        type: String,
        trim: true
    },

    creator: {
        type: ObjectId,
        ref: 'User'
    },

    description: {
        type: String,
        trim: true
    },

    endTime: {
        type: Date,
        get: v => v.getTime()
    },

    name: {
        type: String,
        trim: true
    },

    startTime: {
        type: Date,
        get: v => v.getTime()
    }
});

mongoose.model('Trip', TripSchema);
