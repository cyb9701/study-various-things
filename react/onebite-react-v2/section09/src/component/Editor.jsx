import { useRef } from 'react';
import './Editor.css';

const Editor = ({ onCreate }) => {
  const inputRef = useRef();

  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    if (!inputValue) {
      inputRef.current.focus();
      return;
    }

    onCreate(inputValue);
    inputRef.current.value = '';
    inputRef.current.blur();
  };

  return (
    <div className='editor'>
      <input
        type='text'
        placeholder='새로운 Todo'
        ref={inputRef}
        onKeyDown={handleKeydown}
      />
      <button onClick={handleClick}>추가</button>
    </div>
  );
};

export default Editor;
