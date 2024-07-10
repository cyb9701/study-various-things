import React, {useEffect, useState} from 'react';

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

  useEffect(() => {
    let intervalId;

    if (lottoNumbers.length === 1) {
      intervalId = setInterval(() => {
        setBonusBall(lottoNumbers[0]);
        setLottoNumbers([]);
      }, 1000);
    } else {
      const number = lottoNumbers.splice(0, 1)[0];
      intervalId = setInterval(() => {
        setLottoBalls((prevState) => {
          return [...prevState, number];
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [lottoBalls]);

  const handleClickButton = () => {
    setLottoNumbers(getLottoNumbers());
    setLottoBalls([]);
    setBonusBall(null);
  }

  return (
    <>
      <div>당첨 번호</div>
      {
        lottoBalls.length !== 0 && lottoBalls.map((e) => <div key={e}>{e}</div>)
      }
      <div>보너스</div>
      {
        bonusBall && <div>{bonusBall}</div>
      }
      {
        lottoNumbers.length === 0 && <button onClick={handleClickButton}>reload</button>
      }
    </>
  );
}

export default Lotto;