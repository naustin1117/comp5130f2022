import React,{useState} from 'react';
import SigninForm from '../components/ui/SigninForm'
import Homepage from './Homepage';
  
const SignUp = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      {!formIsSubmitted ? <SigninForm submitForm={submitForm}/> : <Homepage />}
    </div>
  );
};
  
export default SignUp;
