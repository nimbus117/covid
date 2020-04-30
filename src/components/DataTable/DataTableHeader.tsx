import React from 'react';
import PropTypes from 'prop-types';
import { HeaderValue, TableSortRequester } from '../../types';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

type DataTableHeaderProps = {
  headerValues: HeaderValue[];
  requestSort: TableSortRequester;
  sortValue: HeaderValue;
};

const DataTableHeader = ({
  headerValues,
  requestSort,
  sortValue,
}: DataTableHeaderProps): JSX.Element => (
  <thead>
    <tr>
      {headerValues.map((hv) => (
        <th onClick={(): void => requestSort(hv)} key={hv.id}>
          <div>
            {hv.id === sortValue.id ? (
              sortValue.sortAsc ? (
                <FaSortUp />
              ) : (
                <FaSortDown />
              )
            ) : (
              <FaSort />
            )}
            {hv.title}
          </div>
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
