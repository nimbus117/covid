import React from 'react';
import PropTypes from 'prop-types';
import { HeaderValue, TableSortRequester } from '../../types';

type DataTableHeaderProps = {
  headerValues: HeaderValue[];
  requestSort: TableSortRequester;
};

const DataTableHeader = ({
  headerValues,
  requestSort,
}: DataTableHeaderProps): JSX.Element => (
  <thead>
    <tr>
      {headerValues.map((hv) => (
        <th onClick={(): void => requestSort(hv)} key={hv.id}>
          {hv.title}
        </th>
      ))}
    </tr>
  </thead>
);

DataTableHeader.propTypes = {
  headerValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestSort: PropTypes.func,
};

export default DataTableHeader;
