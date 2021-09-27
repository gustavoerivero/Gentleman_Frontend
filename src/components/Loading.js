import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <div>
      <Backdrop open={true} >
        <CircularProgress color='primary' />
      </Backdrop>
    </div>
  );
}
