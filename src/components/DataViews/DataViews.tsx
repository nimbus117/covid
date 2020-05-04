import React from 'react';
import PropTypes from 'prop-types';
import DataTable from '../DataTable/DataTable';
import { CountriesObj } from '../../types';

type DataViewsProps = {
  countriesData: CountriesObj;
};

const DataViews = ({ countriesData }: DataViewsProps): JSX.Element => {
  return <DataTable data={countriesData} />;
};

DataViews.propTypes = {
  countriesData: PropTypes.object.isRequired,
};

export default DataViews;
