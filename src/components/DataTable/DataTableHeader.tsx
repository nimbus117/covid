import React from 'react';
import PropTypes from 'prop-types';
import './DataTableHeader.css';
import { HeaderValue, TableDataSorter } from '../../types';

type DataTableHeaderProps = {
  headerValues: HeaderValue[];
  sorter: TableDataSorter;
  idPrefix: string;
};

const DataTableHeader = ({
  headerValues,
  sorter,
  idPrefix,
}: DataTableHeaderProps): JSX.Element => (
  <thead>
    <tr>
      {headerValues.map((hv) => (
        <th id={idPrefix + hv.id} onClick={sorter} key={hv.id}>
          {hv.title}
        </th>
      ))}
    </tr>
  </thead>
);

DataTableHeader.propTypes = {
  headerValues: PropTypes.array,
  sorter: PropTypes.func,
  idPrefix: PropTypes.string,
};

export default DataTableHeader;
