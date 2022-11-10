import React from "react";
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
                        <label className={classes.label}>Full Name</label>
                        <input 
                        className={classes.input} 
                        type="text" 
                        name="fullname" 
                        value={values.fullname}
                        onChange={handleChange}
                        />
                        {errors.fullname && <p className={classes.error}>{errors.fullname}</p>}
                    </div>
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ); 

}

export default SignupForm;