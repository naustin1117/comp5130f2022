import React, {useState} from 'react';
import SignupForm from '../components/ui/SignupForm'
import SignupFormSuccess from '../components/ui/SignupFormSuccess';
  
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
      {!formIsSubmitted ? <SignupForm submitForm={submitForm}/> : <SignupFormSuccess />}
    </div>
  );
};
  
export default SignUp;