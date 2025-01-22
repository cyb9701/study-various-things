import { createContext, useReducer, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Diary from './page/Diary';
import Edit from './page/Edit';
import Home from './page/Home';
import New from './page/New';
import NotFound from './page/NotFound';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 내용',
  },
  {
    id: 2,
    createdDate: new Date('2025-2-1').getTime(),
    emotionId: 4,
    content: '2번 내용',
  },
  {
    id: 3,
    createdDate: new Date('2025-1-1').getTime(),
    emotionId: 3,
    content: '3번 내용',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];

    case 'UPDATE':
      return state.map((item) =>
        item.id == action.data.id ? action.data : item
      );

    case 'DELETE':
      return state.filter((item) => item.id != action.data);
  }
};

export const DiaryStateContext = createContext();

export const DiaryDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(4);

  const handleCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const handleEdit = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: id,
    });
  };

  return (
    <>
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
      <DiaryStateContext.Provider value={state}>
        <DiaryDispatchContext.Provider
          value={{
            handleCreate,
            handleEdit,
            handleDelete,
          }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path='new' element={<New />} />
            <Route path='edit/:id' element={<Edit />} />
            <Route path='diary/:id' element={<Diary />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
