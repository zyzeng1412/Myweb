import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    maxWidth: 500,
    whiteSpace: "pre-wrap",
  },
  media: {
    height: 400,
  },
});

const WorkContent = ({ classes, title, description }) => (
  <Card className={classes.root} elevation={0}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL+"images/"+title+".png"}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default withStyles(styles)(WorkContent);