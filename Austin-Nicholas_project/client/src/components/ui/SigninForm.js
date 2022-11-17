import React, {useState} from "react";
import classes from "./SignupForm.module.css";
import validation from "./Validation"
import { Link } from "react-router-dom";
const SigninForm = () => {

    const [values, setValues] = useState({
        Username:"",
        Email:"",
        Password:""
    });

    const [errors, setErrors] = useState({});

    const [value, setValue] = useState("SHEIT");

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }


    const getUser = async () => {
        const newData = await fetch('/login', {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Email: values.Email,
            Password: values.Password
        })
        })
        .then(res => res.json());
    }

    const handleFormSubmit = (event) => {
        getUser();
        event.preventDefault();
        setErrors(validation(values));
    }

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
                        {errors.email && <p className={classes.error}>{errors.email}</p>}
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
                        {errors.password && <p className={classes.error}>{errors.password}</p>}
                    </div>
                    <div>
                        <button className={classes.submit} onClick={getUser}>
                            Log in
                        </button>
                    </div>
                    <div>
                        <p className={classes.paragraph}>
                            Don't have an account? <Link to="/Signup">Sign Up</Link>
                        </p>
                    </div>
                    <div>
                        <p>{value}</p>
                    </div>
                </form>
            </div>
        </div>
    ); 

}

export default SigninForm;