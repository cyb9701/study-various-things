import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ dispatch, rowData, rowIndex }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((_, i) => (
          <Td
            key={i}
            dispatch={dispatch}
            rowIndex={rowIndex}
            cellIndex={i}
            cellData={rowData[i]}
          >
            {''}
          </Td>
        ))}
    </tr>
  );
});

export default Tr;
