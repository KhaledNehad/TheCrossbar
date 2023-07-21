import { FormControl, TextField, FormHelperText, Button } from '@mui/material'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  [key: string]: string
}

const Login = () => {
  const [values, setValues] = useState<FormValues>({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('authenticated') || false
  )
  const users = [{ username: 'khaled', password: '123' }]

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const account = users.find((user) => user.username === values.username)

    if (account && account.password === values.password) {
      setAuthenticated(true)
      localStorage.setItem('authenticated', 'true')
      navigate('/homepage')
    }

    console.log(authenticated)
    // if (account && account.password === values.password) {
    //   setAuthenticated(true);
    // }
  }

  return (
    <div style={{ marginTop: '25px' }}>
      <form action="" onSubmit={submit}>
        <FormControl>
          <TextField
            id="username"
            aria-describedby="email-helper-text"
            label="Username"
            name="username"
            variant="outlined"
            value={values.username}
            onChange={handleOnChange}
          />
          <TextField
            id="password"
            label="password"
            variant="outlined"
            name="password"
            type="password"
            value={values.password}
            onChange={handleOnChange}
          />
          <FormHelperText id="email-helper-text">
            Please enter your email
          </FormHelperText>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

export default Login
