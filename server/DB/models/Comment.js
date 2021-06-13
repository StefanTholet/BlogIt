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
        type: Date(),

    },
    content: {
        type: String,
    },
    replys: [{
        author: String,
        avatar: String,
        content: String,
        postedOnDate: Date()
    }],
});

module.exports = mongoose.model('Comment', commentSchema);