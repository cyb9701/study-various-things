import React from 'react';
import Tr from './Tr';

const Table = ({ dispatch, tableData }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((_, i) => (
            <Tr
              key={i}
              dispatch={dispatch}
              rowIndex={i}
              rowData={tableData[i]}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
