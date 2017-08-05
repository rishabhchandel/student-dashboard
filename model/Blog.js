'use-strict'
let mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.model('Blog', {
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    seenBy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            comment: {
                type: String
            },
            by: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            time: {
                type: Date,
                default: Date.now
            }
        }
    ],
    postedDT: {
        type: Date,
        default: Date.now
    }
});
