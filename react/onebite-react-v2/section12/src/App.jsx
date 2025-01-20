import { Route, Routes } from 'react-router-dom';
import './App.css';
import Diary from './page/Diary';
import Home from './page/Home';
import New from './page/New';
import NotFound from './page/NotFound';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='new' element={<New />} />
      <Route path='diary' element={<Diary />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
