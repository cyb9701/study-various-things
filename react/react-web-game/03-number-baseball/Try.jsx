import React from 'react';
import TryItem from "./TryItem";


const Try = (props) => {
  const {tries} = props;

  return (
    <>
      <h4>TRY: {tries.length}</h4>
      <ul>
        {tries.map((value, index) => {
          return <TryItem value={value} index={index}/>;
        })}
      </ul>
    </>
  );
}

export default Try;