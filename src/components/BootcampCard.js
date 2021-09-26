import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '90vw',
    height: 150,
  },
});

export default function BootCampCard({ title, content }) {
  const classes = useStyles();

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
            <Button size="small" variant='text' color='primary'>
              Ver
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}