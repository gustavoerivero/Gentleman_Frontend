import React, { useState, useEffect } from 'react'
import {
  Button,
  Grid,
  InputAdornment,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Loading from './Loading'
import CustomizedSnackbar from './Snackbar'
import { login } from '../api/modules'
import { Link } from "react-router-dom";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 15,
  },
}))

const Login = () => {

  const classes = useStyles()
  let { value } = useParams();
  
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  const [res, setRes] = useState({
    OK: null,
    Message: '',
  })

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);    
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    handleOpen();
  };

  const [user, setUser] = useState({
    id: '',
    name: '',
    userName: '',
    password: '',
    email: '',
    socialNetwork: '',
    country: '',
    repository: '',
    description: '',
    idRole: '',
    token: ''
  })

  const handleChange = (input) => (e) => {
    setUser({ ...user, [input]: e.target.value })
  };

  useEffect(() => {
    if (user.userName !== '' && user.password !== '' && open)
      login(user)
        .then((response) => {
          setRes({
            OK: response.data.OK,
            Message: response.data.Message
          })
          setUser(response.data.Data)
        })
        .catch((error) => {
          console.log('Error: ', error)
          res.OK = 0
        })
    if (res.OK === 1) {
      if (user.idRole === 1)
        window.location.href = '/user/feed'
      if (user.idRole === 2)        
        window.location.href = '/enterprise/feed'
    }
  })

  return (
    <div>
      <form>
        <Paper className={classes.root}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} align="center">
              <Typography variant="h5" component="h2" color="primary">
                <b>Hackathon Gentleman Programming 2021</b>
              </Typography>
              {res.OK === 0 || res.OK === null ? <Loading /> : ''}
            </Grid>
            <Grid item xs={12} align='center'>
              <TextField
                variant='filled'
                label='Username'
                fullWidth
                required
                value={user.userName}
                onChange={handleChange('userName')}
              />
            </Grid>
            <Grid item xs={12} align='center'>
              <TextField
                variant='filled'
                label='Password'
                fullWidth
                required
                type={showPassword ? 'text' : 'password'}
                value={user.password}
                onChange={handleChange('password')}
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        color='secondary'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={6} align='left' size='small'>
              <Button variant='text' color='primary' size='small'       component={Link}
                to={{
                  pathname: "/register-page/user",
                }}>
                Sign up as user
              </Button>
            </Grid>
            <Grid item xs={6} align='right'>
              <Button variant='text' color='primary' size='small'  component={Link}
                to={{
                  pathname: "/register-page/company",
                }}>
                Sign up as enterprise
              </Button>
            </Grid>
            <Grid item xs={12} align='right'>
              <Button variant='contained' color='primary' onClick={handleOpen}>
                Sign in
              </Button>
              <CustomizedSnackbar
                type={ res.OK === 1 ? 
                  'success' :                    
                  res.OK === null && user.userName !== '' && user.password !== '' ? 'warning' : 'error'}
                message={res.OK === 1 ? 'Welcome!' : 
                  res.OK === null && user.userName !== '' && user.password !== '' ? 'Loading...' : 'Login has not been possible.' }
                open={open}
                handleClose={handleClose}
              />
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  )
}

export default Login
