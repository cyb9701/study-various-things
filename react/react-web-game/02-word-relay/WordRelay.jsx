const React = require('react');

const WordRelay = () => {
  const [word, setWord] = React.useState('사과');
  const [inputValue, setInputValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === inputValue[0]) {
      setWord(inputValue);
      setInputValue('');
      setResult('정답');
    } else {
      setInputValue('');
      setResult('땡');
    }

    inputRef.current.focus();
  }

  const handleChangeInput = (value) => {
    setInputValue(value.currentTarget.value);
    setResult('');
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} value={inputValue} type="text" onChange={handleChangeInput}/>
        <button type='submit'>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

module.exports = WordRelay;