import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Grid,
  Tooltip,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VFXProvider, VFXImg, VFXSpan } from 'react-vfx';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import dontWork from '../assets/img/dontWork.png';

import '../assets/css/error404.css';
import '@fontsource/roboto';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    alignContent: 'center',
    padding: '50px 50px 0px 0px',
    backgroundColor: '#303030',
    margin: '0px'
  },
  body: {
    backgroundColor: '#303030',
    padding: '0px',
    margin: '0',
    color: '#303030',
    minHeight: '100vh',
    minWidth: '100vw',
  },
}));

export default function PageNotFound(props) {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <VFXProvider>
        <Grid
          container spacing={2}
          justify='center'
          className={classes.root}
        >
          <Grid item xs={12} sm={12} md={9} lg={6} xl={6} justify='center'>
            <Typography align='center'>
              <VFXImg src={dontWork} shader='rgbShift' overflow width='80%' />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant='h2' color='primary' align='center'>
              We are very sorry!
            </Typography>
            <Typography variant='h5' color='primary' align='center'>
              We could not find the page you are looking for.
            </Typography>
            <Typography variant='body1' color='primary' align='center'>
            You should try going back to the beginning to see if you find what you want.
            </Typography>
            <Typography align='center'>
              <Tooltip title='Home' aria-label='Inicio' placement='right'>
                <IconButton component={Link} to='/' color='primary'>
                  <HomeOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Typography>
            <Typography variant='h6' align='center' color='primary'>
              <VFXSpan shader='glitch'>_____Error:_404._Page_Not_Found_____</VFXSpan>
            </Typography>
          </Grid>
        </Grid>
      </VFXProvider>
    </div>
  )
}