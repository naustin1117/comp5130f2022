import React, {useState} from "react";
import classes from "./SignupForm.module.css";
import useForm from "./useForm";

const SignupForm = ({ submitForm }) => {

    const[returnData, setReturnData] = useState(['hi there']);
    const {handleChange, handleFormSubmit, values, errors} = useForm(submitForm);
    //const [user, setUser] = useState({UserID: 0, Fullname: "", Email: "", Password: ""});

    //These are calls to the database
    const getData = async (url) => {
        const newData = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: values.Username
        })
        })
        .then(res => res.json());
        console.log(newData);
        setReturnData(newData[0]);
    }


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
                        {errors.password && <p className={classes.error}>{errors.Password}</p>}
                    </div>
                    <div>
                        <button className={classes.submit} onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                    <div>
                        <p>UserID: {returnData.UserID}</p>
                        <p>{values.username}</p>
                    </div>
                </form>
            </div>
        </div>
    ); 

}

export default SignupForm;