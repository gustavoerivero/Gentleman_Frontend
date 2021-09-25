import React from 'react';
import {
  CssBaseline,
  Grid,
  Typography
} from '@material-ui/core';
import '@fontsource/roboto';

export default function LoginPage() {
  return (
    <div>
      <CssBaseline />
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h2' component='h1' color='secondary' align='center'>
            Gentleman Programming 2021
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
