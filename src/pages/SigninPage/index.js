import { useState } from 'react';
import './index.css';
import api from '../../api/api.js';
import { signin } from '../../api/auth.js';
import { TextInput } from '../../components';

export default function SignPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(email.length && password.length) {
      if(signin(email, password)) {
        props.history.push('/users');
      }
      else {
        console.log("Unauthorized")
      }
    }
    else {
      console.log("Form is invalid");
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleOnSubmit} >
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={(value) => { setEmail(value) }}
        />

        <TextInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(value) => { setPassword(value) }}
        />

        <input type="submit" className="submit"/>
      </form>
    </div>
  );
}