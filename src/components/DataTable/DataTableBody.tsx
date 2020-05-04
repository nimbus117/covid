import React from 'react';
import PropTypes from 'prop-types';
import { HeaderValue, CountryRow } from '../../types';
import { addCommasToInt } from '../../utils/utils';

type DataTableBodyProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const format = (value: string | number): string =>
  typeof value === 'number' ? addCommasToInt(value) : value;

const DataTableBody = ({
  data,
  headerValues,
}: DataTableBodyProps): JSX.Element => (
  <tbody>
    {data.map((d, idx) => (
      <tr key={idx}>
        {headerValues.map((hv) => (
          <td key={hv.id}>{format(d[hv.id as keyof CountryRow])}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

DataTableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTableBody;
