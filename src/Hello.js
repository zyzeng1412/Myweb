import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TypedHello from './Typed.js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  hello: {
    marginTop:100,
    marginBottom:100,
  },
  contact: {
    color: "#856BC1",
  },
  button: {
    color: '#856BC1',
    "&:hover": {
      background: 'none',
    }
  }
}));

export default function Hello() {
  const classes = useStyles();
  const contacts = {"Github": "https://github.com/zyzeng1412", "Email": "mailto:zyzeng1412@gmail.com"};

  return (
    <Box m="auto" className={classes.hello}>
      <TypedHello 
        strings={[
          "<strong>Nice to meet you!</strong>",
          "<strong>I'm Ziyun Zeng</strong>",
        ]}
      />
      <Typography variant="h7">
        A software engineer <br />
      </Typography>
      <Typography variant="h7">
        <Button color="inherit" className={classes.button}>Github</Button>
        /
        <Button color="inherit" className={classes.button}>Email</Button>
      </Typography>
    </Box>
  );
}
