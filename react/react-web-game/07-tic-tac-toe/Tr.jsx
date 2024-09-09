import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td key={i} cellData={rowData[i]}>
            {''}
          </Td>
        ))}
    </tr>
  );
});

export default Tr;
