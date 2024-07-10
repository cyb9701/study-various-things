import React, {useState} from 'react';
import useInterval from "./useInterval";

const respCoords = {
  'r': '0',
  's': '-142px',
  'p': '-284px',
}

const Rsp = () => {
  const [result, setResult] = useState('');
  const [imageCoords, setImageCoords] = useState(respCoords.r);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const handleChangeImageCoords = () => {
    if (!isRunning) {
      return;
    }

    if (imageCoords === respCoords.r) {
      setImageCoords(respCoords.s);
    } else if (imageCoords === respCoords.s) {
      setImageCoords(respCoords.p);
    } else if (imageCoords === respCoords.p) {
      setImageCoords(respCoords.r);
    }
  }

  const handleClickButton = (value) => {
    if (!isRunning) {
      return;
    }

    setIsRunning(false);

    if (respCoords[value] === imageCoords) {
      setResult('Draw');
    } else if (isWin(value)) {
      setResult('Win');
      setScore((prevState) => {
        return prevState + 1;
      })
    } else {
      setResult('Loose');
      setScore((prevState) => {
        return prevState - 1;
      })
    }

    setTimeout(() => {
      setIsRunning(true);
    }, 2000,);
  }

  const isWin = (value) => {
    const myCoords = respCoords[value];

    if (myCoords === respCoords.r && imageCoords === respCoords.s) {
      return true;
    } else if (myCoords === respCoords.s && imageCoords === respCoords.p) {
      return true;
    } else if (myCoords === respCoords.p && imageCoords === respCoords.r) {
      return true;
    } else {
      return false;
    }
  }

  useInterval(
    handleChangeImageCoords,
    isRunning ? 100 : null,
  );
  // useEffect(() => {
  //   interval.current = setInterval(
  //     handleChangeImageCoords,
  //     100,
  //   );
  //
  //   return () => {
  //     clearInterval(interval.current);
  //   }
  // }, [imageCoords, isRunning]);

  return (
    <>
      <div id="computer"
           style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imageCoords} 0`}}
      />
      <div>
        <button id='r' className='btn' onClick={() => handleClickButton('r')}>바위</button>
        <button id='s' className='btn' onClick={() => handleClickButton('s')}>가위</button>
        <button id='p' className='btn' onClick={() => handleClickButton('p')}>보</button>
      </div>
      <div>현재 {score}점</div>
      <div>{result}</div>
    </>
  )
}

export default Rsp;