'use-strict'
let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: false
    },
    phone: {
        type: String
    },
    pwd: {
        type: String,
        required: true
    },
    otp: {
        type: Number
    },

    dob: {
        type: Date
    },

    info: {
        city: {
            type: String
        },
        jobTTL: {
            type: String
        },
        comapany: {
            type: String
        }
    },

    pic: {
        type: String
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    sentFrndRqst: [
        {
            frndId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            name: {
                type: String,
                required: true
            },
            pic: {
                type: String,
                required: true
            }
        }
    ],
    recvFrndRqst: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            name: {
                type: String,
                required: true
            },
            pic: {
                type: String,
                required: true
            }
        }
    ],

    create: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
});
