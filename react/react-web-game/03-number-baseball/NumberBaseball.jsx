import React from 'react';
import Try from "./Try";

let getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * candidate.length);
    const randomValue = candidate[randomIndex];
    candidate.splice(randomIndex, 1);
    array.push(randomValue);
  }

  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [tries, setTries] = React.useState([]);
  const [answer, setAnswer] = React.useState(getNumbers());
  const inputRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === answer.join('')) {
      setResult('SUCCESS');
      setTries([]);
      setAnswer(getNumbers());
    } else {
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('')} 입니다.`);
        setTries([]);
        setAnswer(getNumbers());
      } else {
        const inputIntArray = inputValue.split('').map((value) => parseInt(value));
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < 4; i++) {
          if (answer[i] === inputIntArray[i]) {
            strike += 1;
          } else if (answer.includes(inputIntArray[i])) {
            ball += 1;
          }
        }

        setResult(`FAIL`);
        setTries([...tries, {value: inputValue, result: `${strike}S / ${ball}B`}]);
      }
    }

    setInputValue('');
    inputRef.current.focus();
  }

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
    setResult('');
  }

  const buttonDisabledState =
    inputValue.length !== 4 ? 'disabled' : '';

  return (
    <>
      <h3>RESULT: {result}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" maxLength={4} ref={inputRef} value={inputValue}
               onChange={handleChangeInput}/>
        <button type='submit' disabled={buttonDisabledState}>SUBMIT</button>
      </form>
      <Try tries={tries}/>
    </>
  );
}

export default NumberBaseball;