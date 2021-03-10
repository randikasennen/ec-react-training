import { useState } from 'react';
import TextInput from './components/TextInput';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(firstName);
    console.log(lastName);
    console.log(email);
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
        />
        
        <TextInput
          label="Last Name"
          name="last_name"
          value={lastName}
          onChange={(value) => setLastName(value)}
        />
        
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}