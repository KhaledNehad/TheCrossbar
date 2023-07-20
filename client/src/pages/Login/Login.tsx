import { useState } from 'react';
import { FormControl, TextField, FormHelperText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('authenticated') || false
  );
  const users = [{ username: 'khaled', password: '123' }];

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const submit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const account = users.find((user) => user.username === values.username);

    if (account && account.password === values.password) {
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
      navigate('/homepage');
    }

    console.log(authenticated);
    // if (account && account.password === values.password) {
    //   setAuthenticated(true);
    // }
  };

  return (
    <div style={{ marginTop: '25px' }}>
      <form action='' onSubmit={submit}>
        <FormControl>
          <TextField
            id='username'
            aria-describedby='email-helper-text'
            label='Username'
            name='username'
            variant='outlined'
            value={values.username}
            onChange={handleOnChange}
          />
          <TextField
            id='password'
            label='password'
            variant='outlined'
            name='password'
            type='password'
            value={values.password}
            onChange={handleOnChange}
          />
          <FormHelperText id='email-helper-text'>
            Please enter your email
          </FormHelperText>
          <Button type='submit' variant='contained'>
            Login
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Login;
