import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../components/Login';
import '@fontsource/roboto';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  }
}))

export default function LoginPage() {

  const classes = useStyles();

  return (
    <Grid container justifyContent='center' alignItems='center' className={classes.root}>
      <Grid item>
        <CssBaseline />
      </Grid>
      <Grid item xs={12} align='center'>
        <Login />
      </Grid>
    </Grid>
  )
}
