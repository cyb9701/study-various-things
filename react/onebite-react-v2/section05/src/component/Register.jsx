// 간단한 회원가입 폼.
// 1. 이름.
// 2. 생년월일.
// 3. 국적.
// 4. 자기소개.

import { useRef, useState } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const countRef = useRef(0);

  const inputRef = useRef();

  const handleChange = (e) => {
    countRef.current++;
    console.log('🍀Register:21🍀', countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const handleChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };

  // const handleChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  const handleSubmit = () => {
    if (input.name === '') {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          name='name'
          ref={inputRef}
          placeholder='이름'
          value={input.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name='birth'
          type='date'
          value={input.birth}
          onChange={handleChange}
        />
      </div>
      <div>
        <select name='country' value={input.country} onChange={handleChange}>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='au'>호주</option>
        </select>
      </div>
      <div>
        <textarea
          name='bio'
          value={input.bio}
          onChange={handleChange}
          maxLength={50}
        />
      </div>
      <button onClick={handleSubmit}>제출</button>
    </>
  );
};

export default Register;
