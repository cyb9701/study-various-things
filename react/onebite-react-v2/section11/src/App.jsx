import { createContext, useCallback, useMemo, useReducer, useRef } from 'react';
import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];

    case 'UPDATE': {
      const updatedTodos = state.map((todo) => {
        return todo.id !== action.data
          ? todo
          : { ...todo, isDone: !todo.isDone };
      });

      return updatedTodos;
    }

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.data);
  }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const idRef = useRef(null);

  const handleCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const handleDone = useCallback((id) => {
    dispatch({
      type: 'UPDATE',
      data: id,
    });
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({
      type: 'DELETE',
      data: id,
    });
  }, []);

  const memoValue = useMemo(() => {
    return {
      onCreate: handleCreate,
      onDone: handleDone,
      onDelete: handleDelete,
    };
  }, []);

  return (
    <div className='app'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoValue}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
