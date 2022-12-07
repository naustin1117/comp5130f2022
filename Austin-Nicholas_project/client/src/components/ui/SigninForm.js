import React, {useState, useEffect} from "react";
import classes from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const SigninForm = ({submitForm}) => {

    const {login} = useAuth()

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
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setErrors({})
            console.log(values.Email, values.Password)
            await login(values.Email, values.Password)
            setDataIsCorrect(true);
        } catch {
            setErrors(errors.login="Failed to sign in")
        }
    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            login(values.Email, values.Password)
            submitForm(true);
        }

    }, [errors]);

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div>
                    <h1 className={classes.header}>Sign In</h1>
                </div>
                <form className={classes.formwrapper}>
                    <div className={classes.email}>
                        <label className={classes.label}>Email</label>
                        <input 
                        className={classes.input} 
                        type="email" 
                        name="Email" 
                        value={values.Email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className={classes.password}>
                        <label className={classes.label}>Password</label>
                        <input 
                        className={classes.input} 
                        type="text" 
                        name="Password" 
                        value={values.Password}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                    {errors.login && <p className={classes.error}>{errors.login}</p>}
                        <button className={classes.submit} onClick={handleSubmit}>
                            Log in
                        </button>
                    </div>
                    <div>
                        <p className={classes.paragraph}>
                            Don't have an account? <Link to="/Signup">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    ); 

}

export default SigninForm;