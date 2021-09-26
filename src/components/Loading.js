import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} >
        <CircularProgress color='primary' />
      </Backdrop>
    </div>
  );
}
