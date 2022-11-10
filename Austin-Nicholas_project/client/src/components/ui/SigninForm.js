import React, {useState} from "react";
import classes from "./SignupForm.module.css";
import validation from "./Validation"
import { Link } from "react-router-dom";
const SigninForm = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
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
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p className={classes.error}>{errors.email}</p>}
                    </div>
                    <div className={classes.password}>
                        <label className={classes.label}>Password</label>
                        <input 
                        className={classes.input} 
                        type="text" 
                        name="password" 
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p className={classes.error}>{errors.password}</p>}
                    </div>
                    <div>
                        <button className={classes.submit} onClick={handleFormSubmit}>
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