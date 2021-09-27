import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@material-ui/core';

export default function BootcampDialog({ key, title, content, open, handleOpen }) {

  const id = key;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby='add-program'
        fullWidth
      >
        <DialogTitle id='responsive-title'>
          {title}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DialogContentText>
                {content}
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleOpen} variant='contained' color='secondary'>
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}