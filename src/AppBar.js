import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: 'white',
    color: 'black'
  },
  button: {
    "&:hover": {
      background: 'none',
      color: '#856BC1',
    }
  }
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.menu}>
        <Toolbar>
          <Button color="inherit" className={classes.button}>Ziyun Zeng</Button>
          <Button color="inherit" className={classes.button} style={{marginLeft: 'auto'}}>Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}