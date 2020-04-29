import React from 'react';
import PropTypes from 'prop-types';
import { HeaderValue, CountryRow } from '../../types';

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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTableBody;
