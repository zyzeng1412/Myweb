import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "right",
    // color: '#856BC1',
  },
  content: {
    textAlign: "left",
  }
}));

export default function Works() {
  const classes = useStyles();
  return(
    <div>
      <Grid container>
          <Grid item xs={5} className={classes.title}> 
            <Box style={{paddingRight:50}}>
              Booka
            </Box>
          </Grid>
          <Grid item xs={7} className={classes.content}>
            <Box borderLeft={1} style={{paddingLeft:20}}>
              Test <br />
              Test
            </Box>
          </Grid>
      </Grid>
    </div>
  );
}