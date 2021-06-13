const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    blog: {
        type: mongoose.Types.ObjectId,
        ref: 'Blog'
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    author: {
        type: String,
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
    },
    replys: [{
        author: String,
        avatar: String,
        content: String,
        postedOnDate: {
            type: Date,
            default: Date.now
        }
    }],
});

module.exports = mongoose.model('Comment', commentSchema);