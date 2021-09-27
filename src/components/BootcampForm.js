import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField
} from '@material-ui/core';

export default function BootcampForm({ id, enterpriseId, add, open, handleOpen }) {

  const [bootcamp, setBootcamp] = useState({
    idUser: enterpriseId,
    name: '',
    description: ''
  });

  useEffect(() => {
    if(id !== '' && bootcamp.name === '')
      console.log(enterpriseId);
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form>
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby='add-program'
        fullWidth
      >
        <DialogTitle id='responsive-title'>
          {add ? 'Add a new bootcamp' : 'Editing a bootcamp'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DialogContentText>
                {add ? 'Enter the requested data to add a new bootcamp.' : 
                  'Enter the requested data to edit the selected bootcamp.'}
              </DialogContentText>
            </Grid>
            <Grid item xs={12}>
              <TextField 
                required
                fullWidth
                label='Bootcamp name'
                value={name}
                variant='filled'
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                required
                fullWidth
                label='Bootcamp description'
                value={description}
                variant='filled'
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen} variant='contained' color='secondary'>
            Back
          </Button>
          <Button autofocus variant='contained' color='primary'>
            {add ? 'Add' : 'Edit '}
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}