import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 320,
  },
});

function createData(countries) {
  const rows = [];
  for (const [key, value] of Object.entries(countries)) {
    const latest = value[value.length - 1];
    rows.push({
      country: key,
      confirmed: latest.confirmed,
      deaths: latest.deaths,
      recovered: latest.recovered,
    });
  }
  return rows.sort((a, b) => b.confirmed - a.confirmed);
}

export default function SimpleTable(props) {
  const classes = useStyles();

  const rows = createData(props.countries);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Confirmed</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.country}>
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="right">{row.confirmed}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SimpleTable.propTypes = {
  countries: PropTypes.object,
};
