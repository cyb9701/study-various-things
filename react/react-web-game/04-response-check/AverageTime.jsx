import React from "react";

const AverageTime = (props) => {
  const {result} = props;

  return (
    <>
      {
        result.length !== 0 &&
        <div>
          <div>평균 시간</div>
          <ul>
            {result.reverse().map((e) => <li>{e}ms</li>)}
          </ul>
        </div>
      }
    </>
  );
}

export default AverageTime;