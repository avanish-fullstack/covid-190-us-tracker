import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AreaChart, Area, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { Tooltip } from '@material-ui/core';

export default function Chart(props) {
  const theme = useTheme();

  function getTitle() {
    let subCategories = props.category.map(c => c.subCategory);
    return subCategories.join(" / ");
  }

  function getStrokeColor(subCategory) {
    switch (subCategory) {
      case "Recovery":
      case "Infected":
      case "Tested":
        return "rgba(0, 0, 255, 0.7)";
      case "Hospitalized":
      case "Negative":
        return "rgba(0, 255, 0, 0.7)";
      case "Death":
      case "ICU":
      case "Ventilator":
      case "Positive":
        return "rgba(255, 0, 0, 0.7)";
    }

  }
  return (
    <React.Fragment>
      <Title>Last 30 days {getTitle()}</Title>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={props.timeSeries.reverse()}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="dateChecked" tick={false} />
          <YAxis>
            <Label
              angle={100}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
            </Label>
          </YAxis>
          <Tooltip />
          {props.category.map(item =>
            <Area type="monotone" dataKey={item.key} stroke={getStrokeColor(item.subCategory)} fill={getStrokeColor(item.subCategory)} />
          )};
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}