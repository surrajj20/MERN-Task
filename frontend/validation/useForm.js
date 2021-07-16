import { useState, useEffect } from 'react';

const useForm = () => {
    const [values, setValues] = useState({
        Name: '',
        email: '',
        password: '',
        repassword: '',
    });
    const [erors, setErrors] = useState({});

    const handelChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return { handelChange, values }

};

export default useForm
