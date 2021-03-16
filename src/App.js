import { useState } from 'react';
import api from './api/api.js';
import './App.css';
import TextInput from './components/TextInput';
import FileInput from './components/FileInput';
import ValidateForm from './utils/ValidateForm';
import ReadFileAsDataURL from './utils/FileReader';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [document, setDocument] = useState('');
  const [errors, setErrors] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    const data = { firstName, lastName, email, avatar, document };

    const errors = ValidateForm(data);
    setErrors(errors);

    if(!Object.keys(errors).length) {
      api.post('/users', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
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
          error={errors.firstNameError}
        />
        
        <TextInput
          label="Last Name"
          name="last_name"
          value={lastName}
          onChange={(value) => { setLastName(value); delete errors.lastNameError }}
          error={errors.lastNameError}
        />
        
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={(value) => { setEmail(value); delete errors.emailError }}
          error={errors.emailError}
        />

        <FileInput
          label="Profile Picture"
          name="avatar"
          onChange={(file) => { ReadFileAsDataURL(file, setAvatar); }}
          error={errors.emailError}
        />

        <FileInput
          label="Document"
          name="document"
          onChange={(file) => { ReadFileAsDataURL(file, setDocument); }}
          error={errors.emailError}
        />

        <input type="submit" className="submit"/>
      </form>
    </div>
  );
}