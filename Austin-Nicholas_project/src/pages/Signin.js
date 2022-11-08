import React from 'react';
import SigninForm from '../components/ui/SigninForm'
  
const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <SigninForm/>
    </div>
  );
};
  
export default SignUp;