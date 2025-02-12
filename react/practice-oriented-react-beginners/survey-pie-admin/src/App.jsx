import { Route, Routes } from 'react-router';
import './App.css';
import BuilderPage from './page/BuilderPage';
import ListPage from './page/ListPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/builder' element={<BuilderPage />} />
      </Routes>
    </>
  );
}

export default App;
