import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Even from './component/Event';
import Viewer from './component/Viewer';

function App() {
  console.log('🍀App:7🍀');
  const [count, setCount] = useState(0);

  const isMount = useRef(false);

  // 1. mount: 탄생. 랜더링.
  useEffect(() => {
    console.log('🍀App:11🍀', 'mount');
  }, []);

  // 2. update: 변화. 리랜더링.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log('🍀App:16🍀', 'update');
  });

  // 3. unmount: 죽음.
  // Even.jsx

  // useEffect(() => {
  //   console.log('🍀App:10🍀', `count: ${count}`);
  // }, [count]);
  // // 의존성 배ㄹ.
  // // dependency array.
  // // deps.

  const handleChange = (value) => {
    // 비동기로 동작.
    setCount(count + value);
  };

  return (
    <div className='app'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onChange={handleChange} />
      </section>
    </div>
  );
}

export default App;
