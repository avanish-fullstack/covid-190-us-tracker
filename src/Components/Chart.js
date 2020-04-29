import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AreaChart, Area, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { Tooltip } from '@material-ui/core';

export default function Chart(props) {
  const theme = useTheme();
   
  return (
    <React.Fragment>
      <Title>{props.cat}</Title>
      <ResponsiveContainer>
        <AreaChart
          width= {500}
          height={400}
          data={props.timeSeries}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="dateChecked" />
          <YAxis>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >            
            </Label>
          </YAxis>
          <Tooltip/>
          <Area type="monotone" dataKey="recovered" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="death" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}