import React, {useState} from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);

  const handleClickScreen = () => {

  }
  
  return (
    <>
      <div id='screen' className={state} onClick={handleClickScreen}>
        {message}
      </div>
      {result.length !== 0 && <div>평균 시간: {result.reduce((a, b) => a + b) / result.length}ms</div>}
    </>
  )
}

export default ResponseCheck;