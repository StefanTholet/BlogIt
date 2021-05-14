import {sendRequest} from './server';
const postRequest = ['POST', 'application/json'];

function uploadEditedGeneralInfo(e, id) {
    const body = JSON.stringify({
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        imageUrl: e.target.imageUrl.value   
    })
    return sendRequest(`/users/${id}/edit-profile`, body, postRequest)
    .catch(err => console.log(err));
}

function registerUser(e) {
    const target = e.target;
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const email = target.email.value;
    const password = target.password.value;
    const user = { firstName, lastName, email, password }
    const registrationUrl = '/auth/register';
    return sendRequest(registrationUrl, JSON.stringify(user), ['Post', 'application/json'])
}

function signInUserAndGetUserData(e) {
    const loginDetails = JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
    });
    return sendRequest('/auth/login', loginDetails, postRequest)
}

function getUserInfo(id) {
    return sendRequest(`/users/${id}/get-info`)
        .then(res => res.json())
}

export {
    uploadEditedGeneralInfo,
    signInUserAndGetUserData,
    registerUser,
    getUserInfo,
}