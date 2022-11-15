import React, {useState, useEffect} from 'react';
import validation from "./Validation";

const useForm = (submitForm) => {

    const createUser = async () => {
        const newData = await fetch('/api', {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...values
        })
        })
        .then(res => res.json());
    }


    const [values, setValues] = useState({
        UserID: 1000,
        Username:"",
        Email:"",
        Password:""
    });

    const [errors, setErrors] = useState({});

    const[dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            createUser();
            submitForm(true);
            
        }

    }, [errors]);

    return {handleChange, handleFormSubmit, errors, values}
}

export default useForm;