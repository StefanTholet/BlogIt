import { useState } from 'react';

const useToken = () => {
    
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    };
    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        sessionStorage.setItem('token', JSON.stringify(token))
        console.log(getToken())
        setToken(getToken());
    };

    return {
        setToken: saveToken,
        token
    }
}

export default useToken;