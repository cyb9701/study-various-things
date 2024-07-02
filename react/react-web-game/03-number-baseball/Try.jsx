import React, {memo} from 'react';
import TryItem from "./TryItem";

const Try = memo((props) => {
  const {tryInfo: values} = props;

  return (
    <>
      <h4>TRY: {values.length}</h4>
      <ul>
        {values.map((value, index) => {
          return <TryItem key={index} tries={value} index={index}/>;
        })}
      </ul>
    </>
  );
})

Try.displayName = 'Try';
export default Try;