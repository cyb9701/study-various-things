import { useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  const [count, setCount] = useState(0);

  const handleChange = (value) => {
    setCount(count + value);
  };

  return (
    <div className='app'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onChange={handleChange} />
      </section>
    </div>
  );
}

export default App;
