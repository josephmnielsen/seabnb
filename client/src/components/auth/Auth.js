import { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import User from '../../utils/User'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'


const initialState = { name: '', email: '', password: '' }

const Auth = () => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)

  const [loginState, setLoginState] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })


  const handleInputChange = ({ target }) => {
    setLoginState({ ...loginState, [target.name]: target.value })
  }

  const handleRegister = () => {
    User.register({
      name: loginState.name,
      username: loginState.email,
      email: loginState.email,
      password: loginState.password
      })
    .then(() => {
        alert('User registered!')
      setLoginState({ ...loginState, name: '', email: '', password: '' })
    })
    .catch(err => console.log(err))
  }

  const handleLogin = async event => {
    await User.login({
      email: loginState.email,
      password: loginState.password
    })
      .then(({ data }) => {
        localStorage.setItem('user', data)
        window.location = '/'
      })
      .catch(err => console.log(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    isSignup ? handleRegister() : handleLogin()
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    handleShowPassword(false)
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleInputChange} half />
                <Input name="lastName" label="Last Name" handleChange={handleInputChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleInputChange} type="email" />
            <Input name="password" label="Password" handleChange={handleInputChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleInputChange} type="password" />}
          </Grid>
          <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>

          </Grid>

        </form>
      </Paper>
    </Container>
  )
}
export default Auth