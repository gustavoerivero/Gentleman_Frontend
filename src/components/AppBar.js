import React from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import {
  CssBaseline,
  Button,
  Drawer,
  AppBar,
  Divider,
  IconButton,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GroupIcon from '@material-ui/icons/Group';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'left',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    flexGrow: 1,
  },
  copyright: {
    paddingTop: '60vh',
    paddingRight: 5,
  },
}));


export default function Appbar({ title, subtitle }) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color='default'
      >
        <Toolbar variant='dense'>
          <IconButton
            color='primary'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='primary' className={classes.title}>
            <b>{ title }</b>
          </Typography>
          <Button size='small' color='primary' variant='contained'>
            Agregar bootcamp
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color='primary' /> : <ChevronRightIcon color='primary' />}
          </IconButton>
        </div>
        <Divider />
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <GroupIcon color='primary' />
            </ListItemIcon>
            <ListItemText secondary='Lista de usuarios' />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AccountBoxIcon color='primary' />
            </ListItemIcon>
            <ListItemText secondary='Mi perfil' />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ExitToAppIcon color='primary' />
            </ListItemIcon>
            <ListItemText secondary='Cerrar sesión' />
          </MenuItem>
        </MenuList>
        <Divider />
        <Typography variant='body2' component='p' color='primary' align='right' className={classes.copyright}>
          &#169; 2021 | <b>Flamethyst Programming</b>
        </Typography>
      </Drawer>
    </div>
  );
}