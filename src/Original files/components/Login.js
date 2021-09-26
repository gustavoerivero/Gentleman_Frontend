import React from 'react';
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 15,
  },
}));

const Login = () => {

  const classes = useStyles();

  return (
    <div>
      <form alignItems='center'>
        <Paper className={classes.root}>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12} align='center'>
              <Typography variant='h5' component='h2' color='primary'>
                <b>Hackathon Gentleman Programming 2021</b>
              </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
              <TextField
                variant='filled'
                label='Usuario'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} align='center'>
              <TextField
                variant='filled'
                label='Contraseña'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6} align='left' size='small'>
              <Button variant='text' color='primary' size='small'>
                Registrar usuario
              </Button>
            </Grid>
            <Grid item xs={6} align='right'>
              <Button variant='text' color='primary' size='small'>
                Registrar empresa
              </Button>
            </Grid>
            <Grid item xs={12} align='right'>
              <Button variant='contained' color='primary'>
                Entrar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default Login;