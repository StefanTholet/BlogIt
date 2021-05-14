import { useState } from 'react';

const useControlledForm = (defaultValue) => {
    const [data, setData] = useState(defaultValue);

    const updateData = (e) => {
        const value = e.target.value;
        setData({...data, [e.target.name]: value})
    }
    return {
        data,
        setData: updateData
    }
}

export default useControlledForm;
