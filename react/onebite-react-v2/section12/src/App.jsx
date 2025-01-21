import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Diary from './page/Diary';
import Home from './page/Home';
import New from './page/New';
import NotFound from './page/NotFound';
import getEmotionImage from './util/get-emotion-image';

function App() {
  const nav = useNavigate();

  const handleClick = () => {
    nav('/new');
  };

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
      </div>
      <button onClick={handleClick}>New 페이지로 이동</button>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <div>
        <a href='/'>Home</a>
        <a href='/new'>New</a>
        <a href='/diary'>Diary</a>
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path='new' element={<New />} />
        <Route path='diary/:id' element={<Diary />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
