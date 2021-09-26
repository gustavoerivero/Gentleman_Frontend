import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 15,
  },

  leftField: {
    marginTop: "1em",
    [theme.breakpoints.up("sm")]: {
      width: "47%",
      marginRight: "3%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: "0%",
    },
  },
  rightField: {
    marginTop: "1em",
    [theme.breakpoints.up("sm")]: {
      width: "47%",
      marginLeft: "3%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "0%",
    },
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
                <b>Enter User Information</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="filled"
                placeholder="Enter your full name"
                required
                className={classes.leftField}
              />

              <TextField
                label="Email"
                variant="filled"
                placeholder="Enter a valid email"
                required
                className={classes.rightField}
              />

              <TextField
                label="User"
                variant="filled"
                placeholder="Enter a user"
                required
                className={classes.leftField}
              />

              <TextField
                label="LinkedIn"
                variant="filled"
                placeholder="Enter your LinkedIn profile (if you have)"
                className={classes.rightField}
              />

              <TextField
                label="Repository"
                variant="filled"
                placeholder="Enter your Github profile (if you have)"
                className={classes.leftField}
              />

              <TextField
                label="Country"
                variant="filled"
                placeholder="Enter the country where you live"
                required
                className={classes.rightField}
              />

              <TextField
                label="Password"
                variant="filled"
                placeholder="Enter a valid password"
                required
                className={classes.leftField}
              />

              <TextField
                label="Confirm Password"
                required
                variant="filled"
                placeholder="Please confirm your password"
                className={classes.rightField}
              />

              <TextField
                label="Enter a brief description"
                variant="filled"
                multiline
                rows={4}
                placeholder="Enter a brief description of yourself"
                required
                fullWidth
                className={classes.complete}
              />
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default Login;
