import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../DataTable';

const createTableData = (countriesData) => {
  const rows = [];
  for (const [key, value] of Object.entries(countriesData)) {
    const latest = value[value.length - 1];
    rows.push({
      country: key,
      confirmed: latest.confirmed,
      deaths: latest.deaths,
      recovered: latest.recovered,
    });
  }
  return rows;
};

const tableHeaderValues = [
  {
    title: 'Country',
    id: 'country',
  },
  {
    title: 'Confirmed',
    id: 'confirmed',
  },
  {
    title: 'Deaths',
    id: 'deaths',
  },
  {
    title: 'Recovered',
    id: 'recovered',
  },
];

const DataViews = (props) => {
  return (
    <div>
      <DataTable
        headerValues={tableHeaderValues}
        data={createTableData(props.countriesData)}
      />
    </div>
  );
};

DataViews.propTypes = {
  countriesData: PropTypes.object,
};

export default DataViews;
