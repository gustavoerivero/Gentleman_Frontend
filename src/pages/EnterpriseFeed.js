import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from '../components/AppBar';
import BootcampCard from '../components/BootcampCard';
import '@fontsource/roboto';
import '../assets/css/main.css';
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  container: {
    marginBottom: 50,
  },
}))

export default function EnterpriseFeed() {
  let { value } = useParams();

  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);

  //ejemplo de infinite scroll
 /* useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)
      .then(res => res.json())
      .then(json => setState([...state, ...json.data]));
    console.log(page);
  }, [page]); */

  const scrollToEnd = () => {
    setPage(page + 1);
  }

  window.onscroll = function () {
    const offsetHeight = document.documentElement.offsetHeight;
    const sum = window.innerHeight + document.documentElement.scrollTop;
    console.log('Is equal: ', offsetHeight === sum);
    if (sum === offsetHeight) {
      scrollToEnd();
    }
  }

  const classes = useStyles();

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center' className={classes.root}>
      <Grid item>
        <CssBaseline />
      </Grid>
      <Grid item xs={12} align='center' className={classes.container}>
        <Appbar userType={2} title='My bootcamps' />
      </Grid>
      {
        state.length > 0 && state.map((el, i) => {
          return(
            <Grid item xs={12} key={i} align='center'>
              <BootcampCard id={i} title={el.name} content={el._id} userType={value === 'user' ? 1 : 2} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}
