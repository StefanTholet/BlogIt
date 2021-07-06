import { baseUrl } from '../config/index';

function sendRequest(endPoint, body, options) {
    if (!body) {
        return fetch(`${baseUrl}${endPoint}`);
    } else {

    }
    return fetch(`${baseUrl}${endPoint}`, {
        method: options[0],
        headers: {
            'Content-Type': options[1]
        },
        body: body
    }).then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
}

export {
    sendRequest,
    
}