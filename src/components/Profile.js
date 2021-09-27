import React from 'react';
import {
    Avatar,
  Button,
  Divider,
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
  
const Profile = () => {
    const classes = useStyles();

    return(
 <div>
      <form alignItems="center">
        <Paper className={classes.root}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} align="center">
              <Typography variant="h5" component="h2" color="primary">
              <Avatar style={{ height: '100px', width: '100px' }}></Avatar>
              </Typography>
            </Grid>

            <Grid item xs={12}>
            <TextField 
                label="User"
                variant="filled"
                placeholder="Enter a user"
                required
                className={classes.leftField}
            />

            <TextField 
                label="Full Name"
                variant="filled"
                placeholder="Enter your full name"
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
                required
                className={classes.rightField}
              />

 
              <TextField 
                label="Email"
                variant="filled"
                placeholder="Enter a valid email"
                required
                className={classes.leftField}
              />
     

              <TextField 
                label="Social Network"
                variant="filled"
                placeholder="Enter your LinkedIn profile (if you have)"
                required
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
            <Grid item xs={12} align="center">
              
              <Button variant="contained" color="primary">
                Edit User
              </Button>
              </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default Profile;
