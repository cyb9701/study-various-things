import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Diary from './page/Diary';
import Edit from './page/Edit';
import Home from './page/Home';
import New from './page/New';
import NotFound from './page/NotFound';

const DIARY_STATE_KEY = 'diaryStateKey';

const DIARY_ID_KEY = 'diaryIdKey';

const reducer = (state, action) => {
  let updatedState;

  switch (action.type) {
    case 'INIT':
      return action.data;

    case 'CREATE': {
      updatedState = [...state, action.data];
      break;
    }

    case 'UPDATE': {
      updatedState = state.map((item) =>
        item.id == action.data.id ? action.data : item
      );

      break;
    }

    case 'DELETE': {
      updatedState = state.filter((item) => item.id != action.data);
      break;
    }
  }

  localStorage.setItem(DIARY_STATE_KEY, JSON.stringify(updatedState));

  return updatedState;
};

export const DiaryStateContext = createContext();

export const DiaryDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem(DIARY_STATE_KEY);
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parseData = JSON.parse(storedData);

    if (Array.isArray(parseData)) {
      let maxId = 0;
      parseData.forEach((e) => {
        if (Number(e.id) > maxId) {
          maxId = Number(e.id);
        }
      });

      idRef.current = maxId + 1;
    }

    dispatch({
      type: 'INIT',
      data: parseData,
    });

    setIsLoading(false);
  }, []);

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

  if (isLoading) {
    return <div>Loading</div>;
  }

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
