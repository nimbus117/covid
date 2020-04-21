import React from 'react';
import PropTypes from 'prop-types';
import { HeaderValue, CountryRow } from '../../types';
import { numberWithCommas } from '../../utils/numbers';

type DataTableBodyProps = {
  data: CountryRow[];
  headerValues: HeaderValue[];
};

const DataTableBody = ({
  data,
  headerValues,
}: DataTableBodyProps): JSX.Element => (
  <tbody>
    {data.map((d, idx) => (
      <tr key={idx}>
        {headerValues.map((hv) => (
          <td key={hv.id}>{d[hv.id as keyof CountryRow]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

DataTableBody.propTypes = {
  data: PropTypes.array,
  headerValues: PropTypes.array,
};

export default DataTableBody;
