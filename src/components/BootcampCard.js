import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BootcampDialog from './BootcampDialog';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '90vw',
    height: 150,
  },
});

export default function BootCampCard({ userType, enterpriseId, id, title, content }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container justifyContent='center'>
        <Grid item xs={10} md={11}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom align='left'>
              {title}
            </Typography>
            <Typography variant="body2" component="p" align='left'>
              {content}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2} md={1} align='right'>
          <CardActions>
            <Button size='small' variant='text' color='primary' onClick={handleOpen}>
              {userType === 0 ? "Apply" : "View"}
            </Button>
            <BootcampDialog 
              id={id}
              enterpriseId={enterpriseId}
              title={title}
              content={content}
              open={open}
              handleOpen={handleOpen}
              userType={userType}
            />
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}