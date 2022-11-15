const validation = (values) => {
    let errors={};
    if(!values.Username){
        errors.Username="Name is required."
    }
    if(!values.Email){
        errors.Email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.Email)){
        errors.Email="Email is invalid."
    }
    if(!values.Password){
        errors.Password="Password is required"
    } else if(values.Password.length < 5) {
        errors.Password="Password must be longer than 5 characters."
    }

    return errors;
}

export default validation;