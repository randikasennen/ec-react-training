import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if(isValid) {
      console.log("Form is valid");
    }
    else {
      console.log("Form is invalid");
    }
  }

  const validateForm = () => {
    if(!firstName.trim().length) {
      setFirstNameError("First name is required");
    }

    if(!lastName.trim().length) {
      setLastNameError("Last name is required");
    }

    if(!_validateEmail()) {
      setEmailError("Invalid email address");
    }

    if(!firstNameError && !lastNameError && !emailError) {
      return true;
    }

    return false;
  }

  const _validateEmail = () => {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if(!pattern.test(email)) {
      return false;
    }

    return true;
  }



  return (
    <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleOnSubmit} >
        <TextInput
          label="First Name"
          name="first_name"
          value={firstName}
          onChange={(value) => setFirstName(value)}
          error={firstNameError}
        />
        
        <TextInput
          label="Last Name"
          name="last_name"
          value={lastName}
          onChange={(value) => setLastName(value)}
          error={lastNameError}
        />
        
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
          error={emailError}
        />

        <input type="submit" className="submit"/>
      </form>
    </div>
  );
}