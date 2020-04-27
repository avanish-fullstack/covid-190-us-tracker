import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    display: 'inline-block'
  },

  container: {
    margin: '50px 0'
  },

  card: {
    margin: '0 2% !important'
  },

  infected: {
    borderBottom: '10px solid rgba(0,0,255,0.5)'
  },

  recovered: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
  },

  deaths: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
  }
});

const Cards = (prop) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="center">        
          <Grid item component={Card} xs={12} md={3} className={`${classes.card} ${classes.infected}`} >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>infected</Typography>
              <Typography variant="h5" >
                <CountUp start={0} end={277772} duration={2.5} separator=",">
                </CountUp>
              </Typography>
              <Typography color="textSecondary">{new Date().toDateString()}</Typography>
              <Typography variant="body2">Infected Person</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className={`${classes.card} ${classes.deaths}`} >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>infected</Typography>
              <Typography variant="h5" >
                <CountUp start={0} end={277772} duration={2.5} separator=",">
                </CountUp>
              </Typography>
              <Typography color="textSecondary">{new Date().toDateString()}</Typography>
              <Typography variant="body2">Infected Person</Typography>
            </CardContent>
          </Grid>


      </Grid>
    </div>
  );
}

export default Cards;