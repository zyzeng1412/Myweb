import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid'

const styles = (theme) => ({
  root: {
    maxWidth: 500, 
    whiteSpace: "pre-wrap",
    paddingBottom: 40,
  },
  media: {
    height: 350, 
  },
  grid: {
    [theme.breakpoints.down('md')]: {
      alignItems:"center",
    },
  },
});

const WorkContent = ({ classes, title, description, link }) => (
  <Grid
  container
  spacing={0}
  direction="column"
  className={classes.grid}
 >
  <Card className={classes.root} elevation={0}>
    <CardActionArea href={link}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL+"images/"+title+".png"}
        title={title}
      />
      <CardContent>
        <Hidden lgUp>
          <Typography gutterBottom variant="subtitle1">
            {title}
          </Typography>
        </Hidden>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Grid>
);

export default withStyles(styles)(WorkContent);