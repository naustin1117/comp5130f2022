import React from 'react';
import classes from "./SignupForm.module.css";

const SignupFormSuccess = () => {
    return(
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1 className={classes.success}>Account Created!</h1>
            </div>
        </div>
    )
}

export default SignupFormSuccess;