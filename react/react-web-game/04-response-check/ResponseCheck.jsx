import React, {useRef, useState} from 'react';
import AverageTime from "./AverageTime";


const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);

  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const handleClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요');
      timeout.current = setTimeout(() => {
          setState('now');
          setMessage('지금 클릭');
          startTime.current = new Date();
        },
        Math.floor(Math.random() * 1000 + 2000),
      );
    } else if (state === 'ready') {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 빨라요');
    } else if (state === 'now') {
      console.log('[ResponseCheck.jsx:28]', startTime);
      setState('waiting');
      setMessage('클릭해서 시작하세요');
      endTime.current = new Date();
      setResult((prevState) => {
        return [...prevState, endTime.current - startTime.current];
      });
    }
  }

  const handleReset = () => {
    setResult([]);
  }

  return (
    <>
      <div id='screen' className={state} onClick={handleClickScreen}>
        {message}
      </div>
      <button style={{margin: '10px 0'}} type='button' onClick={handleReset}>Reset</button>
      <AverageTime result={result}/>
    </>
  )
}

export default ResponseCheck;