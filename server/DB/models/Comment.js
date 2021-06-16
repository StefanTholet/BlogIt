const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    blog: {
        type: mongoose.Types.ObjectId,
        ref: 'Blog'
    },
    isReplyTo: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
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
    replies: { 
        type: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }] },
});

module.exports = mongoose.model('Comment', commentSchema);