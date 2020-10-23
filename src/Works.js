import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import WorkContent from './WorkContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "right",
    // color: '#856BC1',
  },
  content: {
    textAlign: "left",
  }
}));

const works = ["Booka", "Matrix"]
const descriptions = {
  "Booka" : "Developed and maintained a full stack iOS application of customized booklist management; achieved 15k+ downloads and registrations. \nProvided key features such as keyword search, syncing on multiple devices, barcode and QR scanning. \nDesigned and developed frontend services using Swift and data storage and management using Realm Swift. \nImplemented the user interface by collaborating with designers; released multiple updates and improved user experience via communicating with customers to provide product guideline and collecting feedback.",
  "Matrix" : "A location-based service android app for driving users to post alerts and receive nearby alerts such as speeding, police, traffic, drunk etc."
}

export default function Works() {
  const classes = useStyles();

  return(
    <div>
      {works.map((work, index) => (
      <Grid container key={index}>
        <Grid item xs={5} className={classes.title}> 
          <Box style={{paddingRight:50}}>
            <Typography gutterBottom variant="subtitle1">
              {work}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={7} className={classes.content}>
          <Box borderLeft={1} style={{paddingLeft:20, paddingRight:20}}>
            <WorkContent title={work} description={descriptions[work]}/>
          </Box>
        </Grid>
      </Grid>
      ))}
    </div>
  );
}