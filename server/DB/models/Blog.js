const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    author: {
        type: String,
        required: [true, 'Please specify author of the post'],
    },
    title: {
        type: String
    },
    createdOn: {
        type: String,
        require: [true, 'The date of the post creation is required.']
    },
    content: {
        type: String,
        required: [true, 'Content is required!']
    },
    postPreviewText: {
        type: String
    },
    imageUrl: {
        type: String
    },
    comments: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }]
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('Blog', blogSchema);