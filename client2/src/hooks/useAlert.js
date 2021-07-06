import { useState } from 'react';

const useAlert = () => {

    const [showAlert, setShowAlert] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');

    const setAlertType = (type, message) => {
        setShowAlert(type);
        setAlertMessage(message);
        console.log(showAlert, message);
    }
       
    return {
        showAlert,
        setShowAlert: setAlertType,
        alertMessage,
    }
}

export default useAlert