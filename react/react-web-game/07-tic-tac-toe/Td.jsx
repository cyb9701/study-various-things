import React, { memo, useCallback } from 'react';
import { CHANGE_TABLE_DATA } from './TicTacToe';

const Td = memo(({ dispatch, rowIndex, cellIndex, cellData }) => {
  const handleClicked = useCallback(() => {
    if (cellData) return;

    dispatch({
      type: CHANGE_TABLE_DATA,
      rowIndex: rowIndex,
      cellIndex: cellIndex,
    });
  }, [cellData]);

  return <td onClick={handleClicked}>{cellData}</td>;
});

export default Td;
