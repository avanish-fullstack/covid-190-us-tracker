import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function DataTable(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Counts each day</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {props.category.map(item => <TableCell>{item.subCategory}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.reverse().map((row, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(row.dateChecked).toDateString()}</TableCell>
              {props.category.some(c => c.key.includes("positive"))? <TableCell>{row.positive}</TableCell> : null}
              {props.category.some(c => c.key.includes("negative")) ? <TableCell>{row.negative}</TableCell>:null }
              {props.category.some(c => c.key.includes("hospitalizedCurrently")) ? <TableCell>{row.hospitalizedCurrently}</TableCell>: null}
              {props.category.some(c => c.key.includes("inIcuCurrently")) ? <TableCell>{row.inIcuCurrently}</TableCell>: null}
              {props.category.some(c => c.key.includes("onVentilatorCurrently")) ? <TableCell>{row.onVentilatorCurrently}</TableCell>: null}
              {props.category.some(c => c.key.includes("recovered"))? <TableCell>{row.recovered}</TableCell>:null}
              {props.category.some(c => c.key.includes("death")) ? <TableCell>{row.death}</TableCell>: null}
              {props.category.some(c => c.key.includes("total")) ? <TableCell>{row.total}</TableCell>: null}          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default DataTable;