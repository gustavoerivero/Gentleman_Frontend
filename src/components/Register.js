import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { createUser } from "../api/modules";
import CustomizedSnackbar from "./Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 15,
  },
  complete: {
    marginTop: "1em",
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

const Register = () => {
  const [passwordCheck, setPasswordCheck] = useState();

  const [res, setRes] = useState({
    OK: null,
    Message: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleOpen();
  };

  const [user, setUser] = useState({
    id: "",
    name: "",
    userName: "",
    password: "",
    email: "",
    socialNetwork: "",
    country: "",
    repository: "",
    description: "",
    idRole: "",
    token: "",
  });

  const handleChange = (input) => (e) => {
    if (user.password === passwordCheck)
      value === "user" ? (user.idRole = 1) : (user.idRole = 2);
    setUser({ ...user, [input]: e.target.value });
  };

  useEffect(() => {
    if (
      user.name !== "" &&
      user.userName !== "" &&
      user.password !== "" &&
      user.email !== "" &&
      user.country !== "" &&
      open
    )
      createUser(user)
        .then((response) => {
          setRes({
            OK: response.data.OK,
            Message: response.data.Message,
          });
          setUser(response.data.Data);
        })
        .catch((error) => {
          console.log("Error: ", error);
          res.OK = 0;
        });
    if (res.OK === 1) {
      if (user.idRole === 1) window.location.href = "/user/feed";
      if (user.idRole === 2) window.location.href = "/enterprise/feed";
    }
  });

  const classes = useStyles();
  let { value } = useParams();

  return (
    <div>
      <form alignItems="center">
        <Paper className={classes.root}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} align="center">
              <Typography variant="h5" component="h2" color="primary">
                <b>Enter {value === "user" ? "User" : "Company"} Information</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={value === "user" ? "Full Name" : "Name"}
                variant="filled"
                placeholder="Enter your full name"
                required
                value={user.name}
                onChange={handleChange("name")}
                className={classes.leftField}
              />

              <TextField
                label="Email"
                variant="filled"
                placeholder="Enter a valid email"
                required
                value={user.email}
                onChange={handleChange("email")}
                className={classes.rightField}
              />

              <TextField
                label="Username"
                variant="filled"
                placeholder="Enter a username"
                required
                value={user.userName}
                onChange={handleChange("userName")}
                className={classes.leftField}
              />

              <TextField
                label="LinkedIn"
                variant="filled"
                placeholder="Enter your LinkedIn profile (if you have)"
                value={user.socialNetwork}
                onChange={handleChange("socialNetwork")}
                className={classes.rightField}
              />

              <TextField
                label={value === "user" ? "Repository" : "Website"}
                variant="filled"
                placeholder="Enter your Github profile (if you have)"
                value={user.repository}
                onChange={handleChange("repository")}
                className={classes.leftField}
              />

              <TextField
                label="Country"
                variant="filled"
                placeholder="Enter the country where you live"
                required
                id="registerCountry"
                value={user.country}
                onChange={handleChange("country")}
                className={classes.rightField}
              />

              <TextField
                label="Password"
                variant="filled"
                placeholder="Enter a valid password"
                required
                type='password'
                value={user.password}
                onChange={handleChange("password")}
                className={classes.leftField}
              />

              <TextField
                label="Confirm Password"
                required
                type='password'
                variant="filled"
                placeholder="Please confirm your password"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
                className={classes.rightField}
              />

              <TextField
                label="Enter a brief description"
                variant="filled"
                multiline
                rows={4}
                placeholder="Enter a brief description of yourself"
                fullWidth
                value={user.description}
                onChange={handleChange("description")}
                className={classes.complete}
              />
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Sign Up
              </Button>
              <CustomizedSnackbar
                type={
                  res.OK === 1
                    ? "success"
                    : res.OK === null &&
                      user.name !== "" &&
                      user.userName !== "" &&
                      user.password !== "" &&
                      user.email !== "" &&
                      user.country !== ""
                    ? "warning"
                    : "error"
                }
                message={
                  res.OK === 1
                    ? "Welcome!"
                    : res.OK === null &&
                      user.name !== "" &&
                      user.userName !== "" &&
                      user.password !== "" &&
                      user.email !== "" &&
                      user.country !== ""
                    ? "Loading..."
                    : "Signing Up has not been possible."
                }
                open={open}
                handleClose={handleClose}
              />
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default Register;