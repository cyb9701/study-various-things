import React from 'react';
import Try from "./Try";

const getNumbers = () => {
  return 1;
}

const NumberBaseball = () => {
  const [result, setResult] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [tries, setTries] = React.useState([]);
  const answer = getNumbers();


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <h3>RESULT: {result}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" maxLength={4} value={inputValue} onChange={handleChangeInput}/>
        <button type='submit'>SUBMIT</button>
      </form>
      <Try tries={tries}/>
    </>
  );
}

export default NumberBaseball;