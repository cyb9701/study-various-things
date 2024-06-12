import React from 'react';

const TryItem = (props) => {
  const {value, index} = props;

  return (
    <li key={value + index}>{value}</li>
  );
}

export default TryItem