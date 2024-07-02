import React from 'react';
import TryItem from "./TryItem";

const Try = (props) => {
  const {tryInfo} = props;

  return (
    <>
      <h4>TRY: {tryInfo.length}</h4>
      <ul>
        {tryInfo.map((value, index) => {
          return <TryItem key={index} tries={value} index={index}/>;
        })}
      </ul>
    </>
  );
}

export default Try;