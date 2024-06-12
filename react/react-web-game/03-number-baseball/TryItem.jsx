import React from 'react';

const TryItem = (props) => {
  const {tries} = props;
  const {value, result} = tries;

  return (
    <li>{`${value.split('').join(', ')} -> ${result}`}</li>
  );
}

export default TryItem