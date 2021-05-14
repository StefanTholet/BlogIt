const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({   
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    author: {
        type: String,
        required: [true, 'Please specify author of the post'],
    },
    createdOn: {
        type: String,
        require: [true, 'The date of the post creation is required.']
    },
    content: {
        type: String,
        required: [true, 'Content is required!']
    },
    imageUrl: {
        type: String
    },
    comments: [{
        author: String,
        avatar: String,
        content: String,
        postedOnDate: String
    }]
});

module.exports = mongoose.model('Blog', blogSchema);