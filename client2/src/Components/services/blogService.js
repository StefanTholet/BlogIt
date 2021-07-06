// import { today } from './bookService';
import { sendRequest } from './server'
const postRequest = ['POST', 'application/json'];


function getOnePost(postId) {
    return sendRequest(`/blog/posts/${postId}`)
}

function getPosts(params) {
    return sendRequest('/blog/all-posts')
}

function updatePostWithComment(postId, comment) {
    return sendRequest(`/blog/posts/${postId}/submit-comment`,
        JSON.stringify(comment), postRequest)
}

function addBlogPost(body) {
    return sendRequest('/blog/add-blog-post',
        JSON.stringify(body), postRequest)
}

function getFavouritePosts(posts) {
    return sendRequest('/blog/get-favorites',
        JSON.stringify( posts ), postRequest)
}

function deleteBlogPost(blogId, userId) {
    return sendRequest(`/blog/${blogId}/delete-post`,
        JSON.stringify({ userId }), postRequest)
}

function deleteFavoritePost(blogId, userId) {
    return sendRequest(`/users/${userId}/delete-favorite-post`,
        JSON.stringify({ blogId }), postRequest)
}

export {
    getPosts,
    getOnePost,
    updatePostWithComment,
    deleteBlogPost,
    addBlogPost,
    getFavouritePosts,
    deleteFavoritePost
}