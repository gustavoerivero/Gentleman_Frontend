import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@material-ui/core';
import BootcampForm from './BootcampForm';

export default function BootcampDialog({ userType, enterpriseId, id, title, content, open, handleOpen }) {

  const key = id;

  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  }

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
          <Button onClick={handleOpen} variant='contained' color='secondary'>
            Back
          </Button>
          {
            userType === 2 ?
              <Button autoFocus onClick={handleOpenForm} variant='contained' color='primary'>
                Edit
              </Button>
              : ''
          }
          <BootcampForm
            id={key}
            enterpriseId={enterpriseId}
            add={false}
            open={openForm}
            handleOpen={handleOpenForm}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}