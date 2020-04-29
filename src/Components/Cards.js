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
    borderTop: '20px solid rgba(0,0,255,0.7)'
  },

  recovered: {
    borderTop: '20px solid rgba(0, 255, 0, 0.7)'
  },

  deaths: {
    borderTop: '20px solid rgba(255, 0, 0, 0.7)'
  }
});

const Cards = (props) => {
  const classes = useStyles();  

  function getClassNames(category) {
    let catClass = "";
    let baseClass = `${classes.card}`;

    switch (category) {
      case "Recovery":
        catClass = `${classes.infected}`;
        break;
      case "Death":
        catClass = `${classes.deaths}`;
        break;
      case "Hospitalized":
        catClass = `${classes.recovered}`;
        break;
      case "Infected":
        catClass = `${classes.infected}`;
        break;
      case "ICU":
        catClass = `${classes.deaths}`;
        break;
      case "Ventilator":
        catClass = `${classes.deaths}`;
        break;
      case "Tested":
        catClass = `${classes.infected}`;
        break;
      case "Positive":
        catClass = `${classes.deaths}`;
        break;
      case "Negative":
        catClass = `${classes.recovered}`;
        break;
    }
    return `${baseClass} ${catClass}`;
  }

  console.log(props.category);
  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="left">
        {props.category.map((item) =>
          <Grid key={item.subCategory} item component={Card} xs={12} md={3} className={getClassNames(item.subCategory)} >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>{item.subCategory}</Typography>
              <Typography variant="h5" >
                <CountUp start={0} end={item.value} duration={2.5} separator=",">
                </CountUp>
              </Typography>
              <Typography color="textSecondary">{new Date().toDateString()}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Cards;