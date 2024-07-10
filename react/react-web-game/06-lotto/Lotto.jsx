import React, {useEffect, useRef, useState} from 'react';
import Ball from "./Ball";

const getLottoNumbers = () => {
  const candidate = Array(45).fill(0).map((v, i) => i + 1);
  const shuffle = [];

  while (candidate.length > 0) {
    const number = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1,
    )[0];
    shuffle.push(number);
  }

  const bonusNumber = shuffle[shuffle.length - 1];
  const lottoNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);

  return [...lottoNumbers, bonusNumber];
}

const Lotto = () => {
  const [lottoNumbers, setLottoNumbers] = useState(getLottoNumbers);
  const [lottoBalls, setLottoBalls] = useState([]);
  const [bonusBall, setBonusBall] = useState(null);
  const [reload, setReload] = useState(false);
  const timeOuts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < lottoNumbers.length; i++) {
      timeOuts.current[i] = setTimeout(() => {
        if (i !== lottoNumbers.length - 1) {
          setLottoBalls((prevState) => {
            return [...prevState, lottoNumbers[i]];
          })
        } else {
          setBonusBall(lottoNumbers[i]);
          setReload(true);
        }
      }, (i + 1) * 1000);
    }
    return () => {
      timeOuts.current.forEach((e) => {
        clearTimeout(e);
      })
    };
  }, [timeOuts.current]);

  const handleClickButton = () => {
    setLottoNumbers(getLottoNumbers());
    setLottoBalls([]);
    setBonusBall(null);
    setReload(false);
    timeOuts.current = [];
  }

  return (
    <>
      <div>당첨 번호</div>
      {
        lottoBalls.length !== 0 && lottoBalls.map((e) => <Ball number={e}/>)
      }
      <div>보너스</div>
      {
        bonusBall && <Ball number={bonusBall}/>
      }
      {
        reload && <button onClick={handleClickButton}>reload</button>
      }
    </>
  );
}

export default Lotto;