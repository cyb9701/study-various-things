import React, {memo} from 'react';
import TryItem from "./TryItem";

const Try = memo((props) => {
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
})

Try.displayName = 'Try';
export default Try;