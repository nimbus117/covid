import React from 'react';
import PropTypes from 'prop-types';
import './DataTableHeader.css';
import { HeaderValue, TableSortRequester } from '../../types';

type DataTableHeaderProps = {
  headerValues: HeaderValue[];
  requestSort: TableSortRequester;
  idPrefix: string;
};

const DataTableHeader = ({
  headerValues,
  requestSort,
  idPrefix,
}: DataTableHeaderProps): JSX.Element => (
  <thead>
    <tr>
      {headerValues.map((hv) => (
        <th
          id={idPrefix + hv.id}
          onClick={(): void => requestSort(hv)}
          key={hv.id}
        >
          {hv.title}
        </th>
      ))}
    </tr>
  </thead>
);

DataTableHeader.propTypes = {
  headerValues: PropTypes.array,
  requestSort: PropTypes.func,
  idPrefix: PropTypes.string,
};

export default DataTableHeader;
