const mongoose = require('mongoose');
const ensureUnique = require('./helpers/validators');
const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        validate: [
            {
                validator: ensureUnique.bind(undefined, ['User', 'email']),
                message: 'This email address is already taken',
            }
        ],
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    blogPosts: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Blog' }]
    },
    favoritePosts: [{ type: mongoose.Types.ObjectId }],

    imageUrl: {
        type: String
    },
    comments: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }]
    },

    // likes: []
})

module.exports = mongoose.model('User', userSchema);