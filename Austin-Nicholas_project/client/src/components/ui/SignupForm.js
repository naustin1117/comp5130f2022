import React, {useState} from "react";
import classes from "./SignupForm.module.css";
import useForm from "./useForm";

const SignupForm = ({ submitForm }) => {



    const {handleChange, handleFormSubmit, values, errors} = useForm(submitForm);


    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div>
                    <h1 className={classes.header}>Create account</h1>
                </div>
                <form className={classes.formwrapper}>
                    <div className={classes.username}>
                        <label className={classes.label}>Username</label>
                        <input 
                            className={classes.input} 
                            type="text" 
                            name="Username" 
                            value={values.Username}
                            onChange={handleChange}
                        />
                        {errors.Username && <p className={classes.error}>{errors.Username}</p>}
                    </div>
                    <div className={classes.email}>
                        <label className={classes.label}>Email</label>
                        <input 
                            className={classes.input} 
                            type="email" 
                            name="Email" 
                            value={values.Email}
                            onChange={handleChange}
                        />
                        {errors.Email && <p className={classes.error}>{errors.Email}</p>}
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
                        {errors.Password && <p className={classes.error}>{errors.Password}</p>}
                    </div>
                    <div>
                        <button className={classes.submit} onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ); 

}

export default SignupForm;