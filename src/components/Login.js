import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
      <form alignItems="center">
        <Paper className={classes.root}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} align="center">
              <Typography variant="h5" component="h2" color="primary">
                <b>Hackathon Gentleman Programming 2021</b>
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <TextField variant="filled" label="User" fullWidth required />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField variant="filled" label="Password" fullWidth required />
            </Grid>
            <Grid item xs={6} align="left" size="small">
              <Button
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to={{
                  pathname: "/register-page/user",
                }}
              >
                Sign Up as User
              </Button>
            </Grid>
            <Grid item xs={6} align="right">
              <Button
                variant="text"
                color="primary"
                size="small"
                component={Link}
                to={{
                  pathname: "/register-page/company",
                }}
              >
                Sign Up as Company
              </Button>
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default Login;
