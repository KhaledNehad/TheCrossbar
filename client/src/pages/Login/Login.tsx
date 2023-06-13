import { useState } from 'react';
import { FormControl, TextField, Input, FormHelperText } from '@mui/material';
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <form action=''>
        <FormControl>
          <TextField
            id='email'
            aria-describedby='email-helper-text'
            label='Email'
            variant='outlined'
          />
          <TextField
            id='password'
            label='password'
            variant='outlined'
            type='password'
          />
          <FormHelperText id='email-helper-text'>
            Please enter your email
          </FormHelperText>
        </FormControl>
      </form>
    </div>
  );
};

export default Login;
