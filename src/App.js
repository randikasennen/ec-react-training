import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import ValidateForm from './utils/ValidateForm';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = { firstName, lastName, email };

    const errors = ValidateForm(data);
    setFirstNameError(errors.firstNameError);
    setLastNameError(errors.lastNameError);
    setEmailError(errors.emailError);

    if(!firstNameError.length && !lastNameError.length && !emailError.length) {
      console.log("Form is valid");
    }
    else {
      console.log("Form is invalid");
    }
  }

  return (
    <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleOnSubmit} >
        <TextInput
          label="First Name"
          name="first_name"
          value={firstName}
          onChange={(value) => { setFirstName(value); setFirstNameError(null) }}
          error={firstNameError}
        />
        
        <TextInput
          label="Last Name"
          name="last_name"
          value={lastName}
          onChange={(value) => { setLastName(value); setLastNameError(null) }}
          error={lastNameError}
        />
        
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={(value) => { setEmail(value); setEmailError(null) }}
          error={emailError}
        />

        <input type="submit" className="submit"/>
      </form>
    </div>
  );
}