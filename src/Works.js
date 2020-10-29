import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import WorkContent from './WorkContent';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "right",
    color: '#856BC1',
  },
  content: {
    textAlign: "left",
  },
  contentbox: {
    [theme.breakpoints.down('md')]: {
      border: 0
    },
  },
}));

const works = ["Booka", "Matrix", "Around"]
const descriptions = {
  "Booka" : "A full stack iOS application of customized booklist management. \nAchieved 30k+ downloads and registrations. Get featured in Airport Community and Price Tag.",
  "Matrix" : "A location-based service android app for driving users to post alerts and receive nearby alerts such as speeding, police, traffic, drunk etc.",
  "Around" : "A twitter-like location based social network, users can create posts with images and get nearby posts",
}
const links = {
  "Booka" : "https://apps.apple.com/us/app/booka-minimal-booklist/id1116150273",
  "Matrix" : "https://github.com/zyzeng1412/Matrix-Android",
  "Around": "https://github.com/zyzeng1412/Around",
}

export default function Works() {
  const classes = useStyles();

  return(
    <div>
      {works.map((work, index) => (
      <div key={index}>
          <Grid container>
           <Hidden mdDown>
            <Grid item lg={5} className={classes.title}> 
              <Box style={{paddingRight:50}}>
                <Typography gutterBottom variant="subtitle1">
                  {work}
                </Typography>
              </Box>
            </Grid>
            </Hidden>
            <Grid item xs={12} lg={7} className={classes.content}>
              <Box borderLeft={1} style={{paddingLeft:20, paddingRight:20}} className={classes.contentbox}>
                <WorkContent title={work} description={descriptions[work]} link={links[work]}/>
              </Box>
            </Grid>
          </Grid>
      </div>
      ))}
    </div>
  );
}