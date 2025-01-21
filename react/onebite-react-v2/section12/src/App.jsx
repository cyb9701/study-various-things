import { Route, Routes } from 'react-router-dom';
import './App.css';
import Button from './component/Button';
import Header from './component/Header';
import Diary from './page/Diary';
import Home from './page/Home';
import New from './page/New';
import NotFound from './page/NotFound';

function App() {
  // const nav = useNavigate();

  // const handleClick = () => {
  //   nav('/new');
  // };

  return (
    <>
      <Header
        title='header'
        leftChild={<Button text='left' />}
        rightChild={<Button text='right' />}
      />
      {/* <button onClick={handleClick}>New 페이지로 이동</button>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <div>
        <a href='/'>Home</a>
        <a href='/new'>New</a>
        <a href='/diary'>Diary</a>
      </div> */}
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
