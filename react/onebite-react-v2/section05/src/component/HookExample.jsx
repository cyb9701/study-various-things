// 3가지 hook 관련 팁.

import { useState } from 'react';

// 1. 함수 컴포넌트 커스텀 훅 내부에서만 호출 가능.
// const state = useState();

const HookExample = () => {
  // 2. 조건부로 호출될 수는 없다.
  // if (true) {
  //   const state = useState();
  // }

  const [input, handleChange] = useInput();

  return (
    <>
      <input value={input} onChange={handleChange} />
    </>
  );
};

// 3. 나만의 훅 (Custom Hook) 직접 만들 수 있다.
//
// 보통 [hooks]라는 폴더에 위치한다.
function useInput() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
}

export default HookExample;
