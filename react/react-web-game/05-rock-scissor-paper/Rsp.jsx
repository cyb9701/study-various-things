import React from 'react';

const Rsp = () => {

  const handleClickButton = (value) => {
    console.log('[Rsp.jsx:6]', value);
  }

  return (
    <>
      <div id="computer"
           style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`}}
      />
      <div>
        <button id='r' className='btn' onClick={() => handleClickButton('r')}>가위</button>
        <button id='s' className='btn' onClick={() => handleClickButton('s')}>바위</button>
        <button id='b' className='btn' onClick={() => handleClickButton('p')}>보</button>
      </div>
    </>
  )
}

export default Rsp;