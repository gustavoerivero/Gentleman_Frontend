import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from '../components/AppBar';
import BootcampCard from '../components/BootcampCard';
import '@fontsource/roboto';
import '../assets/css/main.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  container: {
    marginBottom: 50,
  },
}))

export default function LoginPage() {

  const classes = useStyles();

  const example = [
    {
      title: 'Empresa 1',
      desc: 'Primera empresa',
    },
    {
      title: 'Empresa 2',
      desc: 'Segunda empresa',
    },
    {
      title: 'Empresa 3',
      desc: 'Tercera empresa',
    },
    {
      title: 'Empresa 4',
      desc: 'Cuarta empresa',
    },
    {
      title: 'Empresa 5',
      desc: 'Quinta empresa',
    },
  ]

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center' className={classes.root}>
      <Grid item>
        <CssBaseline />
      </Grid>
      <Grid item xs={12} align='center' className={classes.container}>
        <Appbar title='Mis bootcamps'/>
      </Grid>
      {
        example.map((element, i) => (
          <Grid item xs={12} key={i} align='center'>
            <BootcampCard title={element.title} content={element.desc} />
          </Grid>
        ))
      }
    </Grid>
  )
}
