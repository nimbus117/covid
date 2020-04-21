import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CountryRow, HeaderValue, HeaderId } from '../../types';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';

const idPrefix = 'dataTable-';

const sort = (
  data: CountryRow[],
  sortBy: HeaderId,
  sortAsc: true | false,
): CountryRow[] => {
  return data
    .concat()
    .sort(
      (a: CountryRow, b: CountryRow): number =>
        (a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0) *
        (sortAsc ? 1 : -1),
    );
};

type DataTableProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const DataTable = ({ data, headerValues }: DataTableProps): JSX.Element => {
  const initialSortHeader = headerValues.find((hv) => hv.id === 'confirmed');
  const [sortValue, setSortValue] = useState(initialSortHeader);

  const requestSort = (headerValue: HeaderValue): void => {
    const newValue = { ...headerValue };
    newValue.sortAsc =
      headerValue.id === sortValue?.id
        ? !sortValue.sortAsc
        : headerValue.sortAsc;
    setSortValue(newValue);
  };

  return (
    <table>
      <DataTableHeader
        headerValues={headerValues}
        requestSort={requestSort}
        idPrefix={idPrefix}
      />
      <DataTableBody
        data={React.useMemo(
          () =>
            sort(
              data,
              sortValue?.id as HeaderId,
              sortValue?.sortAsc as true | false,
            ),
          [data, sortValue],
        )}
        headerValues={headerValues}
      />
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  headerValues: PropTypes.array,
};

export default DataTable;
