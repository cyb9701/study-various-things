import React, { memo } from 'react';

const Td = memo(({ cellData }) => {
  return <td>{cellData}</td>;
});

export default Td;
