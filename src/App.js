import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import ValidateForm from './utils/ValidateForm';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = { firstName, lastName, email };

    const errors = ValidateForm(data);
    setErrors(errors);

    if(!Object.keys(errors).length) {
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
          onChange={(value) => { setFirstName(value); delete errors.firstNameError }}
          error={errors.hasOwnProperty('firstNameError') && errors.firstNameError}
        />
        
        <TextInput
          label="Last Name"
          name="last_name"
          value={lastName}
          onChange={(value) => { setLastName(value); delete errors.lastNameError }}
          error={errors.hasOwnProperty('lastNameError') && errors.lastNameError}
        />
        
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={(value) => { setEmail(value); delete errors.emailError }}
          error={errors.hasOwnProperty('emailError') && errors.emailError}
        />

        <input type="submit" className="submit"/>
      </form>
    </div>
  );
}