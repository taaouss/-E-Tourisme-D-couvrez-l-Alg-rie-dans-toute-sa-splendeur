import React from 'react'
import SignUpContainer from '../SignUpContainer'
import UserInformation from '../UserInformation'
import { useState } from 'react';
function SignUp()  {
  const [currentForm, setCurrentForm] = useState('Signup');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
  <div>
      {
        currentForm === "Signup" ? <SignUpContainer onFormSwitch={toggleForm} /> : <UserInformation onFormSwitch={toggleForm} />
      }
    
  </div>
  )
}

export default SignUp