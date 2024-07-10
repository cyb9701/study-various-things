import React, {useCallback, useEffect, useRef, useState} from 'react';
import Ball from "./Ball";

const getLottoNumbers = () => {
  console.log('🍀Lotto.jsx:5🍀', 'getLottoNumbers');
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
  // const values = useMemo(() => getLottoNumbers(), []);
  // const [lottoNumbers, setLottoNumbers] = useState(values);
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


  /**
   * useRef: 일반 값을 기억한다.
   * useMemo: 복잡한 함수의 결과 값을 기억한다.
   * useCallback: 함수를 기억한다.
   *    함수 생성 자체가 너무 오래 걸린다고 했을 때, 함수를 기억한다.
   *    함수 안에서 useState의 값을 사용할 경우, useState 값이 변경해도 첫번째 값을 계속 기억하는 문제가 있다.
   *    그렇기 때문에 의존성 배열에 추가해야 한다.
   */
  const handleClickButton = useCallback(() => {
    setLottoNumbers(getLottoNumbers());
    setLottoBalls([]);
    setBonusBall(null);
    setReload(false);
    timeOuts.current = [];
  }, []);

  return (
    <>
      <div>당첨 번호</div>
      {
        lottoBalls.length !== 0 && lottoBalls.map((e) => <Ball key={e} number={e}/>)
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