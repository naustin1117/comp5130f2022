import React from "react";
import classes from "./SignupForm.module.css";
import {useState} from "react";

const NewItemForm = () => {

    const [values, setValues] = useState({
        UserID: 1000,
        Username:"",
        Email:"",
        Password:""
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };

    return (
        <div className={classes.container}>
        <div className={classes.wrapper}>
            <div>
                <h1 className={classes.header}>Post Item</h1>
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
                    <button className={classes.submit}>
                        List Item
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
  };
  
  export default NewItemForm;
  