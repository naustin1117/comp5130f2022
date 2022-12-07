import {useState, useEffect} from 'react';
import validation from "./Validation";
import {useAuth} from '../contexts/AuthContext';


const useForm = (submitForm) => {

    const { signup } = useAuth()

    const [values, setValues] = useState({
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
        try {
            signup(values.Email,values.Password)
            setDataIsCorrect(true);
            setErrors(validation(values));
        } catch {
            console.log(errors)
        }
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            signup(values.Email,values.Password);
            submitForm(true);
            
        }

    }, [errors]);

    return {handleChange, handleFormSubmit, errors, values}
}

export default useForm;