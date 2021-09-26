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
  }));

const Profile = () => {
    const classes = useStyles();

    return(
        <div>
             <form alignItems='center'>
                
                <Paper className={classes.root}>
                    <Grid container spacing={2} justifyContent='center'>
                    <Avatar className={classes.large} className={classes.Purple} >
                        U
                    </Avatar>           


                    
							<TextField
							label="User"
							variant="filled"
							placeholder="Enter a username"
							required
							className={classes.leftField}
							/>


                        <Grid item xs={12} align='center'>
                         <TextField
                            variant='filled'
                            label='Fullname'
                            fullWidth
                            required
                            placeholder="Type your name"
                            required
                           


                            />
                        </Grid>

                        <Grid item xs={12} align='center'>
                         <TextField
                            variant='filled'
                            label='Email'
                            fullWidth
                            required
                            />
                        </Grid>


                        <Grid item xs={12} align='center'>
                         <TextField
                            variant='filled'
                            label='Social Network'
                            fullWidth
                            required
                            />
                        </Grid>


                        <Grid item xs={12} align='center'>
                         <TextField
                            variant='filled'
                            label='Country'
                            fullWidth
                            required
                            />
                        </Grid>


                        <Grid item xs={12} align='center'>
                         <TextField
                            variant='filled'
                            label='Repository'
                            fullWidth
                            required
                            />
                        </Grid>


                        <Grid item xs={12} align='center'>
                         <TextField
                            variant='filled'
                            label='Description'
                            fullWidth
                            required
                            />
                        </Grid>


                        <Grid item xs={12} align='center'>
                            <Button variant='contained' color='primary'>
                                Edit Profile 
                            </Button>
                        </Grid>                     

                     </Grid>
                </Paper>

             </form>
        </div>
    );

}





export default Profile;
