import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Loading from './Loading';
import { getAllUsers } from '../api/modules'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 15,
  },
}));

const Login = () => {

  const classes = useStyles();

  const [message, setMessage] = useState([]);

  useEffect(() => {
    if(message.length === 0)
      getAllUsers()
        .then((response) => {
          setMessage(response.data.Data);
          console.log(response)
        })
        .catch((error) => console.log('Error: ', error));
  }, [message]);
  console.log(message)
  return (
    <div>
      <form>
        <Paper className={classes.root}>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12} align='center'>
              <Typography variant='h5' component='h2' color='primary'>
                <b>Hackathon Gentleman Programming 2021</b>
              </Typography>
              <Typography variant='body2' color='secondary'>
                {message.length === 0 ? <Loading /> : 'connected'}
              </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
              <TextField
                variant='filled'
                label='Username'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} align='center'>
              <TextField
                variant='filled'
                label='Password'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6} align='left' size='small'>
              <Button variant='text' color='primary' size='small'>
                Sign up as user
              </Button>
            </Grid>
            <Grid item xs={6} align='right'>
              <Button variant='text' color='primary' size='small'>
                Sign up as enterprise
              </Button>
            </Grid>
            <Grid item xs={12} align='right'>
              <Button variant='contained' color='primary'>
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default Login;